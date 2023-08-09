import { IOcmPOIAddrInfo } from "./IOcmPOIAddrInfo";
import { IOcmPOIDto } from "./IOcmPOIDto";
import { ocmNullable } from "./ocmNullable";

export interface IOcmPOIResDto {
    stations: IOcmPOIDto[];
    error: string;
}