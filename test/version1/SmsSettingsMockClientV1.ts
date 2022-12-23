import { SmsSettingsMockClientV1 } from '../../src/version1/SmsSettingsMockClientV1';
import { SmsSettingsClientFixtureV1 } from './SmsSettingsClientFixtureV1';

suite('SmsSettingsMockClientV1', ()=> {
    let client: SmsSettingsMockClientV1;
    let fixture: SmsSettingsClientFixtureV1;

    suiteSetup(() => {
        client = new SmsSettingsMockClientV1();

        fixture = new SmsSettingsClientFixtureV1(client);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
