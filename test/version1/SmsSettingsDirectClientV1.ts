import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { SmsNullClientV1 } from 'client-sms-node';
import { SmsSettingsMemoryPersistence } from 'service-smssettings-node';
import { SmsSettingsController } from 'service-smssettings-node';

import { SmsSettingsDirectClientV1 } from '../../src/version1/SmsSettingsDirectClientV1';
import { SmsSettingsClientFixtureV1 } from './SmsSettingsClientFixtureV1';

suite('SmsSettingsDirectClientV1', ()=> {
    let client: SmsSettingsDirectClientV1;
    let fixture: SmsSettingsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new SmsSettingsMemoryPersistence();
        let controller = new SmsSettingsController();
        controller.configure(new ConfigParams());

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-smssettings', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-smssettings', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-sms', 'client', 'null', 'default', '1.0'), new SmsNullClientV1()
        );
        controller.setReferences(references);

        client = new SmsSettingsDirectClientV1();
        client.setReferences(references);

        fixture = new SmsSettingsClientFixtureV1(client);

        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
