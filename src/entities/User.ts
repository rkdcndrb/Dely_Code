import bcrypt from "bcrypt";
import { IsEmail } from "class-validator";
import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import Chat from "./Chat";
import Confirmation from "./Confirmation";
import Message from "./Message";
import Place from "./Place";
import Ride from "./Ride";

const BCRYPT_ROUNDS = 10;
const EMAIL = "EMAIL";
const FACEBOOK = "FACEBOOK";

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: "text", unique: true })
  @IsEmail()
  email: string;

  @Column({ type: "text", nullable: true })
  facebookId: string;

  @Column({ type: "text" })
  firstName: string;

  @Column({ type: "text" })
  lastName: string;

  @Column({ type: "int", nullable: true })
  age: number;

  @Column({ type: "text", nullable: true })
  password: string;

  @Column({ type: "text", nullable: true })
  major: string;

  @Column({ type: "boolean", default: false })
  verifiedEmail: boolean;

  @Column({ type: "text", enum: [FACEBOOK, EMAIL], default: EMAIL })
  loginType: string;

  @Column({ type: "text", nullable: true })
  phoneNumber: string;

  @Column({ type: "boolean", default: false })
  verifiedPhoneNumber: boolean;

  @Column({ type: "text", nullable: true })
  profilePhoto: string;

  @Column({ type: "boolean", default: false })
  isDriving: boolean;

  @Column({ type: "double precision", default: 0 })
  balance: number;

  @Column({ type: "text", default: "" })
  carPlates: string;

  @Column({ type: "double precision", nullable: true })
  lastLat: number;

  @Column({ type: "double precision", nullable: true })
  lastLng: number;

  @Column({ type: "double precision", nullable: true })
  lastOrientation: number;

  @Column({ type: "boolean", default: false })
  isTaken: boolean;

  @Column({ type: "boolean", default: false })
  isRiding: boolean;

  @Column({ type: "int", nullable: true })
  currentRideId: number | null;

  @OneToMany(type => Confirmation, confirmation => confirmation.user)
  confirmations: Confirmation[];

  @OneToMany(type => Ride, ride => ride.passenger)
  ridesAsPassenger: Ride[];

  @OneToMany(type => Ride, ride => ride.driver)
  ridesAsDriver: Ride[];

  @OneToMany(type => Place, place => place.user)
  places: Place[];

  @Column({ nullable: true })
  chatId: number;

  @ManyToOne(type => Chat, chat => chat.participants, {
    nullable: true
  })
  chat: Chat;

  @OneToMany(type => Message, message => message.user)
  messages: Message[];

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }

  hashPassword(password: string = ""): Promise<string> {
    return bcrypt.hash(password, BCRYPT_ROUNDS);
  }

  comparePassword(password: string, hashString: string): Promise<boolean> {
    return bcrypt.compare(password, hashString);
  }

  @BeforeInsert()
  @BeforeUpdate()
  async savePassword(): Promise<void> {
    if (this.password) {
      console.log(this.password);
      const hashedPassword = await this.hashPassword(this.password);
      this.password = hashedPassword;
    }
  }
}
export default User;
