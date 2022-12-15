import { ConfigParams } from 'pip-services3-commons-nodex';
import { CommandableLambdaClient } from 'pip-services3-aws-nodex';

import { SmsSettingsV1 } from './SmsSettingsV1';
import { ISmsSettingsClientV1 } from './ISmsSettingsClientV1';

export class SmsSettingsCommandableLambdaClientV1 extends CommandableLambdaClient implements ISmsSettingsClientV1 {
    private _defaultParameters: ConfigParams;

    constructor(config?: any) {
        super('sms_settings');

        let thisConfig = ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null) this.configure(thisConfig);
    }

    public async getSettingsByIds(correlationId: string, recipientIds: string[]): Promise<SmsSettingsV1[]> {
        let timing = this.instrument(correlationId, 'sms_settings.get_settings_by_ids');

        try {
            let res = await this.callCommand(
                'get_settings_by_ids',
                correlationId,
                {
                    recipient_ids: recipientIds
                }
            );
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
            let res = await this.callCommand(
                'get_settings_by_id',
                correlationId,
                {
                    recipient_id: recipientId
                }
            );
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
            let res = await this.callCommand(
                'get_settings_by_phone',
                correlationId,
                {
                    phone: phone
                }
            );
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
            let res = await this.callCommand(
                'set_settings',
                correlationId,
                {
                    settings: settings
                }
            );
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
            let res = await this.callCommand(
                'set_verified_settings',
                correlationId,
                {
                    settings: settings
                }
            );
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
            let res = await this.callCommand(
                'set_recipient',
                correlationId,
                {
                    recipient_id: recipientId,
                    name: name,
                    phone: phone,
                    language: language
                }
            );
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
            let res = await this.callCommand(
                'set_subscriptions',
                correlationId,
                {
                    recipient_id: recipientId,
                    subscriptions: subscriptions
                }
            );
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
            await this.callCommand(
                'delete_settings_by_id',
                correlationId,
                {
                    recipient_id: recipientId
                }
            );
            timing.endTiming();
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async resendVerification(correlationId: string, recipientId: string): Promise<void> {
        let timing = this.instrument(correlationId, 'sms_settings.resend_verification');

        try {
            await this.callCommand(
                'resend_verification',
                correlationId,
                {
                    recipient_id: recipientId
                }
            );
            timing.endTiming();
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async verifyPhone(correlationId: string, recipientId: string, code: string): Promise<void> {
        let timing = this.instrument(correlationId, 'sms_settings.verify_phone');

        try {
            await this.callCommand(
                'verify_phone',
                correlationId,
                {
                    recipient_id: recipientId,
                    code: code
                }
            );
            timing.endTiming();
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }
}
