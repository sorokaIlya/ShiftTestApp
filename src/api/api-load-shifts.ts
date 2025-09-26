import { ShiftOutput } from "@/types/types";

export const apiLoadShifts = ({ lat, lng }: { lat: number, lng: number }) => {
    return fetch(`https://mobile.handswork.pro/api/shifts/map-list-unauthorized?latitude=${lat}&longitude=${lng}`)
        .then(res => res.json() as unknown as ShiftOutput[]);
}