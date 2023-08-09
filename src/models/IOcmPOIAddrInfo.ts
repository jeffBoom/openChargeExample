import { ocmNullable } from "./ocmNullable";

export interface IOcmPOIAddrInfo {
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
    }
}