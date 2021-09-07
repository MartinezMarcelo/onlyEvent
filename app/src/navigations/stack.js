import React, {useState,render,useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Home from "../views/home";
import Search from "../views/search";
import Splash from "../views/splash";
import Nav from '../components/nav';
import {
    View,ScrollView
  } from 'react-native';

export default function SwitchViews (){
    const stack = useSelector(state => state.nav);
    const {selectStack} = stack;
// a los 2 segundos ocultar el splash
    useEffect(() => {
      const timer = setTimeout(() => {
      setloadSplash(false);
    }, 2000);
      return () => clearTimeout(timer);   
  
    }, []);


    const [loadSplash, setloadSplash] = React.useState(true);

    return (<View> 
            {loadSplash?
            <Splash></Splash>:
            (<>
                <ScrollView>
                { //  seleciona del nav  para mostrar vista
                  selectStack==0?
                  <Home></Home>:
                  selectStack==1?
                  <Search/>
                  :null
                }
                </ScrollView>
                <Nav/>
              </>
            )
            }
            
            </View>
    )
 }