
import React, { ReactNode } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = { children: ReactNode };

export const BaseLayout = ({ children }: Props) => (
    <SafeAreaView style={styles.safe}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>{children}</View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: "#f8f8f8" },
    container: { flex: 1, paddingHorizontal: 16, paddingTop: 8 },
});
