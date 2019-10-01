import { Model } from "mongoose";

import { Project as ProjectInteface } from "../interface";
import { projectModel } from "../models";

export class ProjectService {
  //private model: Model<ProjectInteface>;

  constructor() {}

  public create = async (reqBody: Object): Promise<ProjectInteface> => {
    const data = new projectModel(reqBody);
    return await data.save();
  };

  public get = async (): Promise<ProjectInteface[]> => {
    return await projectModel.find({});
  };

  public getById = async (projectID: string): Promise<ProjectInteface[]> => {
    return await projectModel.find({ ID: projectID });
  };

  public update = async (reqBody: Object): Promise<any> => {
    const data = new projectModel(reqBody);
    return await data.updateOne(data);
  };

  public delete = async (projectID: string): Promise<any> => {
    return await projectModel.deleteOne({ ID: projectID });
  };
}
