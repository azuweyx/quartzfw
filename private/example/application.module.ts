import { Application, static as Static } from 'express';

import { AppDecorator, ModuleDecorator } from '../';
import CatsGetController from './controllers/catsget.controller';
import CatsParamController from './controllers/catsparam.controller';
import IndexController from './controllers/index.controller';
import IndexGateway from './gateways/index.gateway';

@ModuleDecorator({
	controllers: [
		CatsGetController,
		CatsParamController,
		IndexController
	],
	gateways: [
		IndexGateway,
		IndexGateway,
		IndexGateway,
		IndexGateway,
		IndexGateway,
		IndexGateway,IndexGateway,
		IndexGateway,IndexGateway,IndexGateway,
		IndexGateway,IndexGateway,
		IndexGateway,
		IndexGateway,
		IndexGateway,
		IndexGateway,IndexGateway,
		IndexGateway,IndexGateway,IndexGateway,
		IndexGateway,IndexGateway,
		IndexGateway,
		IndexGateway,
		IndexGateway,
		IndexGateway,IndexGateway,
		IndexGateway,IndexGateway,IndexGateway,
		IndexGateway,
	]
})
export default class ApplicationModule {
	@AppDecorator
	private app?: Application;

	constructor() {
		this.app && this.app.use(Static(__dirname + '/static'));
	}
}