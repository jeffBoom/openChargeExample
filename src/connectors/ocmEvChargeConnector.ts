import { IOcmEvChargeReq } from "../models/IOcmEvChargeReq";
import { IOcmPOIDto } from "../models/IOcmPOIDto";

class OcmEvChargeConnector {
    private baseUrl: string = 'https://example.ev.energy/chargingsession';

    public async startSession(poi: IOcmPOIDto): Promise<boolean> {
        try {
            // Construct the body from the poi param
            const body: IOcmEvChargeReq = {
                user: 1,
                car_id: 1,
                charger_id: poi.id,
            }

            // Send the request
            const resp: Response = await fetch(this.baseUrl, {
                method: 'POST',
                body: JSON.stringify(body),
            });

            // Just using a simple boolean response for testing
            // Normally I would have an HttpResp class with status code, and getters like "isError".
            if (resp.status !== 200) return false;
            return true;

        } catch (error) {
            return false;
        }
    }
}
const ocmEvChargeConnector: OcmEvChargeConnector = new OcmEvChargeConnector();
export default ocmEvChargeConnector;