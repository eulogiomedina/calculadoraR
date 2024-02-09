import { StyleSheet } from "react-native";

export const estilos=StyleSheet.create({
    encabezado:{
        flex: 1.5,
        flexDirection: 'column', // Cambia a 'column'
        justifyContent: 'center',
        alignItems: 'center', // Añade para centrar
        backgroundColor: '#227edb',
      },
      texto:{
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        
      },
      container: {
        flex: 1,
        backgroundColor: '#a7d9f3',
        alignItems:'stretch',
        justifyContent: 'center',
      },
      cuerpo:{
        flex: 8,
        alignItems: 'center', // Alinea los elementos al centro
        justifyContent: 'flex-start', // Ajusta según tus necesidades
      },

      boton:{
        //backgroundColor:'#5affcc',
        padding:5,
        borderRadius:5,
        borderColor:'black',
        borderWidth:2,
        //margin:3,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center'
      },
      textoB:{
        color:'white',
        fontSize:30
      },
      logoB:{
        height:35,
        width:35,
        marginRight:7
      },
    //Estilos de la caja
    boxContainer:{
        borderColor:'#000',
        borderWidth:2,
        borderRadius:5,
        height:70,
        margin:15,
        alignItems:'flex-end',
        justifyContent:'center',
        padding:5
    },
    TextBox:{
        fontSize:30
    },
    //estilo de contenedor de los botones
    botonescontainer:{
        padding:30 ,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    botonGrande: {
        width: '25%', // Ajusta según tus necesidades
        height: '25%',
        marginBottom: 13, // Espacio entre los botones
        
        
      },
})