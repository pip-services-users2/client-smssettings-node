import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { ISmsSettingsClientV1 } from './ISmsSettingsClientV1';
import { SmsSettingsV1 } from './SmsSettingsV1';

//import { ISmsSettingsController } from 'service-smssettings-node';

export class SmsSettingsDirectClientV1 extends DirectClient<any> implements ISmsSettingsClientV1 {
    private _defaultParameters: ConfigParams;

    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-smssettings", "controller", "*", "*", "*"));

        let thisConfig = ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null) this.configure(thisConfig);
    }
    
    public async getSettingsByIds(correlationId: string, recipientIds: string[]): Promise<SmsSettingsV1[]> {
        let timing = this.instrument(correlationId, 'sms_settings.get_settings_by_ids');
        
        try {
            let res = await this._controller.getSettingsByIds(correlationId, recipientIds);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async getSettingsById(correlationId: string, recipientId: string): Promise<SmsSettingsV1> {
        let timing = this.instrument(correlationId, 'sms_settings.get_settings_by_id');
        
        try {
            let res = await this._controller.getSettingsById(correlationId, recipientId);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async getSettingsByPhoneSettings(correlationId: string, phone: string): Promise<SmsSettingsV1> {
        let timing = this.instrument(correlationId, 'sms_settings.get_settings_by_phone');
        
        try {
            let res = await this._controller.getSettingsBySmsSettings(correlationId, phone);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async setSettings(correlationId: string, settings: SmsSettingsV1): Promise<SmsSettingsV1> {
        let timing = this.instrument(correlationId, 'sms_settings.set_settings');
        
        try {
            let res = await this._controller.setSettings(correlationId, settings);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async setVerifiedSettings(correlationId: string, settings: SmsSettingsV1): Promise<SmsSettingsV1> {
        let timing = this.instrument(correlationId, 'sms_settings.set_verified_settings');

        try {
            let res = await this._controller.setVerifiedSettings(correlationId, settings);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async setRecipient(correlationId: string, recipientId: string,
        name: string, phone: string, language: string): Promise<SmsSettingsV1> {
        let timing = this.instrument(correlationId, 'sms_settings.set_recipient');
        
        try {
            let res = await this._controller.setRecipient(correlationId, recipientId, name, phone, language);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async setSubscriptions(correlationId: string, recipientId: string, subscriptions: any): Promise<SmsSettingsV1> {
        let timing = this.instrument(correlationId, 'sms_settings.set_subscriptions');
        
        try {
            let res = await this._controller.setSubscriptions(correlationId, recipientId, subscriptions);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async deleteSettingsById(correlationId: string, recipientId: string): Promise<void> {
        let timing = this.instrument(correlationId, 'sms_settings.delete_settings_by_id');
        
        try {
            await this._controller.deleteSettingsById(correlationId, recipientId);
            timing.endTiming();
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async resendVerification(correlationId: string, recipientId: string): Promise<void> {
        let timing = this.instrument(correlationId, 'sms_settings.resend_verification');

        try {
            await this._controller.resendVerification(correlationId, recipientId);
            timing.endTiming();
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async verifyPhone(correlationId: string, recipientId: string, code: string): Promise<void> {
        let timing = this.instrument(correlationId, 'sms_settings.verify_phone');
        
        try {
            await this._controller.verifyPhone(correlationId, recipientId, code);
            timing.endTiming();
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

}