const mongoose = require('mongoose');

const { Schema } = mongoose;

const stateSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    country: {
      type: Schema.Types.ObjectId,
      ref: 'Country',
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const State = mongoose.model('State', stateSchema);

export default State;
