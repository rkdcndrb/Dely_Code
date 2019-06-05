import { getConnection } from "typeorm";
import Chat from "../../../entities/Chat";
import Ride from "../../../entities/Ride";
import User from "../../../entities/User";
import { UpdateRideResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import { authMiddleware, makeMiddleware } from "../../../utils/middlewares";

interface IArgs {
  rideId: number;
  status: string;
  driverRating: number;
  passengerRating: number;
  driverId: number;
  canceledBy: number;
}

const resolvers: Resolvers = {
  Mutation: {
    updateRide: makeMiddleware(
      authMiddleware,
      async (_, args: IArgs, { req, pubsub }): Promise<UpdateRideResponse> => {
        const { user }: { user: User } = req;
        const ride = await getConnection()
          .getRepository(Ride)
          .createQueryBuilder("ride")
          .loadAllRelationIds()
          .where(
            "ride.id = :rideId AND ride.passenger = :userId OR ride.driver = :driverId AND NOT ride.status = 'FINISHED' OR NOT ride.status = 'CANCELED'",
            {
              userId: user.id,
              driverId: user.id,
              rideId: args.rideId
            }
          )
          .getOne();
        const {
          status,
          driverRating,
          passengerRating,
          rideId,
          driverId,
          canceledBy
        } = args;
        console.log(args);
        const updateData: any = {
          status,
          driverRating,
          passengerRating,
          canceledBy
        };
        if (driverId) {
          const driver: User | undefined = await User.findOne(driverId);
          if (driver) {
            updateData.driver = driver;
            driver.currentRideId = rideId;
          }
        }
        if (ride) {
          try {
            await Ride.update(rideId, updateData);
            const updatedRide: Ride | undefined = await Ride.findOne(rideId, {
              relations: ["driver", "passenger"]
            });
            if (updatedRide) {
              pubsub.publish("rideUpdate", { rideUpdate: updatedRide });
              const driver: User = updatedRide.driver;
              const passenger: User = updatedRide.passenger;
              if (status === "CANCELED") {
                if (driver) {
                  driver.isTaken = false;
                  driver.currentRideId = null;
                  await driver.save();
                }
                passenger.currentRideId = null;
                passenger.isRiding = false;
                passenger.isTaken = false;
                await passenger.save();
              } else if (status === "ACCEPTED") {
                const chat = await Chat.create({ ride: updatedRide }).save();
                passenger.currentRideId = updatedRide.id;
                passenger.chat = chat;
                passenger.isTaken = true;
                await passenger.save();
                driver.isTaken = true;
                driver.currentRideId = updatedRide.id;
                driver.chat = chat;
                await driver.save();
              }
              if (status === "FINISHED") {
                driver.isTaken = false;
                driver.currentRideId = null;
                driver.balance = driver.balance + Number(ride.price);
                await driver.save();
                passenger.isTaken = false;
                passenger.isRiding = false;
                passenger.currentRideId = null;
                await passenger.save();
              }
              return {
                ok: true,
                ride: updatedRide,
                error: null
              };
            }
            return {
              ok: false,
              ride: null,
              error: "Couldn't update ride"
            };
          } catch (error) {
            return {
              ok: false,
              ride: null,
              error: "Couldn't update ride"
            };
          }
        } else {
          return {
            ok: false,
            ride: null,
            error: "Ride not found"
          };
        }
      }
    )
  }
};
export default resolvers;
