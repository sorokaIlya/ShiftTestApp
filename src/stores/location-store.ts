import { LatLng, LocationEnumError, PermissionEnum } from '@/core/types';
import { checkLocationPermission } from '@/core/utils';
import { LocationService } from '@/services/location-service';
import { makeAutoObservable, runInAction } from 'mobx';

export class LocationStore {
    persmisonStatus?: PermissionEnum;
    locationError?: LocationEnumError
    loading = false;
    coordinats?: LatLng;

    constructor(private service: LocationService) {
        makeAutoObservable(this);
    }

    get hasPermission() {
        return this.persmisonStatus === PermissionEnum.GRANTED;
    }

    get isGeoLocationFailed() {
        return !!this.locationError;
    }

    async fetchLocation() {
        this.loading = true;
        this.persmisonStatus = await checkLocationPermission();
        if (!this.hasPermission) {
            return;
        }
        const result = await this.service.getCurrentLocation();
        if (result.ok) {
            runInAction(() => {
                this.coordinats = result.data;
            });
        } else {
            runInAction(() => {
                this.locationError = result.error;
            });
        }
        runInAction(() => {
            this.loading = false;
        })
    }
}