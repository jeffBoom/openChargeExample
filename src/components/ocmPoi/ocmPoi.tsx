import React from "react";
import { IOcmPOIDto } from "../../models/IOcmPOIDto";
import { Pressable, Text } from "react-native";
import styles from './ocmPoiStyles';
import ocmAddrUtils from "../../utils/ocmAddrUtils";

export function OcmPoi(props: IOcmPOIDto): React.JSX.Element {
    return (
        <Pressable style={styles.poiContainer}>
            <Text>{ocmAddrUtils.getAddrAsString(props.addressInfo)}</Text>
        </Pressable>
    )
}