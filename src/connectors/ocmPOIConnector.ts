import { IOcmPOIDto } from "../models/IOcmPOIDto";
import { IOcmPOIReq } from "../models/IOcmPOIReq";
import { IOcmPOIResDto } from "../models/IOcmPOIRes";

class OcmPOIConnector {

    private key: string = 'cfa93c10-ad4c-4128-9ab4-a66191f70d12';
    private baseUrl: string = `https://api.openchargemap.io/v3/poi?key=${this.key}&camelCase=true`;

    public async getPOI(req: IOcmPOIReq): Promise<IOcmPOIResDto> {
        try {
            // Fetch POIs
            const resp: Response = await fetch(`${this.baseUrl}&latitude=${req.latitude}&longitude=${req.longitude}`);

            // Failure status code
            if (resp.status !== 200) return { stations: [], error: 'Error fetching POIs.' };

            // Formulate DTO for resp
            const respBody: IOcmPOIDto[] = await resp.json();
            const poiDto: IOcmPOIResDto = { stations: [], error: '' };
            if (respBody.length > 0) {
                for (const poi of respBody) {
                    poiDto.stations.push({
                        id: poi.id,
                        addressInfo: poi.addressInfo,
                        usageType: poi.usageType,
                        statusType: poi.statusType,
                    });
                }
            }
            return poiDto;
        } catch (error) {
            return {
                stations: [],
                error: `Error fetching POIs : ${error}.`
            }
        }
    }
}
const ocmPOIConnector: OcmPOIConnector = new OcmPOIConnector();
export default ocmPOIConnector;