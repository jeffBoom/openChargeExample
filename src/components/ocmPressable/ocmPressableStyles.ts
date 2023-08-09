import { StyleSheet } from "react-native";
import ocmColors from "../../styles/ocmColors";

export default StyleSheet.create({
    btnContainer: {
        padding: 12,
        borderRadius: 12,
        backgroundColor: ocmColors.fg,
        alignItems: 'center',
    },
    btnText: {
        color: ocmColors.bg,
    }
})