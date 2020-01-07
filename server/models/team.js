const mongoose = require('mongoose');

const { Schema } = mongoose;

const teamSchema = new Schema({ timestamps: true });

const Team = mongoose.model('Team', teamSchema);

export default Team;
