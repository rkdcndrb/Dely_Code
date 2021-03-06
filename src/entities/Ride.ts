import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import Chat from "./Chat";
import User from "./User";

const CASH = "CASH";
const CARD = "CARD";

const ACCEPTED = "ACCEPTED";
const ONROUTE = "ONROUTE";
const FINISHED = "FINISHED";
const CANCELED = "CANCELED";
const REQUESTING = "REQUESTING";

@Entity()
class Ride extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({
    type: "text",
    enum: [ACCEPTED, ONROUTE, FINISHED, CANCELED, REQUESTING],
    default: REQUESTING
  })
  status: string;

  @Column({ type: "double precision", nullable: true })
  driverRating: number;

  @Column({ type: "double precision", nullable: true })
  passengerRating: number;

  @ManyToOne(type => User, user => user.ridesAsPassenger)
  passenger: User;

  @ManyToOne(type => User, user => user.ridesAsDriver)
  driver: User;

  @Column({ type: "text", nullable: true })
  pickUpLocation: string;

  @Column({ type: "double precision", nullable: true })
  pickUpLat: number;

  @Column({ type: "double precision", nullable: true })
  pickUpLng: number;

  @Column({ type: "double precision", nullable: true })
  dropOffLng: number;

  @Column({ type: "double precision", nullable: true })
  dropOffLat: number;

  @Column({ type: "text", nullable: true })
  dropOffLocation: string;

  @Column({ type: "decimal", nullable: true })
  price: number;

  @Column({ type: "int", nullable: true })
  canceledBy: number;

  @Column({ type: "text", nullable: true })
  distance: string;

  @Column({ type: "text", nullable: true })
  duration: string;

  @Column({ type: "text", nullable: true })
  product: string;

  @Column({ type: "text", enum: [CASH, CARD], default: CASH })
  paymentMethod: string;

  @OneToOne(type => Chat, chat => chat.ride)
  chat: Chat;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;
}
export default Ride;
