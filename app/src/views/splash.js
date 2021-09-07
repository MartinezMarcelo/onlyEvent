import React  from 'react';
import { Text} from 'native-base';   
import {View,Dimensions} from 'react-native';     

export default function Splash (){
    const {width} = Dimensions.get('window');
return(
    <View  flex={1} style={{backgroundColor: "#332342",position:"absolute",right:0,left:0,top:0,bottom:0,width:width,height:width*5,alignItems : 'center'}}>
        <Text bold  color="white"fontSize ='4xl' >
            OnlyEvent
        </Text>
    </View>
   )
}
