import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {View} from 'react-native';
import {  Box, Text,Center,Image } from 'native-base';        
import { checkConextion } from '../Redux/home/actions';

    export default function Home (){
        const dispatch = useDispatch();
        useEffect(() => {
          dispatch(checkConextion());
        }, []);
    return(
        <Center flex={1}>
        <Image
         source={require("../assets/img/event1.jpg")}
          alt="Alternate Text"
          resizeMode="cover"
          height={200}
          style={{width:"90%",margin:"2%"}}
          
        />
      <Text color="black" alignSelf="flex-start" marginLeft="2">Top 3</Text>
    
            <Box
          bg="gray.200"
          shadow={2}
          rounded="lg"
          style={{width:"90%"}}>
          
          <View flexDirection="row" ><Text color="black" flex="1" alignSelf="flex-start">Parrilla libre</Text>
            <Text color="gray.500" alignSelf="flex-end" flex="1" style={{textAlign: 'right'}}>sab 15/09</Text>
          </View>
          <Image source={{uri: "https://sample-example.nativebase.io/static/media/dawki-river.ebbf5434.png"}} alt="image base" resizeMode="cover" height={200} />
          <Text bold position="absolute" color="white" top={0} m={[4, 4, 8]}>
            NEWS
          </Text>
          </Box>
          <Box
          bg="gray.200"
          shadow={2}
          rounded="lg"
          style={{width:"90%"}}>
          
          <View flexDirection="row" ><Text color="black" flex="1" alignSelf="flex-start">Parrilla libre</Text>
            <Text color="gray.500" alignSelf="flex-end" flex="1" style={{textAlign: 'right'}}>sab 15/09</Text>
          </View>
          <Image source={{uri: "https://sample-example.nativebase.io/static/media/dawki-river.ebbf5434.png"}} alt="image base" resizeMode="cover" height={200} />
          <Text bold position="absolute" color="white" top={0} m={[4, 4, 8]}>
            NEWS
          </Text>
          </Box>
          <Box
          bg="gray.200"
          shadow={2}
          rounded="lg"
          style={{width:"90%"}}>
          
          <View flexDirection="row" ><Text color="black" flex="1" alignSelf="flex-start">Parrilla libre</Text>
            <Text color="gray.500" alignSelf="flex-end" flex="1" style={{textAlign: 'right'}}>sab 15/09</Text>
          </View>
          <Image source={{uri: "https://sample-example.nativebase.io/static/media/dawki-river.ebbf5434.png"}} alt="image base" resizeMode="cover" height={200} />
          <Text bold position="absolute" color="white" top={0} m={[4, 4, 8]}>
            NEWS
          </Text>
          </Box>
         </Center>
   )
}
