import { Model, model } from 'mongoose';

import projectSchema from './project-document';
import { Project } from '../interface';

class ProjectModel {
    private model: Model<Project>;
    public static CollectionName: string = 'Project';

    constructor() {
        this.model = model(ProjectModel.CollectionName, projectSchema);
    }

    public getModel() {
        return this.model;
    }
}

const projectModelObj = new ProjectModel();
const projectModel = projectModelObj.getModel();
export default projectModel;
