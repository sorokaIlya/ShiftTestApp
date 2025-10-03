
import { observer } from "mobx-react-lite";
import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ShiftStackNavigationProps } from "@/router/shift-router";
import { useStore } from "@/core/context/context-provider";
import { MaterialIcons } from "@react-native-vector-icons/material-icons";


type DetailScreenRouteProp = RouteProp<ShiftStackNavigationProps, 'ShiftDetails'>;


export const ShiftDetailPage = observer(() => {
    const { shiftStore } = useStore();
    const { params } = useRoute<DetailScreenRouteProp>();
    const detailed = shiftStore.getShiftById(params.shiftId);

    if (!detailed) {
        Alert.alert(`Вакансии не найдено ${params.shiftId}`)
        return null;
    }


    return (
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                {/* Логотип и название */}
                <View style={styles.header}>
                    <Image source={{ uri: detailed.logo }} style={styles.logo} />
                    <Text style={styles.companyName}>{detailed.companyName}</Text>
                </View>

                {/* Адрес */}
                <View style={styles.row}>
                    <MaterialIcons name="location-on" size={20} color="#555" />
                    <Text style={styles.text}>{detailed.address}</Text>
                </View>

                {/* Дата и время */}
                <View style={styles.row}>
                    <MaterialIcons name="access-time" size={20} color="#555" />
                    <Text style={styles.text}>
                        {detailed.dateStartByCity} | {detailed.timeStartByCity} - {detailed.timeEndByCity}
                    </Text>
                </View>

                {/* Рабочие */}
                <View style={styles.row}>
                    <MaterialIcons name="people-outline" size={20} color="#555" />
                    <Text style={styles.text}>
                        Работают: {detailed.currentWorkers}/{detailed.planWorkers}
                    </Text>
                </View>

                {/* Цена */}
                <View style={styles.row}>
                    <MaterialIcons name="payments" size={20} color="#555" />
                    <Text style={styles.text}>Цена за работника: {detailed.priceWorker} ₽</Text>
                </View>

                <View style={styles.row}>
                    <MaterialIcons name="access-time-filled" size={22} color="#d8631aff" />
                    <Text style={styles.text}>
                        Bремя:
                    </Text>
                    <Text style={styles.text}>{detailed.timeStartByCity} - {detailed.timeEndByCity}</Text>
                </View>

                {/* Рейтинг и отзывы */}
                <View style={styles.row}>
                    <MaterialIcons name="star" size={20} color="gold" />
                    <Text style={styles.text}>{detailed.customerRating}</Text>
                    <Text style={styles.text}>
                        ({detailed.customerFeedbacksCount})
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 16,
        margin: 16,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },
    logo: {
        width: 60,
        height: 60,
        borderRadius: 12,
        marginRight: 12,
    },
    companyName: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 6,
    },
    text: {
        marginLeft: 8,
        fontSize: 16,
        color: "#444",
    },
});