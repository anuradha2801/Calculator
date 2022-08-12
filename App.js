import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  ImageBackground,
} from "react-native";

const App=()=>{

  const [num1,setnum1]=useState(0)
  const [num2,setnum2]=useState(0)
  const[out,setout]=useState();

  function Add(){
    setout(parseInt(num1)+parseInt(num2))
  }


  function Sub(){
    setout(parseFloat(num1-num2))
  }

  
  function Mul(){
    setout(parseFloat(num1*num2))
  }

  
  function Div(){
    setout(parseFloat(num1/num2))
  }

  return(
  <ImageBackground style={{flex:1}} source={require('./assets/calpic.jpg')}>
   <View>
  <Text style={[style1.Text1]}>
    Calculator
  </Text>
 <TextInput style={style1.TextInput1}
  placeholder="Enter 1st number"
  onChangeText={(e) => {setnum1(e)}}
  />

  <TextInput style={style1.TextInput1}
  placeholder="Enter 2nd number" 
  onChangeText={(e)=>{setnum2(e)}}></TextInput>

  <View>
   <View style={style1.btn}>
   <Button style={[style1.btn]} title="ADD" onPress={Add}/>
   </View>
    
   <View style={style1.btn}>
    <Button title="SUBTRACT" onPress={Sub} />
    </View>
    <View style={style1.btn}>
    <Button  title="PRODUCT" onPress={Mul}/>
    </View>
    <View style={style1.btn}>
    <Button  title="DIVIDE" onPress={Div}/>
    </View>
  </View>

  <Text style={style1.TextInput1} placeholder="Output">
    <Text> Output =  {out}</Text>
  </Text>
  </View>
  </ImageBackground>
  )
}

export default App;

const style1 = StyleSheet.create({
  Text1: {
    fontSize: 40,
    marginTop: 50,
    marginLeft: 100,
    fontWeight: "bold",
    padding:5
  },
  TextInput1: {
    margin: 20,
    height: 80,
    fontSize: 30,
    color: "black",
    backgroundColor: 'white',
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 2,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 52,
    borderRadius: 4,
   // marginBottom:5,
    borderColor:'black',
    borderRadius:15,
    borderRadius:5,
  },
});