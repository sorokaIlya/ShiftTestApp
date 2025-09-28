
import { ShiftLocatoinContainer } from "@/application/shift-locatoin-container";
import { ShiftDetailPage } from "@/screens/shift-detail-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

export type ShiftStackNavigationProps = {
  ShiftList: undefined,
  ShiftDetails: { shiftId: string }
}

const Stack = createNativeStackNavigator<ShiftStackNavigationProps>();

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ShiftStackNavigationProps { }
  }
}

export const ShiftNavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ShiftList">
        <Stack.Screen name='ShiftList' component={ShiftLocatoinContainer} options={{
          title: 'Вакансии'
        }} />
        <Stack.Screen name='ShiftDetails' component={ShiftDetailPage} options={{
          title: 'Детали'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
