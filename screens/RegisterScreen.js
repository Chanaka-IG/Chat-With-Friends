import React,{useState} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Input} from 'react-native-elements'
import {auth} from '../firebase'

const RegisterScreen = ({navigation}) => {

   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
   const [name,setName] = useState('');
   const [imageURL, setImageUrl] = useState('')

   const register = () => {
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      user.updateProfile({
        displayName:name,
        photoURL: imageURL ? imageURL:
        "https://i.pinimg.com/originals/19/cf/78/19cf789a8e216dc898043489c16cec00.jpg"
      }).then(function() {
        // Update successful.
      }).catch(function(error) {
        // An error happened.
      });
      navigation.pop
    })
    .catch((error) => {
      
      var errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
   }     
   


    return (
        <View style={styles.container}>
           <Input
               placeholder="Enter name"
               label="Name"
               leftIcon={{
                   type: 'material', name: 'badge'
               }}
               value={name}
               onChangeText={text => setName(text)}
           />

            <Input
               placeholder="Enter Email"
               label="Email"
               leftIcon={{
                   type: 'material', name: 'email'
               }}
               value={email}
               onChangeText={text => setEmail(text)}
               
           />

            <Input
               placeholder="Password"
               label="password"
               leftIcon={{
                   type: 'material', name: 'lock'
               }}
               value={password}
               onChangeText={text => setPassword(text)}
               secureTextEntry
           />

           
            <Input
               placeholder="Enter your image url"
               label="Profile Picture"
               leftIcon={{
                   type: 'material', name: 'face'
               }}
               value={imageURL}
               onChangeText={text => setImageUrl(text)}
            
           />

      <View style={styles.button1}>
      <Button title="Register" onPress={register} 
      />
      </View>
        </View>
    )
}


export default RegisterScreen


const styles = StyleSheet.create({
 
   container:{
       padding:20,
       flex:1,
       alignItems: 'center'
       
   },
  button1:{
       marginTop:50,
       marginBottom:20,
       width: 100
       
  },
  

})
