import { Result, LatLng, LocationEnumError, } from '@/core/types';
import Geolocation from "react-native-geolocation-service";

export class LocationService {
    async getCurrentLocation(): Promise<Result<LocationEnumError, LatLng>> {
        return new Promise((resolve) => {
            Geolocation.getCurrentPosition(
                ({ coords }) => {
                    resolve({
                        ok: true, data: {
                            latitude: coords.latitude,
                            longitude: coords.longitude
                        }
                    });
                },
                (error) => {
                    let errorType: LocationEnumError = LocationEnumError.UNKNOWN;
                    switch (error.code) {
                        case 1:
                            errorType = LocationEnumError.DENIED;
                            break;
                        case 2:
                            errorType = LocationEnumError.UNAVAILABLE;
                            break;
                        case 3:
                            errorType = LocationEnumError.TIMEOUT;
                            break;
                    }
                    resolve({
                        ok: false,
                        error: errorType
                    });
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        });
    }
}