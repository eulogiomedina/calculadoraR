import {TouchableOpacity,Text, View} from 'react-native'
import { estilos } from './Estilos'

export const Boton = ({ texto, onPress }) => {
    return (
      <TouchableOpacity style={estilos.boton} onPress={onPress}>
        <Text style={estilos.textoB}>{texto}</Text>
      </TouchableOpacity>
    )
  }

  export const Caja=({valor})=>{
    return(
        <View style={estilos.boxContainer}>
            <Text style={estilos.TextBox}>{valor}</Text>
        </View>
    )
  }