import { Model, Schema, model } from "mongoose";

import { ProjectDocument } from "./project-document";
import { Project } from "../interface";

export class ProjectModel {
  private model: Model<Project>;
  public static CollectionName: string = "Project";

  private constructor() {
    const projectDocument = new ProjectDocument();
    const schema = projectDocument.getSchema();
    this.model = model(ProjectModel.CollectionName, schema);
  }

  public static getInstance() {
    return new ProjectModel();
  }

  public getModel() {
    return this.model;
  }
}
