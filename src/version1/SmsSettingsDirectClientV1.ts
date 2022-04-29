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
            return await this._controller.getSettingsByIds(correlationId, recipientIds);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getSettingsById(correlationId: string, recipientId: string): Promise<SmsSettingsV1> {
        let timing = this.instrument(correlationId, 'sms_settings.get_settings_by_id');
        
        try {
            return await this._controller.getSettingsById(correlationId, recipientId);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getSettingsByPhoneSettings(correlationId: string, phone: string): Promise<SmsSettingsV1> {
        let timing = this.instrument(correlationId, 'sms_settings.get_settings_by_phone');
        
        try {
            return await this._controller.getSettingsBySmsSettings(correlationId, phone);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async setSettings(correlationId: string, settings: SmsSettingsV1): Promise<SmsSettingsV1> {
        let timing = this.instrument(correlationId, 'sms_settings.set_settings');
        
        try {
            return await this._controller.setSettings(correlationId, settings);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async setVerifiedSettings(correlationId: string, settings: SmsSettingsV1): Promise<SmsSettingsV1> {
        let timing = this.instrument(correlationId, 'sms_settings.set_verified_settings');

        try {
            return await this._controller.setVerifiedSettings(correlationId, settings);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async setRecipient(correlationId: string, recipientId: string,
        name: string, phone: string, language: string): Promise<SmsSettingsV1> {
        let timing = this.instrument(correlationId, 'sms_settings.set_recipient');
        
        try {
            return await this._controller.setRecipient(correlationId, recipientId, name, phone, language);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async setSubscriptions(correlationId: string, recipientId: string, subscriptions: any): Promise<SmsSettingsV1> {
        let timing = this.instrument(correlationId, 'sms_settings.set_subscriptions');
        
        try {
            return await this._controller.setSubscriptions(correlationId, recipientId, subscriptions);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteSettingsById(correlationId: string, recipientId: string): Promise<void> {
        let timing = this.instrument(correlationId, 'sms_settings.delete_settings_by_id');
        
        try {
            await this._controller.deleteSettingsById(correlationId, recipientId);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async resendVerification(correlationId: string, recipientId: string): Promise<void> {
        let timing = this.instrument(correlationId, 'sms_settings.resend_verification');

        try {
            await this._controller.resendVerification(correlationId, recipientId);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async verifyPhone(correlationId: string, recipientId: string, code: string): Promise<void> {
        let timing = this.instrument(correlationId, 'sms_settings.verify_phone');
        
        try {
            await this._controller.verifyPhone(correlationId, recipientId, code);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

}