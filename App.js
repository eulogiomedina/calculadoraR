import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { estilos } from './Estilos';
import { Calculadora } from './calculadora';

export default function App() {
  return (
    <View style={estilos.container}>
        <Encabezado/>
        <Cuerpo/>
      
    </View>
  );
}

export const Encabezado=()=>{
  return(
    <View style={estilos.encabezado}>
        <Text style={estilos.texto}>CALCULADORA</Text>
    </View>
  )
}
export const Cuerpo=()=>{
  return(
    <View style={estilos.cuerpo}>
        <Calculadora/>
    </View>
  )
}