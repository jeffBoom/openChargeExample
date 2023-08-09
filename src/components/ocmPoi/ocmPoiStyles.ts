import { StyleSheet } from "react-native";
import ocmColors from "../../styles/ocmColors";

export default StyleSheet.create({
    poiContainer: {
        padding: 12,
        borderRadius: 8,
        backgroundColor: ocmColors.grey,
        marginBottom: 8,
        flex: 1,
        width: '100%',
        gap: 12,
    },
    poiHeader: {
        flex: 1,
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
    },
    poiDetailsContainer: {
        gap: 12,
        flex: 1,
    },
    poiDetailText: {
        fontSize: 12,
        color: ocmColors.greyText,
    }
})