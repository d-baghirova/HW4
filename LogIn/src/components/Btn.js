import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

const Btn = ({btnText}) => {
  return (
    <View>
        <Pressable>
            <View style={styles.container}>
                <Text style={styles.heading}>{btnText}</Text>
            </View>
        </Pressable>
        <Pressable onPress={() => Linking.openURL('mailto:zeynalovayxan70@gmail.com?subject=I%20forgot%20my%20password&body=Help')}>
          <Text style={styles.text}>Forgot your password?</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#5DB075",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: 5,
        marginVertical: 20,
    },
    heading: {
        fontSize: 20,
        color: "white"
    },
    text: {
      color: "#5DB075",
      textAlign: "center",
      fontSize: 16
    }
  });

export default Btn