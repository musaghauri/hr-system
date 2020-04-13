const mongoose = require('mongoose');

const { Schema } = mongoose;
// const bcrypt = require('bcrypt-nodejs');

const tokenSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  token: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['reset-password'],
  },
  isClicked: {
    type: Boolean,
    default: false,
  },
  clickedAt: {
    type: Date,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
    expires: '24h',
  },
  updatedAt: {
    type: Date,
  },
});

const Token = mongoose.model('Token', tokenSchema);

export default Token;
