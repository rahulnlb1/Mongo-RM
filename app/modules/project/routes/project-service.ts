import { Project as ProjectInteface } from '../interface';
import projectModel from '../models';

export class ProjectService {
    constructor() {}

    public create = async (reqBody: Object): Promise<ProjectInteface> => {
        return await projectModel.create(reqBody);
    };

    public get = async (): Promise<ProjectInteface[]> => {
        return await projectModel.find({});
    };

    public getById = async (projectID: string): Promise<ProjectInteface[]> => {
        return await projectModel.find({ ID: projectID });
    };

    public update = async (reqParam: string, reqBody: Object): Promise<any> => {
        return await projectModel.updateOne({ ID: reqParam }, reqBody);
    };

    public delete = async (projectID: string): Promise<any> => {
        return await projectModel.deleteOne({ ID: projectID });
    };
}
