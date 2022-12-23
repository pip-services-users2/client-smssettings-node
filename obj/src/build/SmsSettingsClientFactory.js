"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsSettingsClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const SmsSettingsNullClientV1_1 = require("../version1/SmsSettingsNullClientV1");
const SmsSettingsMockClientV1_1 = require("../version1/SmsSettingsMockClientV1");
const SmsSettingsDirectClientV1_1 = require("../version1/SmsSettingsDirectClientV1");
const SmsSettingsCommandableHttpClientV1_1 = require("../version1/SmsSettingsCommandableHttpClientV1");
const version1_1 = require("../version1");
class SmsSettingsClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(SmsSettingsClientFactory.NullClientV1Descriptor, SmsSettingsNullClientV1_1.SmsSettingsNullClientV1);
        this.registerAsType(SmsSettingsClientFactory.MockClientV1Descriptor, SmsSettingsMockClientV1_1.SmsSettingsMockClientV1);
        this.registerAsType(SmsSettingsClientFactory.DirectClientV1Descriptor, SmsSettingsDirectClientV1_1.SmsSettingsDirectClientV1);
        this.registerAsType(SmsSettingsClientFactory.CommandableHttpClientV1Descriptor, SmsSettingsCommandableHttpClientV1_1.SmsSettingsCommandableHttpClientV1);
        this.registerAsType(SmsSettingsClientFactory.CommandableLambdaClientV1Descriptor, version1_1.SmsSettingsCommandableLambdaClientV1);
    }
}
exports.SmsSettingsClientFactory = SmsSettingsClientFactory;
SmsSettingsClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-smssettings', 'factory', 'default', 'default', '1.0');
SmsSettingsClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-smssettings', 'client', 'null', 'default', '1.0');
SmsSettingsClientFactory.MockClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-smssettings', 'client', 'mock', 'default', '1.0');
SmsSettingsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-smssettings', 'client', 'direct', 'default', '1.0');
SmsSettingsClientFactory.CommandableHttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-smssettings', 'client', 'commandable-http', 'default', '1.0');
SmsSettingsClientFactory.CommandableLambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-smssettings', 'client', 'commandable-lambda', 'default', '1.0');
//# sourceMappingURL=SmsSettingsClientFactory.js.map