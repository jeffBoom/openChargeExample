import { IOcmPOIAddrInfo } from "./IOcmPOIAddrInfo";
import { IOcmPOIDto } from "./IOcmPOIDto";
import { ocmNullable } from "./ocmNullable";

export interface IOcmPOIResDto {
    pois: IOcmPOIDto[];
    error: string;
}