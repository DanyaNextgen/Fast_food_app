import {Redirect, Slot} from "expo-router";

export function _Layout() {
    const isAuthenticated = false;
    if (!isAuthenticated) return <Redirect href="/sign-in" />
    return <Slot/>
}