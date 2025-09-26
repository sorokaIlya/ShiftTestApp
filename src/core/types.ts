export type LatLng = { latitude: number; longitude: number };

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
    TIMEOUT = 'TIMEOUT'
}

export type Result<Left, Right> =
    | { ok: true; data: Right }
    | { ok: false; error: Left };

