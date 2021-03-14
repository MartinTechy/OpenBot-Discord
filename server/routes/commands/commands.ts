import express, { Request, Response } from 'express';
import { commandsController } from '../../controllers';

export const router = express.Router({
    strict: true
});

router.post('/', (req: Request, res: Response) => {
    commandsController.create(req, res);
});

router.get('/', (req: Request, res: Response) => {
    commandsController.read(req, res);
});

router.patch('/', (req: Request, res: Response) => {
    commandsController.update(req, res);
});

router.delete('/', (req: Request, res: Response) => {
    commandsController.delete(req, res);
});