import React, { useEffect } from 'react';

import { View, Text, StyleSheet, Image, Animated, Easing, Dimensions } from 'react-native';
import Card from './component/Card';


export default function App() {


  return (
    <View style={styles.container}>
      <Card
        delay={800}
        duration={12000}
        left={100}
        bottom={200}
        height={100}
        width={50}
        zIndex={1}
        backgroundColor="red"
      />
      <Card
        delay={500}
        duration={12000}
        left={50}
        bottom={100}
        height={100}
        width={50}
        zIndex={2}
        backgroundColor="yellow"
      />
      <Card
        delay={1000}
        duration={8000}
        left={210}
        bottom={430}
        height={100}
        backgroundColor="blue"
        width={50}
        zIndex={3}
      />
      <Card
        delay={500}
        duration={9000}
        left={100}
        bottom={430}
        height={150}
        width={75}
        zIndex={4}
        backgroundColor="purple"
      />
      <Card
        delay={3000}
        duration={8000}
        left={100}
        bottom={430}
        height={100}
        width={50}
        zIndex={5}
        backgroundColor="gray" />
      <Card
        delay={400}
        duration={10000}
        left={100}
        bottom={300}
        height={100}
        width={50}
        zIndex={6}
        backgroundColor="pink"
      />
      <Card
        delay={0}
        duration={6000}
        left={100}
        bottom={300}
        height={100}
        width={50}
        zIndex={7}
        backgroundColor="brown"
      />
      <Card
        delay={400}
        duration={9000}
        left={240}
        bottom={200}
        height={100}
        width={50}
        zIndex={7}
        backgroundColor="brown"
      />
      <Card
        delay={700}
        duration={8000}
        left={140}
        bottom={100}
        height={100}
        width={50}
        zIndex={8}
        backgroundColor="gold"
      />
      <Card
        delay={2000}
        duration={8000}
        left={140}
        bottom={500}
        height={100}
        width={50}
        zIndex={9}
        backgroundColor="gold"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
});
//100 View
//1 - 100 Animated.View