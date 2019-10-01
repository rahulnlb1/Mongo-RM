import { Schema } from 'mongoose';

import { project as projectSchema } from '../schema';

export class ProjectDocument {
    private schema: Schema;

    constructor() {
        this.schema = new Schema(projectSchema);
        this.beforeSave();
    }

    private beforeSave = (): void => {
        // this.schema.pre('save', ( next: Function ) => {
        //     const project = this;
        //     if(project){
        //         const now: Date = new Date();
        //         if( !project.createdOn ) {
        //             project.createdOn = now;
        //         }
        //         project.changedOn = now;
        //     }
        //     next();
        // });
    };

    public getSchema = (): Schema => {
        return this.schema;
    };
}
const document = new ProjectDocument();
export default document.getSchema();
