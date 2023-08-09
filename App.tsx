import { useCallback, useState } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { OcmPressable } from "./src/components/ocmPressable/ocmPressable";
import Geolocation, { GeolocationResponse } from "@react-native-community/geolocation";
import ocmStringUtils from "./src/utils/ocmStringUtils";
import ocmColors from "./src/styles/ocmColors";
import { ocmNullable } from "./src/models/ocmNullable";

function App(): JSX.Element {

  const [userLocation, setUserLocation] = useState<ocmNullable<GeolocationResponse>>();

  const getGeoLocation = useCallback(async (): Promise<void> => {
    Geolocation.getCurrentPosition((position: GeolocationResponse) => {
      console.log('user position', position);
      setUserLocation(position);
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>

      {/* BODY */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', padding: 12 }}>

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

        {/* RESULTS */}

      </View>
    </SafeAreaView>
  );
}

export default App;
