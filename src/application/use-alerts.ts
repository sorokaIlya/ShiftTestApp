import { Alert } from "react-native";
import { openSettings } from "react-native-permissions";
import { useEffect } from "react";
import { autorun } from "mobx";
import { PermissionEnum } from "@/core/types";
import { PermussionStore } from "@/core/stores/permission-store";

export const usePermissionAlerts = (permissionStore: PermussionStore) => {

    useEffect(() => {
        const dispose = autorun(() => {
            if (permissionStore.status == PermissionEnum.DENIED) {
                handleDeniedPermissionModal();
            }
            if (permissionStore.status == PermissionEnum.BLOCKED) {
                handleDeniedPermissionModal();
            }
        });
        return dispose;
    }, []);

    const handleDeniedPermissionModal = () => {
        Alert.alert(
            'Permission Required',
            'We need access to your location to provide accurate results and personalized services. Please enable location permissions in your device settings.',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Open Settings',
                    onPress: () => openSettings(),
                },
            ],
        );
    };


}