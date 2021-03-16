import express, { Request, Response } from 'express';
import { triggersController } from '../../controllers';

export const router = express.Router({
    strict: true
});

router.post('/', (req: Request, res: Response) => {
    triggersController.create(req, res);
});

router.get('/', (req: Request, res: Response) => {
    triggersController.read(req, res);
});

router.patch('/', (req: Request, res: Response) => {
    triggersController.update(req, res);
});

router.delete('/', (req: Request, res: Response) => {
    triggersController.delete(req, res);
});