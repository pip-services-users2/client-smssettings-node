import { ISmsSettingsClientV1 } from './ISmsSettingsClientV1';
import { SmsSettingsV1 } from './SmsSettingsV1';

export class SmsSettingsMemoryClientV1 implements ISmsSettingsClientV1 {
    private _settings: SmsSettingsV1[] = [];

    public async getSettingsByIds(correlationId: string, recipientIds: string[]): Promise<SmsSettingsV1[]> {
        let settings = this._settings.filter(s => recipientIds.indexOf(s.id) >= 0);
        return settings;
    }

    public async getSettingsById(correlationId: string, recipientId: string): Promise<SmsSettingsV1> {
        let settings = this._settings.find(s => s.id == recipientId);
        return settings;
    }

    public async getSettingsByPhoneSettings(correlationId: string, phone: string): Promise<SmsSettingsV1> {
        let settings = this._settings.find(s => s.phone == phone);
        return settings;
    }

    public async setSettings(correlationId: string, settings: SmsSettingsV1): Promise<SmsSettingsV1> {

        settings.verified = false;
        settings.subscriptions = settings.subscriptions || {};

        this._settings = this._settings.filter(s => s.id != settings.id);
        this._settings.push(settings);
        return settings;
    }

    public async setVerifiedSettings(correlationId: string, settings: SmsSettingsV1): Promise<SmsSettingsV1> {

        settings.verified = true;
        settings.subscriptions = settings.subscriptions || {};

        this._settings = this._settings.filter(s => s.id != settings.id);
        this._settings.push(settings);
        return settings;
    }

    public async setRecipient(correlationId: string, recipientId: string,
        name: string, phone: string, language: string): Promise<SmsSettingsV1> {

        let settings = this._settings.find(s => s.id == recipientId);

        if (settings) {
            settings.name = name;
            settings.phone = phone;
            settings.language = language;
        } else {
            settings = <SmsSettingsV1> { 
                id: recipientId,
                name: name,
                phone: phone,
                language: language,
                verified: false,
                subscriptions: {}
            };
            this._settings.push(settings);
        }

        return settings;
    }

    public async setSubscriptions(correlationId: string, recipientId: string, subscriptions: any): Promise<SmsSettingsV1> {

        let settings = this._settings.find(s => s.id == recipientId);
        
        if (settings) {
            settings.subscriptions = subscriptions;
        } else {
            settings = <SmsSettingsV1> { 
                id: recipientId,
                name: null,
                phone: null,
                language: null,
                subscriptions: subscriptions
            };
            this._settings.push(settings);
        }

        return settings;
    }

    public async deleteSettingsById(correlationId: string, recipientId: string): Promise<void> {
        this._settings = this._settings.filter(s => s.id != recipientId);
    }

    public resendVerification(correlationId: string, recipientId: string): Promise<void> {
        return;
    }

    public verifyPhone(correlationId: string, recipientId: string, code: string): Promise<void> {

        let settings = this._settings.find(s => s.id == recipientId);

        if (settings && settings.ver_code == code) {
            settings.verified = true;
            settings.ver_code = null;
        }
            
        return null;
    }
}