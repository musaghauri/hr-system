const mongoose = require('mongoose');

const { Schema } = mongoose;

const departmentSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: 'Company',
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const Department = mongoose.model('Department', departmentSchema);

export default Department;
