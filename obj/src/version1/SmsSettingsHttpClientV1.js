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
exports.SmsSettingsHttpClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class SmsSettingsHttpClientV1 extends pip_services3_rpc_nodex_1.CommandableHttpClient {
    constructor(config) {
        super('v1/sms_settings');
        let thisConfig = pip_services3_commons_nodex_1.ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null)
            this.configure(thisConfig);
    }
    getSettingsByIds(correlationId, recipientIds) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'sms_settings.get_settings_by_ids');
            try {
                return yield this.callCommand('get_settings_by_ids', correlationId, {
                    recipient_ids: recipientIds
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getSettingsById(correlationId, recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'sms_settings.get_settings_by_id');
            try {
                return yield this.callCommand('get_settings_by_id', correlationId, {
                    recipient_id: recipientId
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getSettingsByPhoneSettings(correlationId, phone) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'sms_settings.get_settings_by_phone');
            try {
                return yield this.callCommand('get_settings_by_phone', correlationId, {
                    phone: phone
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    setSettings(correlationId, settings) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'sms_settings.set_settings');
            try {
                return yield this.callCommand('set_settings', correlationId, {
                    settings: settings
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    setVerifiedSettings(correlationId, settings) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'sms_settings.set_verified_settings');
            try {
                return yield this.callCommand('set_verified_settings', correlationId, {
                    settings: settings
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    setRecipient(correlationId, recipientId, name, phone, language) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'sms_settings.set_recipient');
            try {
                return yield this.callCommand('set_recipient', correlationId, {
                    recipient_id: recipientId,
                    name: name,
                    phone: phone,
                    language: language
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    setSubscriptions(correlationId, recipientId, subscriptions) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'sms_settings.set_subscriptions');
            try {
                return yield this.callCommand('set_subscriptions', correlationId, {
                    recipient_id: recipientId,
                    subscriptions: subscriptions
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    deleteSettingsById(correlationId, recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'sms_settings.delete_settings_by_id');
            try {
                return yield this.callCommand('delete_settings_by_id', correlationId, {
                    recipient_id: recipientId
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    resendVerification(correlationId, recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'sms_settings.resend_verification');
            try {
                return yield this.callCommand('resend_verification', correlationId, {
                    recipient_id: recipientId
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    verifyPhone(correlationId, recipientId, code) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'sms_settings.verify_phone');
            try {
                return yield this.callCommand('verify_phone', correlationId, {
                    recipient_id: recipientId,
                    code: code
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.SmsSettingsHttpClientV1 = SmsSettingsHttpClientV1;
//# sourceMappingURL=SmsSettingsHttpClientV1.js.map