const mongoose = require('mongoose');

const { Schema } = mongoose;

const companySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    logo: {
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

const Company = mongoose.model('Company', companySchema);

export default Company;
