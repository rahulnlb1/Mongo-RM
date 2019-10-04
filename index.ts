import { App } from './app';
import { BasePath as ProjectBasePath, projectRouter } from './app/modules/project';
import { BasePath as HealthBasePath, healthRouter } from './app/modules/health';

const app = new App(); //Init application
const server = app.getServer(); // Get Server of the application

// Add routers to the server
server.addRouter(HealthBasePath, healthRouter);
server.addRouter(ProjectBasePath, projectRouter);

app.initApp();
