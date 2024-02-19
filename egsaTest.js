import axios from 'axios';
import AdmZip from 'adm-zip';

async function descargarYDescomprimirZip(url, directorioDestino, contraseña) {
  try {
    // Realiza la solicitud HTTP para descargar el archivo ZIP
    const { data } = await axios.get(url, { responseType: 'arraybuffer' });

    // Descomprime el archivo ZIP
    const zip = new AdmZip(data, { password: contraseña });

    // Extrae todo el contenido en el directorio de destino
    zip.extractAllTo(directorioDestino, /* overwrite */ true);

    console.log(`Archivo ZIP descomprimido en ${directorioDestino}`);
  } catch (error) {
    console.error(`Error al descargar y descomprimir el archivo ZIP: ${error.message}`);
  }
}

// Uso del método
const urlZip = 'https://www.egsa.com.ar/descargas/egsalista1.zip';  // Cambia la URL al archivo ZIP
const directorioDestino = 'C:/Users/MOSTRADOR 4/Desktop/Archivo/Tareas wismi/Prototipo Mark II/directorio_descargas';  // Cambia la ruta al directorio de destino
const contraseña = 'piston2024';  // Cambia a la contraseña real del archivo ZIP

descargarYDescomprimirZip(urlZip, directorioDestino, contraseña);