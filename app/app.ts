import { env } from "process";
import * as Express from "express";
import * as Mongoose from "mongoose";
import * as BodyParser from "body-parser";
import * as Morgan from "morgan";
import { ProjectRoute, ProjectModel } from "./modules/project";

const app: Express.Application = Express();
const port: string = env.PORT || '3000';


app.use(Morgan('combined'));
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.get('/', (req, res) => {
    res.json({"body": "I got it"});
});


const projectRoute = new ProjectRoute();
app.use(ProjectRoute.BasePath, projectRoute.getRouter());

Mongoose.connect('mongodb://localhost:27017/ResourceManagementDB', { useNewUrlParser: true});
const db = Mongoose.connection;

//db.model(ProjectModel.CollectionName);

db.on('error', console.error.bind(console, 'connection: error'));
db.on('open', () => {
    console.log('Mongo Connected');
    app.listen(port, () => {    
        console.log(`Listening to port ${port}`);
    });    
})

