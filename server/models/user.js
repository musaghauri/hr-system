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
    role: {
      type: Schema.Types.ObjectId,
      ref: 'Role',
    },
    name: String,
    password: String,
    isActive: {
      type: Boolean,
      default: true,
    },
    isVerified: {
      type: Boolean,
      default: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    personal_information: {
      company_email: {
        type: String,
        required: true,
      },
      father_name: String,
      date_of_birth: Date,
      gender: String,
      nationality: String,
      city: {
        type: Schema.Types.ObjectId,
        ref: 'City'
      },
      country: {
        type: Schema.Types.ObjectId,
        ref: 'Country'
      },
      religion: String,
      marital_status: String,
      blood_group: String,
      disability: String,
      cnic: Number,
      ntn: Number,
      domicile: Number
    },
    official_information: {
      employee_id: {
        type: Schema.Types.ObjectId,
        ref: 'Employee'
      },
      employee_status: String,
      designation: String,
      social_security: Number,
      health_benefits: [String],
      provident_fund: Number,
      department: {
        type: Schema.Types.ObjectId,
        ref: 'Department',
      },
      joining_date: Date,
      resignation_date: Date,
      exit_date: Date
    },
    contact_information: [
      {
        title: String,
        type: String,
        detail: String
      }
    ],
    salary_settings: {
      mode_of_payment: String,
      ex_gratia_on_overtime: Number,
      gratuity: Number,
      bank_details: String,
    },
    academics: [
      {
        degree_name: String,
        board: String,
        university: String,
        marks: Number,
        grade: String,
      }
    ],
    experience: [
      {
        organization: String,
        designation: String,
        duration: String,
        leaving_reason: String,
        salary: Number,
      },
    ],
    dependants: [
      {
        name: String,
        gender: String,
        relation: String,
        contact: Number,
        date_of_birth: Date
      },
    ],
    company_assets: [
      {
        name: String,
        detail: String,
        returnable: Boolean,
        status: String,
        issue_data: Date
      },
    ],
    leave_balance: Number,
    duties: [
      {
        job: String,
        frequency: String,
        effective_from: Date,
        enchanced_till: Date
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;