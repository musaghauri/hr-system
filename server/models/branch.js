const mongoose = require('mongoose');

const { Schema } = mongoose;

const branchSchema = new Schema(
  {
    city: {
      type: Schema.Types.ObjectId,
      ref: 'City',
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    contact: {
      landline: {
        type: String,
      },
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: 'Company',
      // required: true,
    },
    departments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Department',
      },
    ],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const Branch = mongoose.model('Branch', branchSchema);

export default Branch;
