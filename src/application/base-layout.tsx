
import React, { ReactNode } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = { children: ReactNode };

export const BaseLayout = ({ children }: Props) => (
    <SafeAreaView style={styles.safe}>
        <View style={styles.container}>{children}</View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: "#dfdfdfff"
    },
    container: {
        flex: 1,
        paddingHorizontal: 8,
        paddingTop: 8
    },
});
