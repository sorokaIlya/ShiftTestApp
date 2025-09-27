import { observer } from "mobx-react-lite";
import { ReactNode, useEffect } from "react";
import { useStore } from "./context-provider";
import { reaction } from "mobx";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native";


export const LocationMediator = observer(() => {
    const { locationStore, shiftStore } = useStore();

    useEffect(() => {
        const dispose = reaction(() => locationStore.coordinats, (data) => {
            if (data) shiftStore.loadJobs(data);
        })
        return () => dispose();
    }, []);

    if (!locationStore.hasPermission) {
        return (<View>
            <Text></Text>
        </View>);
    }

    return <></>
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f4f8',
    },
    card: {
        width: '90%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 4,
    },
    title: {
        fontSize: 22,
        marginBottom: 12,
        fontWeight: '600',
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#e3e6ea',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#2563eb',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
    },
    secondary: {
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    secondaryText: {
        color: '#2563eb',
    },
    coordsBox: {
        marginTop: 14,
        padding: 10,
        borderWidth: 1,
        borderColor: '#eef2ff',
        borderRadius: 8,
    },
});