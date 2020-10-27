import React, { useState } from 'react';
import { Text, Button, View, Image, StyleSheet } from 'react-native';
import { ScreenContainer } from "react-native-screens";
import { Transitioning, Transition } from 'react-native-reanimated';

// test Data
import data from "../components/testdata";
import Swiper from "react-native-deck-swiper";

// Icons
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
const iconSize = 72; // Bottom tab icon size

// const ANIMATION_DURATION = 100;

// const transition = (
//   <Transition.Sequence>
//     <Transition.Out
//       type='slide-bottom'
//       durationMs={ANIMATION_DURATION}
//       interpolation='easeIn'
//     />
//     <Transition.Together>
//       <Transition.In
//         type='fade'
//         durationMs={ANIMATION_DURATION}
//         delayMs={ANIMATION_DURATION / 2}
//       />
//       <Transition.In
//         type='slide-bottom'
//         durationMs={ANIMATION_DURATION}
//         delayMs={ANIMATION_DURATION / 2}
//         interpolation='easeOut'
//       />
//     </Transition.Together>
//   </Transition.Sequence>
// );

const swiperRef = React.createRef();
// const transitionRef = React.createRef();

const Card = ({ card }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: card.image }} style={styles.cardImage} />
      <View style={styles.cardDetails}>
        <Text style={[styles.text, styles.title]}>{card.name}</Text>
        <Text style={[styles.text, styles.price]}>{card.price}</Text>
      </View>
    </View>
  )
}

export const GeneratorScreen = () => {
  const [index, setIndex] = useState(0);
  const onSwiped = () => {
    // transitionRef.current.animateNextTransition();
    setIndex((index + 1) % data.length);
  };
  return (
    <ScreenContainer style={styles.screencontainer}>
      <View style={styles.swiperContainer}>
        <Swiper
          ref={swiperRef}
          cards={data}
          cardIndex={index}
          renderCard={card => <Card card={card} />}
          onSwiped={onSwiped}
          backgroundColor={'transparent'}
          stackSize={3}
          stackScale={11}
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
      </View>
      {/* <View style={styles.bottomContainer}>
        <Transitioning.View
          ref={transitionRef}
          transition={transition}
          style={styles.bottomContainerMeta}
        >
          <CardDetails index={index} />
        </Transitioning.View>
      </View> */}
      <View style={styles.bottomContainerButtons}>
        <Icon.Button
          name='close'
          color="red"
          backgroundColor="transparent"
          underlayColor="transparent"
          size={iconSize}
          onPress={() => swiperRef.current.swipeLeft()}
        />
        <Icon.Button
          backgroundColor="transparent"
          underlayColor="transparent"
          name='heart'
          color="green"
          size={iconSize}
          onPress={() => swiperRef.current.swipeRight()}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  screencontainer: {
    flex: 1,
    backgroundColor: '#ebecf1'
  },
  swiperContainer: {
    flex: 25
  },
  cardImage: {
    flex: 3,
    width: 160,
    resizeMode: 'contain'
  },
  card: {
    flex: 0.7,
    borderRadius: 10,
    shadowRadius: 25,
    shadowColor: "black",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 0 },
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white"
  },
  bottomContainerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: "stretch"
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    marginBottom: 10
  },
  cardDetails: {
    flex: 1,
    alignItems: "center",
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: "black"
  },
  price: {
    color: "blue",
    fontSize: 32,
    fontWeight: '500'
  },
  bottomContainerMeta: {
    alignContent: 'flex-end',
    alignItems: 'center'
  }
});
