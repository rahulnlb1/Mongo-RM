import * as Mongoose from "mongoose";

const standupSchema = new Mongoose.Schema({
            teamMember: { type: String },
            project: { type: String },
            workYesterday: { type: String },
            workToday: { type: String },
            impediment: { type: String },
            createdOn: { type: Date, default: Date.now }    
        });

export const Standup = Mongoose.model('Standup', standupSchema);