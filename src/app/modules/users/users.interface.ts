export interface IUser {
  _id?: string; // optional if using MongoDB
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'customer';
  profile?: {
    avatar?: string;
    bio?: string;
  };
  isActive?: boolean; // whether the user account is active
  createdAt?: Date;
  updatedAt?: Date;
}
