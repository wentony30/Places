import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import AuthContext from '../../context/Auth'

const Login = () => {
   const { signed, user, signIn} = useContext(AuthContext);
   console.log(signed);
   console.log(user);

   const handleSignIn = async () => {
      signIn()
   }
   
   return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
         <TouchableOpacity onPress={handleSignIn}>
            <Text>Sign In</Text>
         </TouchableOpacity>
      </View>
   );
}

export default Login;