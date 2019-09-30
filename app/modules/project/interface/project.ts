import { Document } from "mongoose";

export interface Project extends Document {
  ID: String;
  name: String;
  startDate: Date;
  endDate: Date;
  createdOn: Date;
  changedOn: Date;
}
