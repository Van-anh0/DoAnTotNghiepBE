import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    birthday: {
      type: String,
    },

    address: {
      type: String,
    },

    phone: {
      type: String,
    },

    password: {
      type: String,
      required: true,
    },

    avatarUser: {
      type: String,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },

  { timestamps: true }
);

export default mongoose.model('User', UserSchema);
