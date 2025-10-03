import { useStore } from "@/core/context/context-provider";
import React, { useEffect } from "react";

export const LocationInitializer = () => {
    const { locationStore } = useStore();

    useEffect(() => {
        locationStore.fetchLocation();
    }, [locationStore]);

    return null;
};