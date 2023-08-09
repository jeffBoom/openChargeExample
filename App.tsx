import { useCallback, useState } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { OcmPressable } from "./src/components/ocmPressable/ocmPressable";
import Geolocation, { GeolocationResponse } from "@react-native-community/geolocation";

function App(): JSX.Element {

  const [userLocation, setUserLocation] = useState<GeolocationResponse | null>();

  const getGeoLocation = useCallback(async (): Promise<void> => {
    Geolocation.getCurrentPosition((position: GeolocationResponse) => {
      console.log('user position', position);
      setUserLocation(position)
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>

        {/* LOCATION */}

        {/* BTN FOR RETRIEVING LOCATION */}
        <OcmPressable
          onPress={getGeoLocation}
          isDisabled={false}
          text="Get Location"
        />

      </View>
    </SafeAreaView>
  );
}

export default App;
