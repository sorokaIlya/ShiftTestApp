import { observer } from "mobx-react-lite"; import { ActivityIndicator, Text, View } from "react-native";
import { FlatList } from "react-native";
import { ShiftListItem } from "./shift-list-item";
import { useStore } from "../../core/context/context-provider";
import { useNavigation } from "@react-navigation/native";

export const ShiftList = observer(() => {
    const { shiftStore } = useStore();
    const navigation = useNavigation();

    if (shiftStore.isListLoading) {
        return (
            <>
                <ActivityIndicator size={'large'} />
                <Text style={{
                    textAlign: 'center',
                    marginVertical: 10
                }}>
                    Определяем вакансии...
                </Text>
            </>
        );
    }

    if (!shiftStore.shiftData.length) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Нет данных</Text>
            </View>
        );
    }

    return (
        <View>
            <FlatList
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ShiftListItem onItemNavigate={() => {
                    navigation.navigate('ShiftDetails', {
                        shiftId: item.id
                    });
                }} item={item} />}
                data={shiftStore.shiftData}
                contentContainerStyle={{ paddingBottom: 15 }}
            />
        </View>
    )
});