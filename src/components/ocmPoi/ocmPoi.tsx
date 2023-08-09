import React, { useMemo, useState } from "react";
import { IOcmPOIDto } from "../../models/IOcmPOIDto";
import { Pressable, Text, View } from "react-native";
import styles from './ocmPoiStyles';
import ocmAddrUtils from "../../utils/ocmAddrUtils";
import { OcmPressable } from "../ocmPressable/ocmPressable";
import ocmStringUtils from "../../utils/ocmStringUtils";

export interface IOcmPoiProps {
    poi: IOcmPOIDto;
    isChargingHere: boolean;
    onSelectForCharge: () => void;
}

export function OcmPoi(props: IOcmPoiProps): React.JSX.Element {

    const [isDetails, setIsDetails] = useState<boolean>(false);
    const statusText: string = useMemo(() => {
        if (!props.poi.statusType) return '❓ Unknown';
        if (props.poi.statusType.isOperational) return '🔋 Operational';
        return '🪫 Not Available';
    }, [props.poi.statusType]);

    const membershipText: string = useMemo(() => {
        if (!props.poi.usageType) return '❓ Unknown';
        if (props.poi.usageType.isMembershipRequired) return '🎟️ Private';
        return '🚦 Public'
    }, [props.poi.usageType]);

    return (
        <Pressable
            onPress={() => setIsDetails(!isDetails)}
            style={styles.poiContainer}
        >
            {/* FIRST ROW */}
            <View style={styles.poiHeader}>
                <Text style={{ flex: 1 }} numberOfLines={1}>{ocmAddrUtils.getAddrAsString(props.poi.addressInfo)}</Text>
                <Text>{props.poi.statusType ? props.poi.statusType.isOperational ? '🔋' : '🪫' : '❓'}</Text>
            </View>

            {/* DETAILS */}
            {isDetails &&
                <View style={styles.poiDetailsContainer}>
                    {/* Labels */}
                    <Text style={styles.poiDetailText}>Public/Private:</Text>
                    <Text style={styles.poiDetailText}>{membershipText}</Text>

                    {/* VALUES */}
                    <Text style={styles.poiDetailText}>Status:</Text>
                    <Text style={styles.poiDetailText}>{statusText}</Text>

                    {/* CHARGE */}
                    <OcmPressable
                        onPress={props.onSelectForCharge}
                        isDisabled={false}
                        text={props.isChargingHere ? ocmStringUtils.currentlyCharging : ocmStringUtils.selectForCharging}
                    />

                </View>
            }
        </Pressable>
    )
}