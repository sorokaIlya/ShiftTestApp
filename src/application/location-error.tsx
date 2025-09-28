import { observer } from "mobx-react-lite";
import { Button, Text, View } from "react-native";
import { LocationEnumError } from "../core/types";

type Props = {
    error: LocationEnumError,
    onRetry: () => void;
}
export const LocationError = observer<Props>(({ error, onRetry }) => {
    if (!error) return null;

    let message = "";
    switch (error) {
        case LocationEnumError.DENIED:
            message = "Доступ к геопозиции запрещён. Разрешите его в настройках.";
            break;
        case LocationEnumError.UNAVAILABLE:
            message = "Геолокация недоступна. Проверьте, включён ли GPS.";
            break;
        case LocationEnumError.TIMEOUT:
        case LocationEnumError.UNKNOWN:
            message = "Произошла неизвестная ошибка геолокации.";
            break;
    }

    return (
        <View style={{ padding: 10, backgroundColor: "#fee2e2", borderRadius: 8 }}>
            <Text style={{ color: "#b91c1c", marginBottom: 20 }}>{message}</Text>
            {error !== LocationEnumError.DENIED && <Button
                title="Попробовать снова"
                onPress={onRetry}
            />}
        </View>
    );

})