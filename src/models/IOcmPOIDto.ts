import { IOcmPOIAddrInfo } from "./IOcmPOIAddrInfo";
import { ocmNullable } from "./ocmNullable";

export interface IOcmPOIDto {
    id: string,
    addressInfo: IOcmPOIAddrInfo,
    usageType: {
        isPayAtLocation: ocmNullable<boolean>,
        isMembershipRequired: ocmNullable<boolean>,
        title: 'string',
    },
    statusType: {
        id: number,
        isOperational: ocmNullable<boolean>,
        isUserSelectable: ocmNullable<boolean>,
        title: string,
    }
}