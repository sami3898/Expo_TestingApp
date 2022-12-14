import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'
import React, { FC, useState } from 'react'


const HomeScreen: FC = () => {
    
    // State variables
    const [username, setUsername] = useState<string>('')

    //TODO: display entered username
    const handleAlertName = () => {
        username.length !== 0 &&
            Alert.alert("Usernmae", "Your entered name is: " + username);
    }

  return (
    <View style={styles.container} >
      <Text>Enter your name here</Text>
      <TextInput 
        testID='input-test'
        placeholder='username'
        style={styles.inputContainer}
        value={username}
        onChangeText={setUsername}
      />
      <View style={{flexDirection: 'row', alignItems: 'center',marginTop: 20}} >
        <Button testID='alert-button-test' title='Alert Name' onPress={() => handleAlertName()}  />
        <Button testID='next-button-test' title='Next Screen'/>
      </View>
    </View>
  )
}

export default HomeScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
        borderRadius: 10,
        width: '80%',
        paddingVertical: 14,
        paddingHorizontal: 12,
        fontSize: 16,
        marginVertical: 20
    },
    usernameText: {
        fontSize: 18,
        fontWeight: '600'
    }
})