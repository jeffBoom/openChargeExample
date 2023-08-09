import React from "react";
import { Pressable, Text } from "react-native";
import styles from './ocmPressableStyles';

export interface IOcmPressableProps {
    onPress: () => void | Promise<void>;
    isDisabled: boolean;
    text: string;
}

export function OcmPressable(props: IOcmPressableProps): React.JSX.Element {
    return (
        <Pressable
            onPress={props.isDisabled ? undefined : async () => await props.onPress()}
            style={styles.btnContainer}
        >
            <Text style={styles.btnText}>{props.text}</Text>
        </Pressable>
    )
}