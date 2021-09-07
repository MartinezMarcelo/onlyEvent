import React from 'react';
import {useDispatch} from "react-redux";
import {selectStack} from "../Redux/Nav/actions";
import { Box,Icon,HStack,Center,Pressable } from 'native-base';        
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
    import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

    export default function Nav (){
        const [selected, setSelected] = React.useState(0);
        const dispatch = useDispatch();

        const  handleSelect = (number) =>{
          dispatch(selectStack(number));
          setSelected(number);
    }
    return(

    <Center flex={1} style={{position:"absolute",bottom:0,right:0,left:0}}>
        <Box flex={1}  safeAreaTop style={{width:"50%"}}>
          <Center flex={1} >
            </Center>
            <HStack bg="white" alignItems="center" safeAreaBottom style={{borderColor:'black', borderWidth: 1,borderRadius:20}}>
              <Pressable
                opacity={selected === 0 ? 1 : 0.5}
                py={2}
                flex={1}
                onPress={() =>  handleSelect(0)}
              >
                <Center>
                  <Icon
                    mb={1}
                    as={<IconFontAwesome  name="home" />}
                    color="black"
                    size="sm"
                  />
                </Center>
              </Pressable>
              <Pressable
                opacity={selected === 1 ? 1 : 0.5}
                py={2}
                flex={1}
                onPress={() => handleSelect(1)}
              >
                <Center>
                  <Icon
                    mb={1}
                    as={<IconFontAwesome  name="search" />}
                    color="black"
                    size="sm"
                  />
                </Center>
              </Pressable>
              <Pressable
                opacity={selected === 2 ? 1 : 0.5}
                py={2}
                flex={1}
                onPress={() => handleSelect(2)}
              >
                <Center>
                  <Icon
                    mb={1}
                    as={<IconMaterialIcons  name="add" />}
                    color="black"
                    size="sm"
                  />
                </Center>
              </Pressable>
              <Pressable
                opacity={selected === 3 ? 1 : 0.5}
                py={2}
                flex={1}
                onPress={() =>  handleSelect(3)}
              >
                <Center>
                  <Icon
                    mb={1}
                    as={<IconMaterialIcons  name="add-alert" />}
                    color="black"
                    size="sm"
                  />
                </Center>
              </Pressable>
              <Pressable
                opacity={selected === 4 ? 1 : 0.5}
                py={2}
                flex={1}
                onPress={() =>  handleSelect(4)}
              >
                <Center>
                  <Icon
                    mb={1}
                    as={<IconMaterialIcons  name="calendar-today" />}
                    color="black"
                    size="sm"
                  />
                </Center>
              </Pressable>
          </HStack>
        </Box>
    </Center>
   )
}
