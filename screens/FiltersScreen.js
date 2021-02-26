import React, {useEffect} from "react";
import { View, Text, StyleSheet, Button} from "react-native";
import CustomHeaderButton from '../components/HeaderButton'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'; 

import * as Notifications from 'expo-notifications'; 
import * as Permissions from 'expo-permissions'; 

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true, 
    }
  }
}); 


const FiltersScreen = (props) => {

  const triggerNotificationsHandler = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'testing', 
        body: 'notifications'
      }, 
      trigger: {
        seconds: 2
      }
    })
  }; 

 
  useEffect(() => {
    Permissions.getAsync(Permissions.NOTIFICATIONS)
      .then((statusObj) => {
       
        if(statusObj.status !== 'granted') {
          console.log('asking')
         return Permissions.askAsync(Permissions.NOTIFICATIONS);
        } 
        return statusObj; 
      })
      .then((statusObj) => {
        if(statusObj.status !== 'granted') {
          return
        }
      })
  }, []); 

  useEffect(() => {
    const backgroundSubscription = Notifications.addNotificationResponseReceivedListener(response => {
      console.log('----background----')
      console.log(response); 
    }); 

    const foregroundSubscription = Notifications.addNotificationReceivedListener(notification => {
      console.log('----foreground----')
      console.log(notification)
    }); 

    return () => {
      backgroundSubscription.remove(); 
      foregroundSubscription.remove(); 
    }
  }, [])



  return (
    <View style={styles.screen}>
      <Text>The Filters Screen! (notification playground)</Text>
      <Button 
        title="Notify Me!" 
        onPress={triggerNotificationsHandler}
      />
    </View>
  );
};


export const ScreenOptions = navData => {
  
  return {
    headerTitle: "Filter Meals",
    headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item 
        title="menu" 
        iconName='ios-menu' 
        onPress={() => {
          navData.navigation.toggleDrawer(); 
          console.log(navData.navigation)
       
        }}/>
    </HeaderButtons>
  )
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});



export default FiltersScreen;
