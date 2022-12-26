"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsSettingsCommandableHttpClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class SmsSettingsCommandableHttpClientV1 extends pip_services3_rpc_nodex_1.CommandableHttpClient {
    constructor(config) {
        super('v1/sms_settings');
        let thisConfig = pip_services3_commons_nodex_1.ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null)
            this.configure(thisConfig);
    }
    getSettingsByIds(correlationId, recipientIds) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_settings_by_ids', correlationId, {
                recipient_ids: recipientIds
            });
        });
    }
    getSettingsById(correlationId, recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_settings_by_id', correlationId, {
                recipient_id: recipientId
            });
        });
    }
    getSettingsByPhoneSettings(correlationId, phone) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_settings_by_phone', correlationId, {
                phone: phone
            });
        });
    }
    setSettings(correlationId, settings) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('set_settings', correlationId, {
                settings: settings
            });
        });
    }
    setVerifiedSettings(correlationId, settings) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('set_verified_settings', correlationId, {
                settings: settings
            });
        });
    }
    setRecipient(correlationId, recipientId, name, phone, language) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('set_recipient', correlationId, {
                recipient_id: recipientId,
                name: name,
                phone: phone,
                language: language
            });
        });
    }
    setSubscriptions(correlationId, recipientId, subscriptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('set_subscriptions', correlationId, {
                recipient_id: recipientId,
                subscriptions: subscriptions
            });
        });
    }
    deleteSettingsById(correlationId, recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('delete_settings_by_id', correlationId, {
                recipient_id: recipientId
            });
        });
    }
    resendVerification(correlationId, recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('resend_verification', correlationId, {
                recipient_id: recipientId
            });
        });
    }
    verifyPhone(correlationId, recipientId, code) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('verify_phone', correlationId, {
                recipient_id: recipientId,
                code: code
            });
        });
    }
}
exports.SmsSettingsCommandableHttpClientV1 = SmsSettingsCommandableHttpClientV1;
//# sourceMappingURL=SmsSettingsCommandableHttpClientV1.js.map