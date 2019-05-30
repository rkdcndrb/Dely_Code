export const typeDefs = ["type Subscription {\r\n  newMessage: Message\r\n}\r\n","type GetChatResponse {\r\n  ok: Boolean!\r\n  chat: Chat\r\n  error: String\r\n}\r\n\r\ntype Query {\r\n  getChat(rideId: Int!): GetChatResponse!\r\n}\r\n","type SendMessageResponse {\r\n  ok: Boolean!\r\n  error: String\r\n  message: Message\r\n}\r\n\r\ntype Mutation {\r\n  sendMessage(message: String!): SendMessageResponse!\r\n}\r\n","type Chat {\r\n  id: Int!\r\n  participants: [User]\r\n  messages: [Message]\r\n}\r\n","type Message {\r\n  user: User\r\n  message: String\r\n  userId: Int\r\n  chatId: Int\r\n  id: Int!\r\n}\r\n","type SignS3URLResponse {\r\n  ok: Boolean!\r\n  signedUrl: String\r\n  fileUrl: String\r\n  error: String\r\n}\r\n\r\ntype Mutation {\r\n  signS3URL(fileName: String!, fileType: String!): SignS3URLResponse!\r\n}\r\n","type AddPlaceResponse {\r\n  ok: Boolean!\r\n  place: Place\r\n  error: String\r\n}\r\n\r\ntype Mutation {\r\n  addPlace(\r\n    address: String!\r\n    name: String!\r\n    lat: Float!\r\n    lng: Float!\r\n    fav: Boolean\r\n  ): AddPlaceResponse!\r\n}\r\n","type DeletePlaceResponse {\r\n  ok: Boolean!\r\n  error: String\r\n}\r\n\r\ntype Mutation {\r\n  deletePlace(placeId: Int!): DeletePlaceResponse!\r\n}\r\n","type EditPlaceResponse {\r\n  ok: Boolean!\r\n  error: String\r\n}\r\n\r\ntype Mutation {\r\n  editPlace(\r\n    placeId: Int!\r\n    name: String\r\n    latlong: String\r\n    address: String\r\n    fav: Boolean\r\n  ): EditPlaceResponse!\r\n}\r\n","type GetPlaceResponse {\r\n  ok: Boolean!\r\n  place: Place\r\n  error: String\r\n}\r\n\r\ntype Query {\r\n  getPlace(placeId: Int!): GetPlaceResponse!\r\n}\r\n","type GetPlacesResponse {\r\n  ok: Boolean!\r\n  places: [Place]\r\n  error: String\r\n}\r\n\r\ntype Query {\r\n  getPlaces: GetPlacesResponse!\r\n}\r\n","type Place {\r\n  id: Int!\r\n  name: String!\r\n  lat: Float!\r\n  lng: Float!\r\n  address: String!\r\n  fav: Boolean!\r\n  user: User!\r\n  createdAt: String!\r\n  updatedAt: String!\r\n}\r\n","type GetRideResponse {\r\n  ok: Boolean!\r\n  ride: Ride\r\n  isDriver: Boolean\r\n  error: String\r\n}\r\n\r\ntype Query {\r\n  getRide(rideId: Int): GetRideResponse!\r\n}\r\n","type GetRideHistoryResponse {\r\n  ok: Boolean!\r\n  rides: [Ride]\r\n  error: String\r\n}\r\n\r\ntype Query {\r\n  getRideHistory: GetRideHistoryResponse!\r\n}\r\n","type GetRideRequestResponse {\r\n  ok: Boolean!\r\n  error: String\r\n  ride: Ride\r\n}\r\n\r\ntype Query {\r\n  getRideRequest: GetRideRequestResponse!\r\n}\r\n","type RequestRideResponse {\r\n  ok: Boolean!\r\n  ride: Ride\r\n  error: String\r\n}\r\n\r\ntype Mutation {\r\n  requestRide(\r\n    pickUpLocation: String!\r\n    dropOffLocation: String!\r\n    pickUpLat: Float!\r\n    pickUpLng: Float!\r\n    dropOffLat: Float!\r\n    dropOffLng: Float!\r\n    price: Float!\r\n    distance: String!\r\n    duration: String!\r\n  ): RequestRideResponse!\r\n}\r\n","type Subscription {\r\n  rideRequest: Ride\r\n}\r\n","type Subscription {\r\n  rideUpdate: Ride\r\n}\r\n","type Ride {\r\n  id: Int!\r\n  status: String!\r\n  driverRating: Float\r\n  passengerRating: Float\r\n  passenger: User!\r\n  driver: User\r\n  pickUpLocation: String!\r\n  dropOffLocation: String!\r\n  pickUpLat: Float!\r\n  pickUpLng: Float!\r\n  dropOffLng: Float!\r\n  dropOffLat: Float!\r\n  price: Float\r\n  paymentMethod: String!\r\n  createdAt: String!\r\n  updatedAt: String!\r\n  distance: String!\r\n  duration: String!\r\n}\r\n","type UpdateRideResponse {\r\n  ok: Boolean!\r\n  ride: Ride\r\n  error: String\r\n}\r\n\r\ntype Mutation {\r\n  updateRide(\r\n    rideId: Int!\r\n    status: String\r\n    driverRating: Float\r\n    passengerRating: Float\r\n    driverId: Int\r\n  ): UpdateRideResponse!\r\n}\r\n","type AddPhoneResponse {\r\n  ok: Boolean!\r\n  error: String\r\n}\r\n\r\ntype Mutation {\r\n  addPhone(phoneNumber: String!): AddPhoneResponse!\r\n}\r\n","type CompletePhoneSignInResponse {\r\n  ok: Boolean!\r\n  token: String\r\n  error: String\r\n}\r\n\r\ntype Mutation {\r\n  completePhoneSignIn(\r\n    key: String!\r\n    phone: String!\r\n  ): CompletePhoneSignInResponse!\r\n}\r\n","type EmailSignInResponse {\r\n  ok: Boolean!\r\n  token: String\r\n  error: String\r\n  user: User\r\n}\r\n\r\ntype Mutation {\r\n  emailSignIn(email: String!, password: String!): EmailSignInResponse!\r\n}\r\n","type EmailSignUpResponse {\r\n  ok: Boolean!\r\n  token: String\r\n  error: String\r\n}\r\n\r\ntype Mutation {\r\n  emailSignUp(\r\n    phoneNumber: String!\r\n    email: String!\r\n    firstName: String!\r\n    lastName: String!\r\n    password: String!\r\n    age: Int!\r\n    profilePhoto: String!\r\n  ): EmailSignUpResponse!\r\n}\r\n","type FacebookConnectResponse {\r\n  ok: Boolean!\r\n  token: String\r\n  error: String\r\n  user: User\r\n}\r\n\r\ntype Mutation {\r\n  facebookConnect(\r\n    email: String\r\n    firstName: String!\r\n    lastName: String!\r\n    userID: String!\r\n  ): FacebookConnectResponse!\r\n}\r\n","type GetDriversResponse {\r\n  drivers: [User]\r\n}\r\n\r\ntype Query {\r\n  getDrivers: GetDriversResponse!\r\n}\r\n","type Subscription {\r\n  getDriver: User\r\n}\r\n","type GetUserProfileResponse {\r\n  ok: Boolean!\r\n  user: User\r\n  error: String\r\n}\r\n\r\ntype Query {\r\n  getUserProfile(id: Int!): GetUserProfileResponse!\r\n}\r\n","type GetUsersResponse {\r\n  ok: Boolean!\r\n  users: [User]!\r\n  error: String\r\n}\r\n\r\ntype Query {\r\n  getUsers: GetUsersResponse!\r\n}\r\n","type MeResponse {\r\n  ok: Boolean!\r\n  user: User\r\n  error: String\r\n}\r\n\r\ntype Query {\r\n  me: MeResponse\r\n}\r\n","type RequestPasswordResetResponse {\r\n  ok: Boolean!\r\n  error: String\r\n}\r\n\r\ntype Mutation {\r\n  requestPasswordReset: RequestPasswordResetResponse!\r\n}\r\n","type RequestPhoneSignInResponse {\r\n  ok: Boolean!\r\n  error: String\r\n}\r\n\r\ntype Mutation {\r\n  requestPhoneSignIn(phoneNumber: String!): RequestPhoneSignInResponse!\r\n}\r\n","type ResetPasswordResponse {\r\n  ok: Boolean\r\n  error: String\r\n}\r\n\r\ntype Mutation {\r\n  resetPassword(key: String!, newPassword: String!): ResetPasswordResponse!\r\n}\r\n","type Confirmation {\r\n  id: Int!\r\n  userId: Int!\r\n  user: User!\r\n  sent: Boolean!\r\n  key: String!\r\n  type: String!\r\n  createdAt: String!\r\n  updatedAt: String!\r\n}\r\n","type User {\r\n  id: Int!\r\n  email: String\r\n  facebookId: String\r\n  firstName: String\r\n  lastName: String\r\n  age: Int\r\n  password: String\r\n  verifiedEmail: Boolean\r\n  loginType: String!\r\n  phoneNumber: String\r\n  verifiedPhoneNumber: Boolean\r\n  profilePhoto: String\r\n  createdAt: String\r\n  updatedAt: String\r\n  fullName: String\r\n  confirmations: [Confirmation]\r\n  isDriving: Boolean\r\n  balance: Float\r\n  carPlates: String\r\n  ridesAsPassenger: [Ride]!\r\n  ridesAsDriver: [Ride]!\r\n  places: [Place]\r\n  lastLat: Float\r\n  lastLng: Float\r\n  isTaken: Boolean\r\n  isRiding: Boolean\r\n  lastOrientation: Float\r\n  currentRideId: Int\r\n}\r\n","type UpdateUserResponse {\r\n  ok: Boolean!\r\n  user: User\r\n  error: String\r\n}\r\n\r\ntype Mutation {\r\n  updateUser(\r\n    email: String\r\n    firstName: String\r\n    lastName: String\r\n    password: String\r\n    age: Int\r\n    phoneNumber: String\r\n    profilePhoto: String\r\n    isDriving: Boolean\r\n    lastLat: Float\r\n    lastLng: Float\r\n    lastOrientation: Float\r\n  ): UpdateUserResponse!\r\n}\r\n","type VerifyEmailResponse {\r\n  ok: Boolean!\r\n  error: String\r\n}\r\n\r\ntype Mutation {\r\n  verifyEmail(key: String!): VerifyEmailResponse!\r\n}\r\n","type VerifyPhoneResponse {\r\n  ok: Boolean!\r\n  error: String\r\n}\r\n\r\ntype Mutation {\r\n  verifyPhone(key: String!): VerifyPhoneResponse!\r\n}\r\n"];
/* tslint:disable */

export interface Query {
  me: MeResponse | null;
}

export interface MeResponse {
  ok: boolean;
  user: User | null;
  error: string | null;
}

export interface User {
  id: number;
  email: string | null;
  facebookId: string | null;
  firstName: string | null;
  lastName: string | null;
  age: number | null;
  password: string | null;
  verifiedEmail: boolean | null;
  loginType: string;
  phoneNumber: string | null;
  verifiedPhoneNumber: boolean | null;
  profilePhoto: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  fullName: string | null;
  confirmations: Array<Confirmation> | null;
  isDriving: boolean | null;
  balance: number | null;
  carPlates: string | null;
  ridesAsPassenger: Array<Ride>;
  ridesAsDriver: Array<Ride>;
  places: Array<Place> | null;
  lastLat: number | null;
  lastLng: number | null;
  isTaken: boolean | null;
  isRiding: boolean | null;
  lastOrientation: number | null;
  currentRideId: number | null;
}

export interface Confirmation {
  id: number;
  userId: number;
  user: User;
  sent: boolean;
  key: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

export interface Ride {
  id: number;
  status: string;
  driverRating: number | null;
  passengerRating: number | null;
  passenger: User;
  driver: User | null;
  pickUpLocation: string;
  dropOffLocation: string;
  pickUpLat: number;
  pickUpLng: number;
  dropOffLng: number;
  dropOffLat: number;
  price: number | null;
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
  distance: string;
  duration: string;
}

export interface Place {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
  fav: boolean;
  user: User;
  createdAt: string;
  updatedAt: string;
}

export interface Mutation {
  verifyPhone: VerifyPhoneResponse;
}

export interface VerifyPhoneMutationArgs {
  key: string;
}

export interface VerifyPhoneResponse {
  ok: boolean;
  error: string | null;
}

export interface Subscription {
  getDriver: User | null;
}

export interface GetChatResponse {
  ok: boolean;
  chat: Chat | null;
  error: string | null;
}

export interface Chat {
  id: number;
  participants: Array<User> | null;
  messages: Array<Message> | null;
}

export interface Message {
  user: User | null;
  message: string | null;
  userId: number | null;
  chatId: number | null;
  id: number;
}

export interface SendMessageResponse {
  ok: boolean;
  error: string | null;
  message: Message | null;
}

export interface SignS3URLResponse {
  ok: boolean;
  signedUrl: string | null;
  fileUrl: string | null;
  error: string | null;
}

export interface AddPlaceResponse {
  ok: boolean;
  place: Place | null;
  error: string | null;
}

export interface DeletePlaceResponse {
  ok: boolean;
  error: string | null;
}

export interface EditPlaceResponse {
  ok: boolean;
  error: string | null;
}

export interface GetPlaceResponse {
  ok: boolean;
  place: Place | null;
  error: string | null;
}

export interface GetPlacesResponse {
  ok: boolean;
  places: Array<Place> | null;
  error: string | null;
}

export interface GetRideResponse {
  ok: boolean;
  ride: Ride | null;
  isDriver: boolean | null;
  error: string | null;
}

export interface GetRideHistoryResponse {
  ok: boolean;
  rides: Array<Ride> | null;
  error: string | null;
}

export interface GetRideRequestResponse {
  ok: boolean;
  error: string | null;
  ride: Ride | null;
}

export interface RequestRideResponse {
  ok: boolean;
  ride: Ride | null;
  error: string | null;
}

export interface UpdateRideResponse {
  ok: boolean;
  ride: Ride | null;
  error: string | null;
}

export interface AddPhoneResponse {
  ok: boolean;
  error: string | null;
}

export interface CompletePhoneSignInResponse {
  ok: boolean;
  token: string | null;
  error: string | null;
}

export interface EmailSignInResponse {
  ok: boolean;
  token: string | null;
  error: string | null;
  user: User | null;
}

export interface EmailSignUpResponse {
  ok: boolean;
  token: string | null;
  error: string | null;
}

export interface FacebookConnectResponse {
  ok: boolean;
  token: string | null;
  error: string | null;
  user: User | null;
}

export interface GetDriversResponse {
  drivers: Array<User> | null;
}

export interface GetUserProfileResponse {
  ok: boolean;
  user: User | null;
  error: string | null;
}

export interface GetUsersResponse {
  ok: boolean;
  users: Array<User>;
  error: string | null;
}

export interface RequestPasswordResetResponse {
  ok: boolean;
  error: string | null;
}

export interface RequestPhoneSignInResponse {
  ok: boolean;
  error: string | null;
}

export interface ResetPasswordResponse {
  ok: boolean | null;
  error: string | null;
}

export interface UpdateUserResponse {
  ok: boolean;
  user: User | null;
  error: string | null;
}

export interface VerifyEmailResponse {
  ok: boolean;
  error: string | null;
}
