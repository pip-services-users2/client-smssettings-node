import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { SmsSettingsNullClientV1 } from '../version1/SmsSettingsNullClientV1';
import { SmsSettingsMemoryClientV1 } from '../version1/SmsSettingsMemoryClientV1';
import { SmsSettingsDirectClientV1 } from '../version1/SmsSettingsDirectClientV1';
import { SmsSettingsHttpClientV1 } from '../version1/SmsSettingsHttpClientV1';

export class SmsSettingsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-smssettings', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('service-smssettings', 'client', 'null', 'default', '1.0');
	public static MemoryClientV1Descriptor = new Descriptor('service-smssettings', 'client', 'memory', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-smssettings', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('service-smssettings', 'client', 'http', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(SmsSettingsClientFactory.NullClientV1Descriptor, SmsSettingsNullClientV1);
		this.registerAsType(SmsSettingsClientFactory.MemoryClientV1Descriptor, SmsSettingsMemoryClientV1);
		this.registerAsType(SmsSettingsClientFactory.DirectClientV1Descriptor, SmsSettingsDirectClientV1);
		this.registerAsType(SmsSettingsClientFactory.HttpClientV1Descriptor, SmsSettingsHttpClientV1);
	}
	
}
