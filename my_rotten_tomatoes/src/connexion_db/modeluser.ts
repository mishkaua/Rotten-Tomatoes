import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
    name: String;
    email: String;
    password: String;
}

const UserSchema: Schema = new Schema({
    email: { type: String, require: true, unique: true },
    name: { type: String, require: true },
    password: { type: String, require: true }
});

const UserModel: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default UserModel