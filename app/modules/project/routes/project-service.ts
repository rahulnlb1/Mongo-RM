import { Request, Response } from "express";

import { Project as ProjectInteface } from "../interface";
import { ProjectModel } from "../models";

export class ProjectService {
  private projectModel: ProjectModel;

  constructor() {
    this.projectModel = ProjectModel.getInstance();
  }

  public create = async (reqBody: Object): Promise<ProjectInteface> => {
    const data = new (this.projectModel.getModel())(reqBody);
    return await data.save();
  };

  public get = async (): Promise<ProjectInteface[]> => {
    return await this.projectModel.getModel().find({});
  };

  public getById = async (projectID: string): Promise<ProjectInteface[]> => {
    return await this.projectModel.getModel().find({ ID: projectID });
  };

  public update = async (reqBody: Object): Promise<any> => {
    const data = new (this.projectModel.getModel())(reqBody);
    return await data.updateOne(data);
  };

  public delete = async (projectID: string): Promise<any> => {
    return await this.projectModel.getModel().deleteOne({ ID: projectID });
  };
}
