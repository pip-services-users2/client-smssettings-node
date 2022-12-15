import { ConfigParams } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';

import { SmsSettingsV1 } from './SmsSettingsV1';
import { ISmsSettingsClientV1 } from './ISmsSettingsClientV1';

export class SmsSettingsCommandableHttpClientV1 extends CommandableHttpClient implements ISmsSettingsClientV1 {
    private _defaultParameters: ConfigParams;

    constructor(config?: any) {
        super('v1/sms_settings');

        let thisConfig = ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null) this.configure(thisConfig);
    }

    public async getSettingsByIds(correlationId: string, recipientIds: string[]): Promise<SmsSettingsV1[]> {
        return await this.callCommand(
            'get_settings_by_ids',
            correlationId,
            {
                recipient_ids: recipientIds
            }
        );
    }

    public async getSettingsById(correlationId: string, recipientId: string): Promise<SmsSettingsV1> {
        return await this.callCommand(
            'get_settings_by_id',
            correlationId,
            {
                recipient_id: recipientId
            }
        );
    }

    public async getSettingsByPhoneSettings(correlationId: string, phone: string): Promise<SmsSettingsV1> {
        return await this.callCommand(
            'get_settings_by_phone',
            correlationId,
            {
                phone: phone
            }
        );
    }

    public async setSettings(correlationId: string, settings: SmsSettingsV1): Promise<SmsSettingsV1> {
        return await this.callCommand(
            'set_settings',
            correlationId,
            {
                settings: settings
            }
        );
    }

    public async setVerifiedSettings(correlationId: string, settings: SmsSettingsV1): Promise<SmsSettingsV1> {
        return await this.callCommand(
            'set_verified_settings',
            correlationId,
            {
                settings: settings
            }
        );
    }

    public async setRecipient(correlationId: string, recipientId: string,
        name: string, phone: string, language: string): Promise<SmsSettingsV1> {
        let timing = this.instrument(correlationId, 'sms_settings.set_recipient');

        return await this.callCommand(
            'set_recipient',
            correlationId,
            {
                recipient_id: recipientId,
                name: name,
                phone: phone,
                language: language
            }
        );
    }

    public async setSubscriptions(correlationId: string, recipientId: string, subscriptions: any): Promise<SmsSettingsV1> {
        return await this.callCommand(
            'set_subscriptions',
            correlationId,
            {
                recipient_id: recipientId,
                subscriptions: subscriptions
            }
        );
    }

    public async deleteSettingsById(correlationId: string, recipientId: string): Promise<void> {
        return await this.callCommand(
            'delete_settings_by_id',
            correlationId,
            {
                recipient_id: recipientId
            }
        );
    }

    public async resendVerification(correlationId: string, recipientId: string): Promise<void> {
        return await this.callCommand(
            'resend_verification',
            correlationId,
            {
                recipient_id: recipientId
            }
        );
    }

    public async verifyPhone(correlationId: string, recipientId: string, code: string): Promise<void> {
        return await this.callCommand(
            'verify_phone',
            correlationId,
            {
                recipient_id: recipientId,
                code: code
            }
        );
    }
}
