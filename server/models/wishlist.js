const mongoose = require('mongoose');

const { Schema } = mongoose;

const wishlistSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    priority: {
      type: Schema.Types.ObjectId,
      ref: 'Priority',
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

export default Wishlist;
