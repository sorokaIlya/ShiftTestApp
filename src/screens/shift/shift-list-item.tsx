
import { ShiftOutput } from "@/core/types";
import { observer } from "mobx-react-lite";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  item: ShiftOutput;
  onItemNavigate: () => void;
}

export const ShiftListItem = observer<Props>(({ item, onItemNavigate }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.header}>{item.companyName}</Text>

    </View>
  );
})

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    fontSize: 24,
    marginRight: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    fontSize: 13,
    color: '#555',
    marginBottom: 6,
  },
  rate: {
    flexDirection: 'row',
  },
});