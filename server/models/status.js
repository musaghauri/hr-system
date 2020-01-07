const mongoose = require('mongoose');

const { Schema } = mongoose;

const statusSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const Status = mongoose.model('Status', statusSchema);

export default Status;
