import { LatLng, LocationEnumError, PermissionEnum } from '@/core/types';
import { LocationService } from '@/core/location-service';
import { makeAutoObservable, observable, runInAction } from 'mobx';

export class LocationStore {
    locationError?: LocationEnumError
    loading = false;
    coordinats?: LatLng;

    constructor(private service: LocationService) {
        makeAutoObservable(this, {
            coordinats: observable.struct
        });
    }

    get isGeoLocationFailed() {
        return !!this.locationError;
    }

    async fetchLocation() {
        this.loading = true;
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