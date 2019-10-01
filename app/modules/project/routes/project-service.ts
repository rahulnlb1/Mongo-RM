import { Project as IProject } from '../interface';
import projectModel from '../models';

export class ProjectService {
    constructor() {}

    public create = async (reqBody: Object): Promise<IProject> => {
        return projectModel.create(reqBody);
    };

    public get = async (): Promise<IProject[]> => {
        return projectModel.find({});
    };

    public getById = async (projectID: string): Promise<IProject | null> => {
        return projectModel.findOne({ ID: projectID });
    };

    public update = async (reqParam: string, reqBody: Object): Promise<any> => {
        return projectModel.updateOne({ ID: reqParam }, reqBody);
    };

    public delete = async (projectID: string): Promise<any> => {
        return projectModel.deleteOne({ ID: projectID });
    };
}
