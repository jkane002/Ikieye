import React, { useState } from 'react';
import { Text, Button, View, Image, StyleSheet } from 'react-native';
import { ScreenContainer } from "react-native-screens";

// test Data
import data from "../components/testdata";
import Swiper from "react-native-deck-swiper";

// import { styles } from '../styles/styles';

const Card = ({ card }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: card.image }} style={styles.cardImage} />
    </View>
  )
}

export const GeneratorScreen = () => {
  const [index, setIndex] = useState(0);
  const onSwiped = () => {
    setIndex(index + 1);
  };
  return (
    <ScreenContainer style={styles.screencontainer}>
      <Swiper
        cards={data}
        cardIndex={index}
        renderCard={card => <Card card={card} />}
        onSwiper={onSwiped}
        backgroundColor={'#ebecf1'}
        stackSize={3}
        stackScale={10}
        stackSeparation={40}
        disableBottomSwipe
        animateOverlayLabelsOpacity
        animateCardOpacity
        overlayLabels={{
          left: {
            title: 'NOPE',
            style: {
              label: {
                backgroundColor: "red",
                color: "white",
                fontSize: 24
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                marginTop: 20,
                marginLeft: -20
              }
            }
          },
          right: {
            title: 'LIKE',
            style: {
              label: {
                backgroundColor: "green",
                color: "white",
                fontSize: 24
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginTop: 20,
                marginLeft: 20
              }
            }
          },
          top: {
            title: 'WOW!!',
            style: {
              label: {
                backgroundColor: "gold",
                color: "white",
                fontSize: 24
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }
            }
          }
        }}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  screencontainer: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: 160,
    flex: 1,
    resizeMode: 'contain'
  },
  card: {
    flex: 0.75,
    borderRadius: 10,
    shadowRadius: 25,
    shadowColor: "black",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 0 },
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white"
  },
});
