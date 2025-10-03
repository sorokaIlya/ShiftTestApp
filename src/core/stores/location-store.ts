import { LatLng, LocationEnumError, PermissionEnum } from '@/core/types';
import { LocationService } from '@/core/location-service';
import { makeAutoObservable, observable, runInAction } from 'mobx';

export class LocationStore {
    locationError?: LocationEnumError
    loading = false;
    coordinats?: LatLng = undefined;

    constructor(private service: LocationService) {
        makeAutoObservable(this, {}, {
            autoBind: true
        });
    }

    get isGeoLocationFailed() {
        return !!this.locationError;
    }

    async fetchLocation() {
        
        const data = await (new Promise((res) => {
            setTimeout(() => {
                res({
                    latitude: 45.039268,
                    longitude: 38.987221
                })
            }, 2000)
        }));
        console.log(data);

        runInAction(() => {
            this.coordinats = data as any;
        });
        // this.loading = true;
        // const result = await this.service.getCurrentLocation();
        // if (result.ok) {
        //     runInAction(() => {
        //         this.coordinats = result.data;
        //     });
        // } else {
        //     runInAction(() => {
        //         this.locationError = result.error;
        //     });
        // }
        // runInAction(() => {
        //     this.loading = false;
        // })
    }
}