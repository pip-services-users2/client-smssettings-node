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
exports.SmsSettingsDirectClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
//import { ISmsSettingsController } from 'service-smssettings-node';
class SmsSettingsDirectClientV1 extends pip_services3_rpc_nodex_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_2.Descriptor("service-smssettings", "controller", "*", "*", "*"));
        let thisConfig = pip_services3_commons_nodex_1.ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null)
            this.configure(thisConfig);
    }
    getSettingsByIds(correlationId, recipientIds) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'sms_settings.get_settings_by_ids');
            try {
                let res = yield this._controller.getSettingsByIds(correlationId, recipientIds);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    getSettingsById(correlationId, recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'sms_settings.get_settings_by_id');
            try {
                let res = yield this._controller.getSettingsById(correlationId, recipientId);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    getSettingsByPhoneSettings(correlationId, phone) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'sms_settings.get_settings_by_phone');
            try {
                let res = yield this._controller.getSettingsBySmsSettings(correlationId, phone);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    setSettings(correlationId, settings) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'sms_settings.set_settings');
            try {
                let res = yield this._controller.setSettings(correlationId, settings);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    setVerifiedSettings(correlationId, settings) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'sms_settings.set_verified_settings');
            try {
                let res = yield this._controller.setVerifiedSettings(correlationId, settings);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    setRecipient(correlationId, recipientId, name, phone, language) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'sms_settings.set_recipient');
            try {
                let res = yield this._controller.setRecipient(correlationId, recipientId, name, phone, language);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    setSubscriptions(correlationId, recipientId, subscriptions) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'sms_settings.set_subscriptions');
            try {
                let res = yield this._controller.setSubscriptions(correlationId, recipientId, subscriptions);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    deleteSettingsById(correlationId, recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'sms_settings.delete_settings_by_id');
            try {
                yield this._controller.deleteSettingsById(correlationId, recipientId);
                timing.endTiming();
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    resendVerification(correlationId, recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'sms_settings.resend_verification');
            try {
                yield this._controller.resendVerification(correlationId, recipientId);
                timing.endTiming();
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    verifyPhone(correlationId, recipientId, code) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'sms_settings.verify_phone');
            try {
                yield this._controller.verifyPhone(correlationId, recipientId, code);
                timing.endTiming();
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
}
exports.SmsSettingsDirectClientV1 = SmsSettingsDirectClientV1;
//# sourceMappingURL=SmsSettingsDirectClientV1.js.map