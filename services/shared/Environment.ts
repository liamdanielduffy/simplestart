import window from "global/window";

export function environmentVariables() {
    return {};
}

export function isOnServer() {
    return typeof window === undefined
}