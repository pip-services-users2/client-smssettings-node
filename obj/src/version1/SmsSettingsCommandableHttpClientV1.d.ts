import { CommandableHttpClient } from 'pip-services3-rpc-nodex';
import { SmsSettingsV1 } from './SmsSettingsV1';
import { ISmsSettingsClientV1 } from './ISmsSettingsClientV1';
export declare class SmsSettingsCommandableHttpClientV1 extends CommandableHttpClient implements ISmsSettingsClientV1 {
    private _defaultParameters;
    constructor(config?: any);
    getSettingsByIds(correlationId: string, recipientIds: string[]): Promise<SmsSettingsV1[]>;
    getSettingsById(correlationId: string, recipientId: string): Promise<SmsSettingsV1>;
    getSettingsByPhoneSettings(correlationId: string, phone: string): Promise<SmsSettingsV1>;
    setSettings(correlationId: string, settings: SmsSettingsV1): Promise<SmsSettingsV1>;
    setVerifiedSettings(correlationId: string, settings: SmsSettingsV1): Promise<SmsSettingsV1>;
    setRecipient(correlationId: string, recipientId: string, name: string, phone: string, language: string): Promise<SmsSettingsV1>;
    setSubscriptions(correlationId: string, recipientId: string, subscriptions: any): Promise<SmsSettingsV1>;
    deleteSettingsById(correlationId: string, recipientId: string): Promise<void>;
    resendVerification(correlationId: string, recipientId: string): Promise<void>;
    verifyPhone(correlationId: string, recipientId: string, code: string): Promise<void>;
}
