import axios from 'axios'
import fs from 'fs/promises'
import path from 'path'
import moment from 'moment'


const UrlBase = 'https://mm.sistorga.com.ar/web/ofertaFile/MovimientoMecanico/lista%20de%20precios%20movmec%20';
const fileName = "Movimiento mecanico";
const dowlnoadDirectory = 'C:/Users/MOSTRADOR 4/Desktop/Archivo/Tareas wismi/Prototipo Mark II/directorio_descargas';

export async function downloadFileMov(){
 const datesOfMonth = await getDatesOfMonth()

 for (const date of datesOfMonth){
      try{ 
        let url=`${UrlBase}${date}.xls`


      }
 }

    
}
