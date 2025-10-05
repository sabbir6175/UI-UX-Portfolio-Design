import { model, Schema } from "mongoose";
import { IUser } from "./users.interface";

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'customer'], default: 'customer' },
    profile: {
      avatar: { type: String },
      bio: { type: String },
    },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true } // automatically adds createdAt and updatedAt
);

const UserModel = model<IUser>('User', userSchema);

export default UserModel;