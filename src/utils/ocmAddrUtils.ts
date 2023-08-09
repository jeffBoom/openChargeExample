import { IOcmPOIAddrInfo } from "../models/IOcmPOIAddrInfo";

class OcmAddrUtils {
    public getAddrAsString(addr: IOcmPOIAddrInfo): string {
        return `${addr.addressLine1} ${addr.town}, ${addr.stateOrProvince} ${addr.postcode} (${addr.country.isoCode})`;
    }
}

const ocmAddrUtils: OcmAddrUtils = new OcmAddrUtils();
export default ocmAddrUtils;