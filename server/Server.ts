import express, {Express, Request, Response} from "express";
import path from 'path';
import { commandsRouter } from './routes'

export class Server {

    private app: Express;
    private apiPrefix:string = '/api';

    constructor(app: Express) {
        this.app = app;
    
        this.app.use(`${this.apiPrefix}/commands`, commandsRouter)
    
        this.setupFrontend()
    }

    public start(port: number): void {
        this.app.listen(port, () => console.log(`Server listening on port ${port}!`));
    }

    private setupFrontend():void {
        this.app.use(express.static(path.resolve("./") + "/build/frontend"));

        this.app.get("*", (req: Request, res: Response): void => {
            res.sendFile(path.resolve("./") + "/build/frontend/index.html");
        });
    }

}