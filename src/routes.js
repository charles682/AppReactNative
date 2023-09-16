import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home} from  './pages/home'
import {Passwords} from './pages/passwords'
import {Ionicons} from '@expo/vector-icons'
import {Settings} from './pages/settings' 
import {Login} from './pages/login'

const Tab = createBottomTabNavigator();


export function Routes(){
    return(
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
                name="home"
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

            <Tab.Screen
                name="login"
                component={Login}
                options={{
                    tabBarShowLabel:false, /// desabilita o nome embaixo do icon
                    headerShown: false, /// excluir o header em cima da pagina
                    tabBarIcon:({focused, size, color}) =>{
                        if(focused){
                            return <Ionicons size={size} color={color} name="log-in"/>
                        }
                        return <Ionicons size={size} color={color} name="log-in-outline"/>
                    }
                }}
            />
   
        </Tab.Navigator>
    )
}