
import { GAP_SPACE } from "@/application/constants";
import { ShiftOutput } from "@/core/types";
import { observer } from "mobx-react-lite";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  item: ShiftOutput;
  onPressItem: () => void;
}

export const ShiftListItem = observer<Props>(({ item, onPressItem }) => {
  return (
    <TouchableOpacity
      onPress={() => onPressItem()}
      activeOpacity={0.8}
      style={[styles.itemWrap]}
    >
      <View style={[styles.card]}>
        <Image
          source={{ uri: item.logo }}
          resizeMode="contain"
          style={[styles.logo]}
        />
        <View style={styles.info}>
          <Text numberOfLines={1} style={styles.companyName}>
            {item.companyName}
          </Text>

          <Text numberOfLines={1} style={styles.address}>
            {item.address}
          </Text>

          <View style={styles.dateRow}>
            <Text style={styles.dateText}>{item.dateStartByCity}</Text>
            <Text style={styles.timeText}>{item.timeStartByCity}</Text>
          </View>
        </View>

        <View style={styles.ratingWrap}>
          <Text>Зарплата:</Text>
          <Text style={styles.salary}>{item.priceWorker}</Text>

        </View>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  itemWrap: {
    flex: 0.5,
    padding: 10,
    marginBottom: GAP_SPACE,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'flex-start',
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  logo: {
    // aspectRatio: 1,
    minHeight: 100,
    width: '100%',
    marginBottom: 8,
  },
  info: {
    borderTopColor: '#eee',
    borderTopWidth: 1,
    paddingTop: 8,
    margin: 10
  },
  companyName: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
  },
  address: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: 12,
    fontWeight: '600',
  },
  timeText: {
    fontSize: 12,
    color: '#444',
  },
  ratingWrap: {
    flexDirection: 'row',
    verticalAlign: 'middle',
    columnGap: 8,
    marginTop: 12,
    alignSelf: 'flex-end',
    fontSize: 12,
  },
  salary: {
    color: 'gold',
    paddingRight: 5
  }
})