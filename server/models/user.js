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
    personalInformation: {
      companyEmail: {
        type: String,
        required: true,
      },
      fatherName: String,
      dateOfBirth: Date,
      gender: {
        type: String,
        enum: ['Male', 'Female']
      },
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
      maritalStatus: {
        type: String,
        enum: ['Single', 'Married', 'Divorced']
      },
      bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
      },
      disability: String,
      cnic: Number,
      ntn: Number,
      domicile: {
        type: Schema.Types.ObjectId,
        ref: 'City'
      }
    },
    officialInformation: {
      employeeId: Number,
      employeeStatus: {
        type: String,
        enum: ['Permanent', 'Intern', 'Freelancer', 'Contractual']
      },
      designation: String,
      socialSecurity: Number,
      healthBenefits: String,
      providentFund: Number,
      department: {
        type: Schema.Types.ObjectId,
        ref: 'Department',
      },
      joiningDate: Date,
      resignationDate: Date,
      exitDate: Date
    },
    contactInformation: [
      {
        title: String,
        type: {
          type: String,
          enum: ['Mobile', 'Landline', 'Email']
        },
        detail: String
      }
    ],
    salarySettings: {
      paymentMode: {
        type: String,
        enum: ['Bank Transfer', 'Cash']
      },
      exGratiaOnOvertime: Number,
      gratuity: Number,
      bankDetails: String,
    },
    academics: [
      {
        degreeName: String,
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
        leavingReason: String,
        salary: Number,
      },
    ],
    dependents: [
      {
        name: String,
        gender: {
          type: String,
          enum: ['Male', 'Female']
        },
        relation: {
          type: String,
          enum: ['Father', 'Mother', 'Sibling', 'Wife', 'Husband', 'Son', 'Daughter']
        },
        contact: Number,
        dateOfBirth: Date
      },
    ],
    companyAssets: [
      {
        id: {
          type: Schema.Types.ObjectId,
          ref: 'Asset',
        },
        detail: String,
        returnable: Boolean,
        status: Boolean,
        issueDate: Date
      },
    ],
    leaveBalance: Number,
    duties: [
      {
        job: String,
        frequency: String,
        effectiveFrom: Date,
        enhancedTill: Date
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
