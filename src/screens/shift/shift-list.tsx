import { observer } from "mobx-react-lite";
import { Text, View } from "react-native";
import { FlatList } from "react-native";



export const ShiftList = observer(() => {

    return (
        <View>
            <FlatList
                renderItem={(item) => {
                    return <Text>heello</Text>
                }}
                data={[]}
            />

        </View>
    )
});