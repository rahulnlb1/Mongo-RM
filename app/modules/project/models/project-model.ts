import { Model, Schema, model } from 'mongoose';

import { ProjectDocument } from './project-document';
import { Project } from '../interface';

class ProjectModel {
    private model: Model<Project>;
    public static CollectionName: string = 'Project';

    constructor() {
        const projectDocument = new ProjectDocument();
        const schema = projectDocument.getSchema();
        this.model = model(ProjectModel.CollectionName, schema);
    }

    public getModel() {
        return this.model;
    }
}

const projectModelObj = new ProjectModel();
const projectModel = projectModelObj.getModel();
export { projectModel };
