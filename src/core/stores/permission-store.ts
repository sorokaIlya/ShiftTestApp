import { PermissionEnum } from "@/core/types";
import { makeAutoObservable, runInAction } from "mobx";
import { PermissionsAndroid, Platform } from "react-native";
import { check, PERMISSIONS, PermissionStatus, request, RESULTS } from "react-native-permissions";


const mapStatusPermission = (result: PermissionStatus) => {
    switch (result) {
        case RESULTS.UNAVAILABLE:
            console.log('This feature is not available on this device or OS.');
            return PermissionEnum.UNAVAILABLE
        case RESULTS.DENIED:
            console.log('Permission has not been requested / is denied.');
            return PermissionEnum.DENIED
        case RESULTS.GRANTED:
            console.log('Permission is granted.');
            return PermissionEnum.GRANTED
        case RESULTS.BLOCKED:
            console.log('Permission is denied and cannot be requested (blocked).');
            return PermissionEnum.BLOCKED
        default:
            return PermissionEnum.UNKNOWN
    }
}

export class PermussionStore {
    isLoading = false;
    status: PermissionEnum = PermissionEnum.UNKNOWN;

    constructor() {
        makeAutoObservable(this, {
            checkLocationPermission: false
        })
    }

    get hasPermission() {
        return this.status == PermissionEnum.GRANTED;
    }

    askLocation = async () => {
        if (Platform.OS === 'ios') {
            const status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
            this.status === mapStatusPermission(status);
        } else if (Platform.OS === 'android') {
            const status = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );
            if (status == 'denied') {
                this.status = PermissionEnum.DENIED;
            }
            if (status == 'granted') {
                this.status = PermissionEnum.GRANTED;
            }
            if (status == 'never_ask_again') {
                this.status = PermissionEnum.BLOCKED;
            }
        }
    }

    checkLocationPermission = async () => {
        this.isLoading = true;
        const permission =
            Platform.OS === 'ios'
                ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
                : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
        try {
            const result = await check(permission);
            const lastStatus = mapStatusPermission(result);
            runInAction(() => {
                this.status = lastStatus;
            });
        } finally {
            runInAction(() => {
                this.isLoading = false;
            })
        }
    };

}