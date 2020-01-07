const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema({ timestamps: true });

const Project = mongoose.model('Project', projectSchema);

export default Project;
