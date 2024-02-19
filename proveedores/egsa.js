import axios from 'axios';
import fs from 'fs/promises';
import path from 'path';
import moment from 'moment';

const dynamicDate = moment().format('DD-MM-YY');

const proveedores = [
    {
        url: 'https://www.egsa.com.ar/descargas/egsalista1.zip',
        alias: 'Goyanarte 1'
    },
    {
        url: 'https://www.egsa.com.ar/descargas/egsalista2.zip',
        alias: 'Goyanarte 2'
    }
];

const directorioDescargas = 'C:/Users/MOSTRADOR 4/Desktop/Archivo/Tareas wismi/Prototipo Mark II/directorio_descargas';

export async function descargarArchivosGoyanarte() {
    try {
        await fs.mkdir(directorioDescargas, { recursive: true });

        for (const proveedor of proveedores) {
            const { url, alias } = proveedor;
            const extension = path.extname(url);
            let nombreArchivo = `${dynamicDate} ${alias}${extension}`;

            const response = await axios.get(url, { responseType: 'arraybuffer' });

            await fs.writeFile(`${directorioDescargas}/${nombreArchivo}`, response.data);

            console.log(`Archivo ${nombreArchivo} descargado desde ${url}`);
        }
    } catch (error) {
        console.error('Error al descargar archivos de Goyanarte:', error.message);
    }
}

descargarArchivosGoyanarte()