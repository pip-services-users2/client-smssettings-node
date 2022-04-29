"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsSettingsClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const SmsSettingsNullClientV1_1 = require("../version1/SmsSettingsNullClientV1");
const SmsSettingsMemoryClientV1_1 = require("../version1/SmsSettingsMemoryClientV1");
const SmsSettingsDirectClientV1_1 = require("../version1/SmsSettingsDirectClientV1");
const SmsSettingsHttpClientV1_1 = require("../version1/SmsSettingsHttpClientV1");
class SmsSettingsClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(SmsSettingsClientFactory.NullClientV1Descriptor, SmsSettingsNullClientV1_1.SmsSettingsNullClientV1);
        this.registerAsType(SmsSettingsClientFactory.MemoryClientV1Descriptor, SmsSettingsMemoryClientV1_1.SmsSettingsMemoryClientV1);
        this.registerAsType(SmsSettingsClientFactory.DirectClientV1Descriptor, SmsSettingsDirectClientV1_1.SmsSettingsDirectClientV1);
        this.registerAsType(SmsSettingsClientFactory.HttpClientV1Descriptor, SmsSettingsHttpClientV1_1.SmsSettingsHttpClientV1);
    }
}
exports.SmsSettingsClientFactory = SmsSettingsClientFactory;
SmsSettingsClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-smssettings', 'factory', 'default', 'default', '1.0');
SmsSettingsClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-smssettings', 'client', 'null', 'default', '1.0');
SmsSettingsClientFactory.MemoryClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-smssettings', 'client', 'memory', 'default', '1.0');
SmsSettingsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-smssettings', 'client', 'direct', 'default', '1.0');
SmsSettingsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-smssettings', 'client', 'http', 'default', '1.0');
//# sourceMappingURL=SmsSettingsClientFactory.js.map