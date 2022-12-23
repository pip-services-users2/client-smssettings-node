import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { SmsSettingsNullClientV1 } from '../version1/SmsSettingsNullClientV1';
import { SmsSettingsMockClientV1 } from '../version1/SmsSettingsMockClientV1';
import { SmsSettingsDirectClientV1 } from '../version1/SmsSettingsDirectClientV1';
import { SmsSettingsCommandableHttpClientV1 } from '../version1/SmsSettingsCommandableHttpClientV1';
import { SmsSettingsCommandableLambdaClientV1 } from '../version1';

export class SmsSettingsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-smssettings', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('service-smssettings', 'client', 'null', 'default', '1.0');
	public static MockClientV1Descriptor = new Descriptor('service-smssettings', 'client', 'mock', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-smssettings', 'client', 'direct', 'default', '1.0');
	public static CommandableHttpClientV1Descriptor = new Descriptor('service-smssettings', 'client', 'commandable-http', 'default', '1.0');
	public static CommandableLambdaClientV1Descriptor = new Descriptor('service-smssettings', 'client', 'commandable-lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(SmsSettingsClientFactory.NullClientV1Descriptor, SmsSettingsNullClientV1);
		this.registerAsType(SmsSettingsClientFactory.MockClientV1Descriptor, SmsSettingsMockClientV1);
		this.registerAsType(SmsSettingsClientFactory.DirectClientV1Descriptor, SmsSettingsDirectClientV1);
		this.registerAsType(SmsSettingsClientFactory.CommandableHttpClientV1Descriptor, SmsSettingsCommandableHttpClientV1);
		this.registerAsType(SmsSettingsClientFactory.CommandableLambdaClientV1Descriptor, SmsSettingsCommandableLambdaClientV1);
	}
	
}
