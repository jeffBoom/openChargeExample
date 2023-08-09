import { ocmNullable } from "./ocmNullable";

export interface IOcmUsageType {
    isPayAtLocation: ocmNullable<boolean>,
    isMembershipRequired: ocmNullable<boolean>,
    title: 'string',
}