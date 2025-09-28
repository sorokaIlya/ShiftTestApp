
export type LatLng = { latitude: number; longitude: number };

export type ShiftOutput = {
    id: string;
    logo: string;
    address: string;
    companyName: string;
    dateStartByCity: string;
    timeStartByCity: string;
    timeEndByCity: string;
    currentWorkers: number;
    planWorkers: number;
    workTypes: any;
    priceWorker: number;
    customerFeedbacksCount: number;
    customerRating: number;
}

export enum PermissionEnum {
    GRANTED = 'GRANTED',
    DENIED = 'DENIED',
    UNAVAILABLE = 'UNAVAILABLE',
    BLOCKED = 'BLOCKED',
    UNKNOWN = 'UNKNOWN',
}

export enum LocationEnumError {
    DENIED = 'DENIED',
    UNAVAILABLE = 'UNAVAILABLE',
    TIMEOUT = 'TIMEOUT',
    UNKNOWN = 'UNKNOWN',
}

export type Result<Left, Right> =
    | { ok: true; data: Right }
    | { ok: false; error: Left };

