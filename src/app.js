import express, { json } from "express";
import rutaEmpleados from '../src/routes/empleados.routes.js'
import rutaIndex from '../src/routes/index.routes.js'
import rutaRegistro from '../src/routes/registro.routes.js'
import rutaLogin from '../src/routes/login.routes.js'
import rutaUsuarios from '../src/routes/usuarios.routes.js'
import cors from "cors"


const app = express()
app.use(cors())
 
app.use(express.json())//json antesde las rutas 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin");
  next();
});



app.use('/api/',rutaEmpleados)
app.use('/api/',rutaIndex)
app.use('/api/',rutaRegistro)
app.use('/api/',rutaLogin)
app.use('/api/',rutaUsuarios)

app.use((req,res,next )=>{
  res.status(404).json({
    message:'ruta no encontrada '
  })
})


export default app



