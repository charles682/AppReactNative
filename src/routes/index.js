import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'react-native'

import {StackRoutes} from "./stack.routes";

export function Routes(){
    return(
        <NavigationContainer>
            {/* <StatusBar  backgroundColor="#38A69D" barStyle="light-content" /> */}
            <StackRoutes />
            {/* <BottonRoutes/> */}
     
          
        </NavigationContainer>
    )
}


