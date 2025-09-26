import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { Platform } from 'react-native';
import { PermissionEnum } from './types';

export const checkLocationPermission = async () => {
    const permission =
        Platform.OS === 'ios'
            ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
            : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
    const result = await check(permission);

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
};