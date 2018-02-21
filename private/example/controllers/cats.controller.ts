import { ControllerDecorator, GetDecorator } from '../..';
import { Request, Response } from 'express';

@ControllerDecorator('cats')
export default class CatsController {
	@GetDecorator()
	private test(req: Request, res: Response) {
		res.send('hello meow');
	}
}