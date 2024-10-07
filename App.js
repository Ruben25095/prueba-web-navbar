//import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//import { View, Text } from 'react-native';

import { View,Image } from 'react-native';
import {Inicio} from './paginas/inicio';
import { Contacto } from './paginas/contacto';
import { Informacion } from './paginas/informacion';
import { Servicios } from './paginas/servicios';
const Tab = createMaterialTopTabNavigator();





export default function App() {
  return (
          <NavigationContainer>

            
            <Tab.Navigator   screenOptions={{
    tabBarLabelStyle: { fontSize: 16 },
    tabBarIndicatorStyle: { backgroundColor: 'yellow' },
    tabBarStyle: { backgroundColor: 'skyblue' },
  }}>
               
               <Tab.Screen
          name="Inicio"
          component={Inicio} 
          options={{
            tabBarIcon: () => (
              <Image
              style ={{ width:230, height:110,
               pading:50,
     
               }}
         source={{uri:'https://elmayoristamercado.com/wp-content/uploads/2023/03/logotienda.png'}
                
       }
               />
            ),
          }}
        />
              <Tab.Screen name="Contacto" component={Contacto} />
              <Tab.Screen name="Informacion" component={Informacion} />
              <Tab.Screen name="Servicios" component={Servicios} />
              
            </Tab.Navigator>
          </NavigationContainer>
        
    );  }

   
          


    
   
  