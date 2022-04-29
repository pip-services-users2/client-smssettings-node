import { SmsSettingsMemoryClientV1 } from '../../src/version1/SmsSettingsMemoryClientV1';
import { SmsSettingsClientFixtureV1 } from './SmsSettingsClientFixtureV1';

suite('SmsSettingsMemoryClientV1', ()=> {
    let client: SmsSettingsMemoryClientV1;
    let fixture: SmsSettingsClientFixtureV1;

    suiteSetup(() => {
        client = new SmsSettingsMemoryClientV1();

        fixture = new SmsSettingsClientFixtureV1(client);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
