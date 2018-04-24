// import React from 'react';
// import { StackNavigator } from 'react-navigation';

// import Nav from './component/Nav/Nav.js';
// import UserInfo from './component/UserInfo/UserInfo.js';

// export default
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