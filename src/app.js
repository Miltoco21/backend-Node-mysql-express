import express, { json } from "express";
import rutaEmpleados from '../src/routes/empleados.routes.js'
import rutaIndex from '../src/routes/index.routes.js'


const app = express()

app.use(express.json())  //json antesde las rutas 

app.use('/api/',rutaEmpleados)
app.use('/api/',rutaIndex)

app.use((req,res,next )=>{
  res.status(404).json({
    message:'ruta no encontrada '
  })
})


export default app



