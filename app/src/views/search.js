import React from 'react';
import {useDispatch} from "react-redux";
import { View,} from 'react-native';
  import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { Box,Text,Icon, Center,Input,Image} from 'native-base';        

    export default function Search (){
        const dispatch = useDispatch();

    return(
        <Center flex={1}>
      <Input
       variant="rounded"
        InputLeftElement={
          <Icon
            as={<IconFontAwesome name="search" />}
            size="md"
            m={2}
            _light={{
              color: "black",
            }}
            _dark={{
              color: "gray.300",
            }}
          />
        }

        placeholder="Search Event" // mx={4}
        _light={{
          placeholderTextColor: "blueGray.400",
        }}
        _dark={{
          placeholderTextColor: "blueGray.50",
        }}
      />
            <Box
          bg="gray.200"
          shadow={2}
          rounded="lg"
          style={{width:"90%",marginTop:"2%"}}>
          
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