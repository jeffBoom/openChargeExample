import { ocmNullable } from "./ocmNullable";

export interface IOcmPOIResDto {
    id: string,
    addressInfo: {
        id: number,
        title: string,
        addressLine1: string,
        addressLine2: ocmNullable<string>,
        town: string,
        stateOrProvince: string,
        postcode: number,
        countryID: 2,
        country: {
            isoCode: string,
            continentCode: string,
            id: number,
            title: string,
        },
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
}