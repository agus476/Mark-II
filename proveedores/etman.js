import axios from 'axios'
import fs from 'fs/promises'
import path from 'path'
import moment from 'moment'

const dynamicDate = moment().format('DD-MM-YY')

const url = 'https://etman.com.ar/micuenta/generador_listas/5615.csv'
const fileName = "etman"
const dowlnoadDirectory = 'C:/Users/MOSTRADOR 4/Desktop/Archivo/Tareas wismi/Prototipo Mark II/directorio_descargas';

export async function downloadFileEtman(){
  try{ 
     await fs.mkdir(dowlnoadDirectory,{recursive:true})
     const extension = path.extname(url);
     let fileNameDef =  `${dynamicDate} ${fileName}${extension}`
     const response = await axios.get(url,{responseType:'arraybuffer'})
     await fs.writeFile(`${dowlnoadDirectory}/${fileNameDef}`, response.data)
  
     console.log(`Archivo ${fileName} descargado desde${url}`)
  }
 
  catch (error){
    console.error('Error al descargar archivos de etman', error.message)

  }



}
downloadFileEtman()