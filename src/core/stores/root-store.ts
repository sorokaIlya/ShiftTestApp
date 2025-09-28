import { LocationService } from "@/core/location-service";
import { LocationStore } from "@/core/stores/location-store";
import { ShiftsStore } from "@/core/stores/shift-store";
import { PermussionStore } from "./permission-store";

// as DI container 
export class RootStore {
    permissionStore = new PermussionStore()
    locationServive = new LocationService();
    locationStore = new LocationStore(this.locationServive);
    shiftStore = new ShiftsStore(this.locationStore);
}