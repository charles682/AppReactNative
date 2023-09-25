import {createNativeStackNavigator} from '@react-navigation/native-stack'
;
import {SingIN} from '../pages/SignIn'
import {Welcome} from '../pages/welcome'

 const {Screen, Navigator}  = createNativeStackNavigator();

export function StackRoutes(){
    return(

     
        <Navigator >
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
   
        </Navigator>
    )
}