import React from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Nav from './src/component/Nav/Nav.js';
import UserInfo from './src/component/UserInfo/UserInfo.js';

const RootStack = StackNavigator(
  {
    NavScreen: {
        screen: Nav,
    },
    UserInfoScreen:{
        screen: UserInfo,
    },
  },
  {
    initialRouteName: 'NavScreen',
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Modal onRequestClose={() => {
        alert('Modal has been closed.');
      }}>
        {/* <View style={styles.container}>
          <Text>Routing1</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text> 
    </View> */}
        <RootStack />
      </Modal>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

