import * as Mongoose from "mongoose";

const teamMemberSchema = new Mongoose.Schema({
    name: { type: String }
})

export const TeamMember = Mongoose.model('TeamMember', teamMemberSchema);