import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "../core/context/context-provider";
import { reaction } from "mobx";
import { LocationError } from "./location-error";
import { ShiftList } from "../screens/shift/shift-list";


// Mediator component
export const ShiftLocatoinContainer = observer(() => {
    const { locationStore, shiftStore } = useStore();

    useEffect(() => {
        locationStore.fetchLocation();
    })

    useEffect(() => {
        const dispose = reaction(() => locationStore.coordinats, (data) => {
            if (data) shiftStore.loadJobs(data);
        })
        return () => dispose();
    }, []);

    if (!locationStore.isGeoLocationFailed) {
        return <LocationError onRetry={locationStore.fetchLocation} error={locationStore.locationError!} />
    }

    return <ShiftList />
});
