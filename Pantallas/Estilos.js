import { StyleSheet } from "react-native";

const Colors = {
    primary: '#42291A', 
    // Marrón oscuro: ideal para el logotipo, encabezados y botones principales.
    secondary: '#3B514F', 
    // Verde oscuro: para los botones secundarios, iconos, bordes y elementos de navegación.
    background: '#F2EFEA', 
    // Beige: como color de fondo, ya sea de toda la pantalla o de algunos bloques de contenido, 
    //para dar una sensación de calidez y confort.
    accent: '#F8D49D', 
    // Amarillo dorado: para llamar la atención sobre elementos importantes como botones de compra
    // o de suscripción, o para resaltar promociones especiales.
    text: '#000000', 
    // Negro: como color principal de texto, para garantizar una buena legibilidad.
    neutral: '#C5C5C5' 
    // Gris claro: para los elementos secundarios como iconos inactivos, 
    //textos menos importantes, y para el contraste con otros colores.
  };

  const vals={
    usuario:''
  }

const Estilos=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background,
        alignItems:'center',
        justifyContent:'center',
        padding:10
    },
    cajaStyle:{
        flexDirection:"row",
        backgroundColor:Colors.neutral,
        borderWidth:2,
        borderColor:Colors.secondary,
        alignContent:'stretch',
        alignItems:'center',
        alignSelf:'stretch',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:5,
        margin:10,
    },
    boton:{
        flexDirection:"row",
        backgroundColor:Colors.accent,
        borderWidth:2,
        borderColor:Colors.secondary,
        alignItems:'center',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:5,
        margin:10,
    },
    textLink:{
        fontSize:15,
        fontStyle:'italic',
        color:Colors.neutral
    },
    textTitle:{
        fontSize:25,
        fontStyle:'italic',
        color:Colors.primary,
        fontFamily:'serif'
    },
    logo:{
        height:250,
        width:350
    },
    card:{
        flexDirection:'column',
        borderColor:Colors.secondary,
        borderWidth:2,
        borderRadius:10,
        backgroundColor:Colors.background,
        paddingTop:5,
        marginBottom:25,
        marginHorizontal:10
      },
      Titulo:{
        fontSize:25,
        color:Colors.primary,
        textAlign:'center',
        fontWeight:'bold',
        marginBottom:30,
        shadowColor: Colors.secondary,
        shadowOpacity: 50,
        shadowRadius: 5,
        shadowOffset: { width: 20, height: 20 }
      },
      texto:{
        fontSize:15,
        color:Colors.primary,
        fontWeight:'bold',
        textAlign:'justify',
        marginHorizontal:10,
        marginBottom:30,
        shadowColor: Colors.secondary,
        shadowOpacity: 50,
        shadowRadius: 5,
        shadowOffset: { width: 20, height: 20 }
      },
      foto:{
        width: 200,
        height: 200,
        borderRadius: 100,
        shadowColor: Colors.secondary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        alignSelf:'center'
      },
      logo:{
        height:60,
        width:160,
        padding:5,
        margin:15
      },
      TituloD:{
        fontSize:20,
        fontWeight:'bold',
        color:Colors.primary
      },
      TextoContenido:{
        fontSize:15,
        color:Colors.primary
      }

})

export {Estilos, Colors,vals}