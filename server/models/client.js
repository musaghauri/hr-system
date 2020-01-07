const mongoose = require('mongoose');

const { Schema } = mongoose;

const clientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    company: {
      name: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      city: {
        type: Schema.Types.ObjectId,
        ref: 'City',
      },
    },
    website: {
      type: Schema.Types.ObjectId,
      ref: 'City',
    },
    status: {
      type: Schema.Types.ObjectId,
      ref: 'Status',
    },
    projects: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Project',
      },
    ],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const Client = mongoose.model('Client', clientSchema);

export default Client;
