
import { observer } from "mobx-react-lite";
import { StyleSheet, Text, View } from "react-native";
import { ShiftOutput } from "../core/types";

export const ShiftDetailPage = observer(() => {
    return (

        <View>
            {/* <Text>{item.companyName}</Text> */}
        </View>
    );
})

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 5,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 3, // Android тень
        shadowColor: '#000', // iOS тень
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    header: {
        flexDirection: 'row',  // иконка + название в одну линию
        alignItems: 'center',  // выравнивание по центру
        marginBottom: 8,
    },
    icon: {
        fontSize: 24,
        marginRight: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    description: {
        fontSize: 13,
        color: '#555',
        marginBottom: 6,
    },
    rate: {
        flexDirection: 'row',
    },
});