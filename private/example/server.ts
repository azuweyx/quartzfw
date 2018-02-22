import * as Path from 'path';
import Application from './application.module';

import { ServerDecorator, AppDecorator } from '..';

const domainCsrUrl = Path.resolve(__dirname, '../../../domain.csr');
const domainKeyUrl = Path.resolve(__dirname, '../../../domain.key');
const domainCrtUrl = Path.resolve(__dirname, '../../../domain.crt');

@ServerDecorator({
	application: Application,
	domainKeyUrl,
	domainCrtUrl,
	domainCsrUrl,
	forceToSSL: false
})
export default class Server {}