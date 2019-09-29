import * as Mongoose from "mongoose";

const projectSchema = new Mongoose.Schema({
    name: { type: String },
    description: { type: String },
    isActive: { type: Boolean, default: true }
})

export const Project = Mongoose.model('Project', projectSchema);