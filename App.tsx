import { useCallback, useState } from "react";
import { FlatList, ListRenderItemInfo, Pressable, SafeAreaView, Text, View } from "react-native";
import { OcmPressable } from "./src/components/ocmPressable/ocmPressable";
import Geolocation, { GeolocationError, GeolocationResponse } from "@react-native-community/geolocation";
import ocmStringUtils from "./src/utils/ocmStringUtils";
import ocmColors from "./src/styles/ocmColors";
import { ocmNullable } from "./src/models/ocmNullable";
import ocmPOIConnector from "./src/connectors/ocmPOIConnector";
import { IOcmPOIReq } from "./src/models/IOcmPOIReq";
import { IOcmPOIDto } from "./src/models/IOcmPOIDto";
import { OcmPoi } from "./src/components/ocmPoi/ocmPoi";
import { IOcmPOIResDto } from "./src/models/IOcmPOIRes";

function App(): JSX.Element {

  // Local State
  const [userLocation, setUserLocation] = useState<ocmNullable<GeolocationResponse>>();
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pois, setPois] = useState<IOcmPOIDto[]>([]);
  const [hasSearchedOnce, setHasSearchedOnce] = useState<boolean>(false);

  const handleUserPosition = useCallback((position: GeolocationResponse): void => {
    setErrorMsg('');
    setUserLocation(position)
  }, []);

  const handleErrorGettingPosition = useCallback((error: GeolocationError): void => {
    setErrorMsg(`Couldn't get device location: ${error.message}.`);
  }, []);

  // Get device location
  const getGeoLocation = useCallback(async (): Promise<void> => {
    Geolocation.getCurrentPosition(handleUserPosition, handleErrorGettingPosition);
  }, []);

  const getPOIs = useCallback(async (): Promise<void> => {
    if (!hasSearchedOnce) setHasSearchedOnce(true);
    setIsLoading(true);
    const params: IOcmPOIReq = {
      latitude: userLocation!.coords.latitude,
      longitude: userLocation!.coords.longitude,
    }
    const resp: IOcmPOIResDto = await ocmPOIConnector.getPOI(params);
    console.log('pois ', resp.pois[0]);
    setPois(resp.pois);
    setIsLoading(false);

  }, [userLocation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>

      {/* BODY */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', padding: 12, gap: 12, }}>

        {/* LOCATION */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, }}>

          {/* CURRENT LOCATION */}
          {userLocation ?
            <Text style={{ flex: 1 }}>✅ Lat: {userLocation?.coords.latitude} / Long: {userLocation?.coords.longitude}</Text>
            :
            <Text style={{ flex: 1, color: ocmColors.greyText }}>Tap "{ocmStringUtils.getLocation}" then restrict the distance.</Text>
          }

          {/* BTN FOR GETTING LOCATION*/}
          <OcmPressable
            onPress={getGeoLocation}
            isDisabled={false}
            text={ocmStringUtils.getLocation}
          />

        </View>

        {/* GET POIS */}
        {userLocation &&
          <OcmPressable
            onPress={getPOIs}
            isDisabled={false}
            text={ocmStringUtils.getPOIs}
          />
        }

        {isLoading ?
          <Text>Loading...</Text>
          :
          errorMsg ?
            <Text>{errorMsg}</Text>
            :
            pois.length === 0 && hasSearchedOnce && !isLoading ?
              <Text>Hm, there doesn't appear to be POIs near you.</Text>
              :
              <FlatList
                style={{ flex: 1 }}
                data={pois}
                renderItem={(params: ListRenderItemInfo<IOcmPOIDto>) => <OcmPoi {...params.item} />}
                keyExtractor={(item: IOcmPOIDto) => item.id}
              />
        }

      </View>
    </SafeAreaView>
  );
}

export default App;
