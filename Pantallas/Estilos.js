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
    }

})


  

export {Estilos, Colors,vals}