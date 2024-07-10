import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Card({cardData}: {cardData: string}) {
    function handleClick({cardData}: {cardData: string}) {
        console.log(cardData + ' was clicked.');
    }

    return(
        <View style={styles.container}>
            <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }, styles.card]} onPress={() => handleClick({cardData})}>
                <View style={styles.card}>
                    <Text style={styles.text}>
                        {cardData}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    text: {
        fontSize: 28,
        lineHeight: 32,
        marginTop: -6,
    },

    card: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 16,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 14,
        width: 350,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },    
});