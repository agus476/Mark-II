import axios from 'axios';
import fs from 'fs/promises';
import moment from 'moment';

const dynamicDate = moment().format('DD-MM-YY');

const proveedores = [
  {
    url: 'https://www.egsa.com.ar/descargas/egsalista1.xls',
    alias: 'Goyanarte 1'
  },
  {
    url: 'https://www.egsa.com.ar/descargas/egsalista2.xls',
    alias: 'Goyanarte 2'
  },
  {
    url: `https://mm.sistorga.com.ar/web/ofertaFile/MovimientoMecanico/lista de precios movmec ${dynamicDate}.xls`,
    alias: 'movmec'
  },
  {
    url: 'https://etman.com.ar/micuenta/generador_listas/5615.csv',
    alias: 'etman'
  },
  {
    url: 'https://www.carlosvazquez.net/es/clientes/gen_xls_linea.php?numero_linea=TODAS&numero_cliente=37564',
    alias: 'carlosvazquez'
  }
];

// Directorio donde se guardarán los archivos descargados
const directorioDescargas = 'directorio_descargas';

// Función para descargar archivos
async function descargarArchivo() {
  try {
    // Crear el directorio de descargas si no existe
    await fs.mkdir(directorioDescargas, { recursive: true });

    for (const proveedor of proveedores) {
      try {
        const { url, alias } = proveedor;

        // Obtener el nombre del archivo desde el mapeo de alias
        let nombreArchivo = `${dynamicDate} ${alias}.xls`;

        // Verificar que el archivo tenga la extensión ".xls"
        if (!nombreArchivo.toLowerCase().endsWith('.xls')) {
          console.log(`El archivo ${nombreArchivo} no tiene la extensión ".xls". Cambiando la extensión a ".xls".`);

          // Cambiar la extensión del archivo a ".xls"
          nombreArchivo += '.xls';
        }

        // Realizar la solicitud HTTP para descargar el archivo
        const response = await axios.get(url, { responseType: 'arraybuffer' });

        // Guardar el archivo en el directorio de descargas
        await fs.writeFile(`${directorioDescargas}/${nombreArchivo}`, response.data);

        console.log(`Archivo ${nombreArchivo} descargado desde ${url}`);
      } catch (error) {
        console.error(`Error al descargar archivo desde ${proveedor.url}: ${error.message}`);
      }
    }
  } catch (error) {
    console.error(`Error al descargar archivos: ${error.message}`);
  }
}

// Ejecutar la función para descargar el archivo
descargarArchivo();