import { Router } from "express";
import { crearProducto, listarProductos, obtenerProductos, editarProducto } from "../controllers/productos.controllers";

//instanciar el router 
const router = Router();

// app.get('/prueba', (req, res)=>{
//     res.send('hola desde el backEnd en la peticion get')
    
//     })

router.route('/productos').get(listarProductos).post(crearProducto);
router.route('/productos/:id').get(obtenerProductos).put(editarProducto);

export default router;        