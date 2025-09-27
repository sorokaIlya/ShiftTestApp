import { apiLoadShifts } from "@/api/api-load-shifts";
import { LatLng } from "@/core/types";
import { ShiftOutput } from "@/types/types";
import { action, makeAutoObservable, runInAction } from "mobx";


export class ShiftsStore {
    shiftData: ShiftOutput[] = [];
    isListLoading: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    public loadJobs = (location: LatLng) => {
        this.isListLoading = true;
        apiLoadShifts({ lat: location.latitude, lng: location.longitude }).then(action((res) => {
            this.shiftData = res;
        })).finally(action(() => {
            this.isListLoading = false;
        }));

    }

}