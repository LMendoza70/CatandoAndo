import { StyleSheet } from "react-native";

const Estilos=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.primary,
        alignItems:'center',
        justifyContent:'center'
    }
})

const colors = {
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
  

export {Estilos, colors}