import { IOcmPOIReq } from "../models/IOcmPOIReq";
import { IOcmPOIResDto } from "../models/IOcmPOIRes";

class OcmPOIConnector {

    private key: string = 'cfa93c10-ad4c-4128-9ab4-a66191f70d12';
    private baseUrl: string = `https://api.openchargemap.io/v3/poi?key=${this.key}`;

    public async getPOI(req: IOcmPOIReq): Promise<IOcmPOIResDto> {
        try {
            const resp: Response = await fetch(`${this.baseUrl}&latitude=${req.latitude}&${req.longitude}`);
            if (resp.status !== 200) return { stations: [], error: 'Error fetching POIs.' };

            console.log('resp', resp);
            return {
                stations: [],
                error: '',
            }
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