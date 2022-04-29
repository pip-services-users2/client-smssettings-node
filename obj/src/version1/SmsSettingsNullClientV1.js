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
exports.SmsSettingsNullClientV1 = void 0;
class SmsSettingsNullClientV1 {
    getSettingsByIds(correlationId, recipientIds) {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
    getSettingsById(correlationId, recipientId) {
        return null;
    }
    getSettingsByPhoneSettings(correlationId, phone) {
        return null;
    }
    setSettings(correlationId, settings) {
        return __awaiter(this, void 0, void 0, function* () {
            return settings;
        });
    }
    setVerifiedSettings(correlationId, settings) {
        return __awaiter(this, void 0, void 0, function* () {
            return settings;
        });
    }
    setRecipient(correlationId, recipientId, name, phone, language) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                id: recipientId,
                name: name,
                phone: phone,
                language: language,
                verified: false
            };
        });
    }
    setSubscriptions(correlationId, recipientId, subscriptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                id: recipientId,
                name: null,
                phone: null,
                language: null,
                subscriptions: subscriptions
            };
        });
    }
    deleteSettingsById(correlationId, recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    resendVerification(correlationId, recipientId) {
        return null;
    }
    verifyPhone(correlationId, recipientId, code) {
        return null;
    }
}
exports.SmsSettingsNullClientV1 = SmsSettingsNullClientV1;
//# sourceMappingURL=SmsSettingsNullClientV1.js.map