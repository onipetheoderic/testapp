import React, { useEffect, useRef } from 'react';
import * as Animatable from 'react-native-animatable';
// Import required components
import { View, Text, StyleSheet, Image, Animated, Easing, Dimensions } from 'react-native';
const { width: screenWidth, height: screenHeight } = Dimensions.get('screen')

export default function Card({ delay, duration, left, bottom, height, width, zIndex, backgroundColor }) {

    const cardRef = useRef(null);

    const toValueWidth = width * 3
    const toValueHeight = height * 3

    const getDisplacementLeft = () => {
        if (left > screenWidth / 2) {
            return {
                left: screenWidth * 1,
            }
        }
        return {
            left: screenWidth * -1,
        }
    }
    const getDisplacementBottom = () => {
        if (bottom > screenHeight / 2) {
            return {
                bottom: screenHeight * 1,
            }
        }

        return {
            bottom: screenHeight * -1,
        }
    }

    console.log(getDisplacementBottom(), getDisplacementLeft(), toValueHeight, toValueWidth, left, screenWidth / 2, screenHeight / 2)


    const customAnimation = (displacement) => {
        return {
            0: {
                left,
                bottom,
                height,
                width
            },

            1: {
                height: toValueHeight,
                width: toValueWidth,
                ...getDisplacementLeft(),
                ...getDisplacementBottom(),

            }
        }
    }


    return (
        <Animatable.View
            ref={cardRef}
            animation={customAnimation(0)}
            delay={delay}
            duration={duration}
            style={[styles.container, { zIndex, backgroundColor }]}>
        </Animatable.View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        position: 'absolute'
    },
});