import { StyleSheet, View, Image } from 'react-native';
import DeckDisplay from '@/components/DeckDisplay';

export default function EditScreen() {
  return (
    <View style={styles.mainContainer}>
      <DeckDisplay />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    flex:1,
    },
});
