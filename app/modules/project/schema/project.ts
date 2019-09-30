import { Schema } from "mongoose";

export const project = {
    ID: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    createdOn: {
        type: Date,
        required: true
    },
    changedOn: {
        type: Date,
        required: true
    }
}