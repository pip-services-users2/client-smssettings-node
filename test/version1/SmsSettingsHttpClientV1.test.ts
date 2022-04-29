import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { SmsNullClientV1 } from 'client-sms-node';
import { SmsSettingsMemoryPersistence } from 'service-smssettings-node';
import { SmsSettingsController } from 'service-smssettings-node';
import { SmsSettingsHttpServiceV1 } from 'service-smssettings-node';

import { SmsSettingsHttpClientV1 } from '../../src/version1/SmsSettingsHttpClientV1';
import { SmsSettingsClientFixtureV1 } from './SmsSettingsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('SmsSettingsHttpClientV1', ()=> {
    let service: SmsSettingsHttpServiceV1;
    let client: SmsSettingsHttpClientV1;
    let fixture: SmsSettingsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new SmsSettingsMemoryPersistence();
        let controller = new SmsSettingsController();
        controller.configure(new ConfigParams());

        service = new SmsSettingsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-smssettings', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-smssettings', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-smssettings', 'service', 'http', 'default', '1.0'), service,
            new Descriptor('service-sms', 'client', 'null', 'default', '1.0'), new SmsNullClientV1()
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new SmsSettingsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new SmsSettingsClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
