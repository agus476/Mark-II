import axios from 'axios'
import fs from 'fs/promises'
import path from 'path'
import moment from 'moment'


const dynamicDate = moment().format('DD-MM-YY')
const url = 'https://www.carlosvazquez.net/es/clientes/gen_xls_linea.php?numero_linea=TODAS&numero_cliente=37564'
const fileName = "Carlos v"
const dowlnoadDirectory = 'C:/Users/MOSTRADOR 4/Desktop/Archivo/Tareas wismi/Prototipo Mark II/directorio_descargas';

export async function downloadFileCarlosv(){
    try{
        await fs.mkdir(dowlnoadDirectory,{recursive:true})
        let fileNameDef = `${dynamicDate} ${fileName}.xls`
        const response = await axios.get(url,{responseType:'arraybuffer'})
        await fs.writeFile(`${dowlnoadDirectory}/${fileNameDef}`, response.data)
        console.log(`Archivo ${fileName} descargado correctamente desde ${url}`)
        
    }

    catch(error){
        console.error('Error al descargar el archivo ', error.message)
    }




}

downloadFileCarlosv()