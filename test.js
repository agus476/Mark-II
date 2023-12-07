import axios from 'axios';
import fs from 'fs/promises';
import moment from 'moment';

// URL de la página de descargas
const urlsProveedores = 
['https://www.egsa.com.ar/descargas/egsalista1.xls',
'https://www.egsa.com.ar/descargas/egsalista2.xls',
'https://mm.sistorga.com.ar/web/ofertaFile/MovimientoMecanico/lista de precios movmec 05-12-2023.xls',
'https://etman.com.ar/micuenta/generador_listas/5615.csv',
'https://www.carlosvazquez.net/es/clientes/gen_xls_linea.php?numero_linea=TODAS&numero_cliente=37564']
const fechaActual = moment().format('DDMMYY');
console.log(fechaActual)
// Directorio donde se guardarán los archivos descargados
const directorioDescargas = 'directorio_descargas';

// Función para descargar archivos
async function descargarArchivo() {
  try {
    // Crear el directorio de descargas si no existe
    await fs.mkdir(directorioDescargas, { recursive: true });
    
    for (const urlProveedor of urlsProveedores) {
      // Obtener el nombre del archivo desde la URL
      const nombreArchivo = fechaActual + " " + urlProveedor.split('/').pop();

      // Realizar la solicitud HTTP para descargar el archivo
      const response = await axios.get(urlProveedor, { responseType: 'arraybuffer' });

      // Guardar el archivo en el directorio de descargas
      await fs.writeFile(`${directorioDescargas}/${nombreArchivo}`, response.data);

      console.log(`Archivo ${nombreArchivo} descargado desde ${urlProveedor}`);
    }
  } catch (error) {
    console.error(`Error al descargar archivo desde la lista de proveedores : ${error.message}`);
  }
}

// Ejecutar la función para descargar el archivo
descargarArchivo();