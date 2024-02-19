import fs from 'fs/promises';
import path from 'path';

const directorioOrigen = 'C:/Users/MOSTRADOR 4/Downloads';
const directorioDestino = 'C:/Users/MOSTRADOR 4/Desktop/Archivo/Tareas wismi/Prototipo Mark II/directorio_descargas';

const moverArchivo = async (nombreArchivo) => {
  try {
    const rutaOrigen = path.join(directorioOrigen, nombreArchivo);
    const rutaDestino = path.join(directorioDestino, nombreArchivo);

    // Mover el archivo
    await fs.rename(rutaOrigen, rutaDestino);

    console.log(`Archivo ${nombreArchivo} movido de ${directorioOrigen} a ${directorioDestino}`);
  } catch (error) {
    console.error(`Error al mover el archivo ${nombreArchivo}:`, error);
  }
};

// Reemplaza 'nombreDelArchivo.ext' con el nombre del archivo que deseas mover
const nombreDelArchivoAMover = 'Reporte-638380671325810000.csv';
moverArchivo(nombreDelArchivoAMover);