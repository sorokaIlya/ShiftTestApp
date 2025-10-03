import { observer } from "mobx-react-lite";
import { ActivityIndicator, Text, View } from "react-native";
import { FlatList } from "react-native";
import { ShiftListItem } from "./shift-list-item";
import { useStore } from "../../core/context/context-provider";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { GAP_SPACE } from "@/application/constants";


export const ShiftList = observer(() => {
    const { shiftStore } = useStore();
    const navigation = useNavigation();

    if (shiftStore.isListLoading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size={'large'} />
            </View>
        );
    }

    if (!shiftStore.shiftData.length) {
        return (
            <View style={styles.center}>
                <Text>Поблизости нет подходящих вакансий</Text>
            </View>
        );
    }

    return (
        <View>
            <FlatList
                data={shiftStore.shiftData}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                    <ShiftListItem
                        onPressItem={() => {
                            navigation.navigate('ShiftDetails', {
                                shiftId: item.id
                            });
                        }}
                        item={item} />
                )}
            />
        </View>
    )
});

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: GAP_SPACE,
        paddingVertical: GAP_SPACE,
    },
})