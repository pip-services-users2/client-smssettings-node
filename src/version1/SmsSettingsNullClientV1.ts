import { ISmsSettingsClientV1 } from './ISmsSettingsClientV1';
import { SmsSettingsV1 } from './SmsSettingsV1';

export class SmsSettingsNullClientV1 implements ISmsSettingsClientV1 {

    public async getSettingsByIds(correlationId: string, recipientIds: string[]): Promise<SmsSettingsV1[]> {
        return [];
    }

    public getSettingsById(correlationId: string, recipientId: string): Promise<SmsSettingsV1> {
        return null;
    }

    public getSettingsByPhoneSettings(correlationId: string, phone: string): Promise<SmsSettingsV1> {
        return null;
    }

    public async setSettings(correlationId: string, settings: SmsSettingsV1): Promise<SmsSettingsV1> {
        return settings;
    }

    public async setVerifiedSettings(correlationId: string, settings: SmsSettingsV1): Promise<SmsSettingsV1> {
        return settings;
    }

    public async setRecipient(correlationId: string, recipientId: string,
        name: string, phone: string, language: string): Promise<SmsSettingsV1> {
        return <SmsSettingsV1>{
            id: recipientId,
            name: name,
            phone: phone,
            language: language,
            verified: false
        };
    }

    public async setSubscriptions(correlationId: string, recipientId: string, subscriptions: any): Promise<SmsSettingsV1> {
        return <SmsSettingsV1>{
            id: recipientId,
            name: null,
            phone: null,
            language: null,
            subscriptions: subscriptions
        };
    }

    public async deleteSettingsById(correlationId: string, recipientId: string): Promise<void> {
        return null;
    }

    public resendVerification(correlationId: string, recipientId: string): Promise<void> {
        return null;
    }

    public verifyPhone(correlationId: string, recipientId: string, code: string): Promise<void> {
        return null;
    }

}