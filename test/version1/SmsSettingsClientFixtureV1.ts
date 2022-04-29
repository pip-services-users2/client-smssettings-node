const assert = require('chai').assert;

import { SmsSettingsV1 } from '../../src/version1/SmsSettingsV1';
import { ISmsSettingsClientV1 } from '../../src/version1/ISmsSettingsClientV1';

let SETTINGS = <SmsSettingsV1> {
    id: '1',
    name: 'User 1',
    phone: '+12345678902',
    language: 'en',
    verified: false
};

export class SmsSettingsClientFixtureV1 {
    private _client: ISmsSettingsClientV1;
    
    constructor(client: ISmsSettingsClientV1) {
        this._client = client;
    }

    public async testCrudOperations() {
        var settings1: SmsSettingsV1;

        // Create sms settings
        let settings = await this._client.setSettings(null, SETTINGS);

        assert.isObject(settings);
        assert.equal(settings.id, SETTINGS.id);
        assert.equal(settings.phone, SETTINGS.phone);
        assert.isFalse(settings.verified);

        settings1 = settings;

        // Create sms settings
        settings = await this._client.setVerifiedSettings(null, settings1);

        assert.isObject(settings);
        assert.equal(settings.id, SETTINGS.id);
        assert.equal(settings.phone, SETTINGS.phone);
        assert.isTrue(settings.verified);

        settings1 = settings;

        // Update the sms settings
        settings1.subscriptions.engagement = true;

        settings = await this._client.setSettings(null, settings1);

        assert.isObject(settings);
        assert.isTrue(settings.subscriptions.engagement);

        settings1 = settings;

        // Get settings
        let settingsList = await this._client.getSettingsByIds(null, [settings1.id]);

        assert.lengthOf(settingsList, 1);

        // Delete settings
        await this._client.deleteSettingsById(null, settings1.id);

        // Try to get deleted settings
        settings = await this._client.getSettingsById(null, settings1.id);


        assert.isNull(settings || null);
    }
        
}
