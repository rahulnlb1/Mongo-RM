import { Project as ProjectInteface } from '../interface';
import projectModel from '../models';

export class ProjectService {
    constructor() {}

    public create = async (reqBody: Object): Promise<ProjectInteface> => {
        return projectModel.create(reqBody);
    };

    public get = async (): Promise<ProjectInteface[]> => {
        return projectModel.find({});
    };

    public getById = async (projectID: string): Promise<ProjectInteface[]> => {
        return projectModel.find({ ID: projectID });
    };

    public update = async (reqParam: string, reqBody: Object): Promise<any> => {
        return projectModel.updateOne({ ID: reqParam }, reqBody);
    };

    public delete = async (projectID: string): Promise<any> => {
        return projectModel.deleteOne({ ID: projectID });
    };
}
