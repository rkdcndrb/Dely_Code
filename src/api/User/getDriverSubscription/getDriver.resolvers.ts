import { withFilter } from "graphql-yoga";

const resolvers = {
  Subscription: {
    getDriver: {
      subscribe: withFilter(
        (_, __, { pubsub }) => pubsub.asyncIterator("driverUpdate"),
        (payload, __, { rawReq }) => {
          const {
            connection: {
              context: { currentUser }
            }
          } = rawReq;
          const { lastLat, lastLng } = currentUser;
          const {
            getDriver: { lastLat: driverLat, lastLng: driverLng }
          } = payload;
          return (
            driverLat >= lastLat - 0.05 &&
            driverLat <= lastLat + 0.05 &&
            driverLng >= lastLng - 0.05 &&
            driverLng <= lastLng + 0.05
          );
        }
      )
    }
  }
};

export default resolvers;
