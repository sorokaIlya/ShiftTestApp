import { ActivityIndicator, ActivityIndicatorProps, Text } from "react-native"



type Props = {
    size: ActivityIndicatorProps['size'],

}
export const ShiftLoader = () => {
    return (
        <>
            <ActivityIndicator size={'large'} />
            <Text style={{
                textAlign: 'center',
                marginVertical: 10
            }}>
                Searching...
            </Text>
        </>
    )
}