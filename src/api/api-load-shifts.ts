import { ShiftOutput } from "../core/types";


export const apiLoadShifts = ({ lat, lng }: { lat: number, lng: number }) => {
    return fetch(`https://mobile.handswork.pro/api/shifts/map-list-unauthorized?latitude=${lat}&longitude=${lng}`)
        .then(async res => {
            const { data } = await res.json() as { data: ShiftOutput[] }
            return data;
        });
}