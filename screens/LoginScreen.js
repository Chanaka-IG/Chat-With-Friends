 import React,{useState, useEffect} from 'react'
 import { View, Text,ImageBackground, StyleSheet, Button } from 'react-native'
 import { Input} from 'react-native-elements'
 import {auth} from '../firebase'

 const LoginScreen = ({navigation}) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password)
            .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
  });

    }
    
    useEffect(() => {
        
        const unsubscribe = auth.onAuthStateChanged(function(user) {
            if (user) {
             navigation.navigate('Chat')
            } else {
                navigation.canGoBack() &&navigation.popToTop()
            }
          });
        return unsubscribe
    }, [])


     return (
     
        <ImageBackground
                blurRadius={4}
                style={styles.background}
                source={require("../assets/back2.jpg")}
            >
                  <View style={styles.container}>
             
             <Input
                style={styles.input}
                 placeholder="Enter email" 
                 label="Email"
                 leftIcon={{
                     type: 'material', name: 'email', color:'white'
                 }}
                 value={email}
                 onChangeText={text => setEmail(text)}
             />
 
                <Input
                  style={styles.input}
                 placeholder="Password"
                 label="password"
                 leftIcon={{
                     type: 'material', name: 'lock', color: 'white'
                 }}
                 value={password}
                 onChangeText={text => setPassword(text)}
                 secureTextEntry
             />
         <View style={styles.button1}>    
        <Button title="Login" onPress={signIn} />
        </View>
        <View style={styles.button2}>
        <Button title="Register"
         onPress={() => navigation.navigate('Register')}
        />
        </View>
          </View>

            </ImageBackground>
       
     )
   
 }
 

 export default LoginScreen
 

 const styles = StyleSheet.create({
  
    background: {
        flex: 1,      
      },
    container:{
        padding:20,
        flex:1,
        alignItems: 'center',
        marginTop:70

    },
   button1:{
        marginTop:40,
        marginBottom:40,
        width: 200,
        
        
   },
   button2:{
    marginBottom:40,
    width: 200
    
},
input:{
    marginLeft: 40,
    color: 'white'
},

})
 