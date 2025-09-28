import { apiLoadShifts } from "@/api/api-load-shifts";
import { LatLng, ShiftOutput } from "@/core/types";
import { makeAutoObservable, runInAction } from "mobx";
import { LocationStore } from "./location-store";

export class ShiftsStore {
    shiftData: ShiftOutput[] = [];
    loading: boolean = false;

    constructor(private locationStore: LocationStore) {
        makeAutoObservable(this);
    }

    get isListLoading() {
        return this.locationStore.loading || this.loading;
    }

    public loadJobs = async (location: LatLng) => {
        this.loading = true;
        try {

            const res = await apiLoadShifts({
                lat: location.latitude,
                lng: location.longitude,
            });
            runInAction(() => {
                this.shiftData = res;
            });
        } catch (e) {

        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    }

}