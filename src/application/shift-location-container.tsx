import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "@/core/context/context-provider";
import { autorun, reaction, toJS } from "mobx";
import { LocationError } from "./location-error";
import { ShiftList } from "@/screens/shift/shift-list";

// Mediator component
export const ShiftLocationContainer = observer(() => {
    const { locationStore, shiftStore } = useStore();

    useEffect(() => {
        return autorun(() => {
            if (locationStore.coordinats) {
                shiftStore.loadJobs(locationStore.coordinats);
            }
        });
    }, []);

    if (locationStore.isGeoLocationFailed) {
        return <LocationError onRetry={locationStore.fetchLocation} error={locationStore.locationError!} />
    }

    return <ShiftList />
});
