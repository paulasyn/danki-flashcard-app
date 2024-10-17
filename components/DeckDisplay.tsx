import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View, Image } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import DeckComponent from '@/components/DeckComponent';
import FloatingActionButton from '@/components/FloatingActionButton';

export default function DeckDisplay() {
    return (
    <View style={styles.mainContainer}>
        <ParallaxScrollView
          headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
          headerImage={<Ionicons size={310} name="book" style={styles.headerImage} />}>
            
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Edit</ThemedText>
            <Image
              source={require('@/assets/images/mudbray.png')}
              style={styles.mudbray}
            />
          </ThemedView>
          <DeckComponent deckData="First Deck Component"></DeckComponent>
          <DeckComponent deckData="Second Deck Component"></DeckComponent>
          <DeckComponent deckData="Third Deck Component"></DeckComponent>
          <DeckComponent deckData="Fourth Deck Component"></DeckComponent>
        </ParallaxScrollView>
        <FloatingActionButton /> 
    </View> 
    );
  }


  const styles = StyleSheet.create({
    mainContainer: {
      justifyContent: 'center',
      flex:1,
      },
    headerImage: {
      color: '#808080',
      bottom: -50,
      left: -35,
      position: 'absolute',
    },
    titleContainer: {
      flexDirection: 'row',
      gap: 5,
    },
    mudbray: {
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      height: 80,
      width: 80,
      right: 0,
      top: -30,
      bottom: -100,
      zIndex: 200,
    },
  });
  