import { IOcmPOIAddrInfo } from "./IOcmPOIAddrInfo";
import { IOcmStatusType } from "./IOcmStatusType";
import { IOcmUsageType } from "./IOcmUsageType";
import { ocmNullable } from "./ocmNullable";

export interface IOcmPOIDto {
    id: string,
    addressInfo: IOcmPOIAddrInfo,
    usageType: ocmNullable<IOcmUsageType>,
    statusType: ocmNullable<IOcmStatusType>
}