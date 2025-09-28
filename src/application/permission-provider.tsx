import { observer } from "mobx-react-lite"
import { ReactNode, useEffect } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native"
import { View } from "react-native";
import { useStore } from "../core/context/context-provider";
import { ActivityIndicator } from "react-native";
import { usePermissionAlerts } from "./use-alerts";

type Props = {
    children: ReactNode
}
export const AccessProvider = observer<Props>(({ children }) => {
    const { permissionStore } = useStore();

    usePermissionAlerts(permissionStore);

    useEffect(() => {
        permissionStore.checkLocationPermission();
    }, []);

    if (permissionStore.isLoading) {
        return <View style={styles.container}>
            <ActivityIndicator />
        </View>
    }

    if (permissionStore.hasPermission) {
        return <>{children}</>
    }

    return (<View style={styles.container}>
        <TouchableOpacity
            onPress={permissionStore.askLocation}
            style={styles.buttonContainer}>
            <Text style={{ color: '#000' }}>Запросить местоположение</Text>
        </TouchableOpacity>
    </View>)
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    buttonContainer: {
        width: '50%',
        borderColor: '#888',
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 50,
        paddingVertical: 10,
    },
});