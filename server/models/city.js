const mongoose = require('mongoose');

const { Schema } = mongoose;

const citySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    state: {
      type: Schema.Types.ObjectId,
      ref: 'State',
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const City = mongoose.model('City', citySchema);

export default City;
