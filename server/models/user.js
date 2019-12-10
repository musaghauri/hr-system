const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    accountType: {
      type: String,
      enum: ['professional', 'client', 'community_manager'],
    },
    isOnboarded: {
      type: Boolean,
      default: true,
    },
    name: String,
    password: String,
    isActive: {
      type: Boolean,
      default: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: 'waiting_for_approval',
    },
    address: {
      street: String,
      postCode: String,
      town: String,
      country: String,
    },
    phone: {
      code: String,
      number: String,
    },
    profilePicture: String,
    about: String,
    tva: String,
    title: String,
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
