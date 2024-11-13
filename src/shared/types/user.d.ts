export interface DataTypeUser {
  userID: string;
  photo: string;
  name: string;
  email: string;
  Roles: [
    {
      name: string;
    }
  ];
  createdAt: Date;
  status: string;
  invitationID: string;
}
