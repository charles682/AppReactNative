
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import { Ionicons } from '@expo/vector-icons'; // Importe o Ionicons
import {Home} from '../pages/Home'; // Importe as telas necessárias
import {Settings} from '../pages/settings'; // Importe as telas necessárias
import {Passwords} from '../pages/passwords';
import {Welcome} from '../pages/welcome';
import {SingIN} from '../pages/SignIn';
import { Button } from 'react-native'; // Importe o Button

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
                name="settings"
                component={Settings}
                options={{
                    tabBarShowLabel:false, /// desabilita o nome embaixo do icon
                    headerShown: false, /// excluir o header em cima da pagina
                    tabBarIcon:({focused, size, color}) =>{
                        if(focused){
                            return <Ionicons size={size} color={color} name="settings"/>
                        }
                        return <Ionicons size={size} color={color} name="settings-outline"/>
                    }
                }}
            />


            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarShowLabel:false, /// desabilita o nome embaixo do icon
                    headerShown: false, /// excluir o header em cima da pagina
                    tabBarIcon:({focused, size, color}) =>{
                        if(focused){
                            return <Ionicons size={size} color={color} name="home"/>
                        }
                        return <Ionicons size={size} color={color} name="home-outline"/>
                    }
                }}
            />

            <Tab.Screen
                name="passwords"
                component={Passwords}
                options={{
                    tabBarShowLabel:false, /// desabilita o nome embaixo do icon
                    headerShown: false, /// excluir o header em cima da pagina
                    tabBarIcon:({focused, size, color}) =>{
                        if(focused){
                            return <Ionicons size={size} color={color} name="lock-closed"/>
                        }
                        return <Ionicons size={size} color={color} name="lock-closed-outline"/>
                    }
                }}
            />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator>
          <Screen
              name="Welcome"
              component={Welcome}
              options={{headerShown:false}}
              
            />

            <Screen
                name="SingIn"
                component={SingIN}
                options={{headerShown:false}}
                
            />
    </Stack.Navigator>
  );
}

export default function App() {
  const [showBottomTabs, setShowBottomTabs] = useState(true);

  const toggleBottomTabs = () => {
    setShowBottomTabs(!showBottomTabs);
  };

  return (
    <NavigationContainer>
      {showBottomTabs ? (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={BottomTabs} />
          <Tab.Screen name="Settings" component={StackNavigator} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="SignIn" component={SingIN} />
        </Stack.Navigator>
      )}
      <Button
        title={showBottomTabs ? "" : ""}
        onPress={toggleBottomTabs}
      />
    </NavigationContainer>
  );
}
