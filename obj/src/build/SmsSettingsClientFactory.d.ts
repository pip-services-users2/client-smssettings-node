import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';
export declare class SmsSettingsClientFactory extends Factory {
    static Descriptor: Descriptor;
    static NullClientV1Descriptor: Descriptor;
    static MockClientV1Descriptor: Descriptor;
    static DirectClientV1Descriptor: Descriptor;
    static CommandableHttpClientV1Descriptor: Descriptor;
    static CommandableLambdaClientV1Descriptor: Descriptor;
    constructor();
}
