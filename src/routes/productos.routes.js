import { Router } from "express";
import {
  crearProducto,
  listarProductos,
  obtenerProductos,
  editarProducto,
  borrarProducto,
} from "../controllers/productos.controllers";
import { check } from "express-validator";
//instanciar el router
const router = Router();

// app.get('/prueba', (req, res)=>{
//     res.send('hola desde el backEnd en la peticion get')

//     })

router
  .route("/productos")
  .get(listarProductos)
  .post(
    [
      check("nombreProducto", "el nombre del producto es oblitario")
        .notEmpty()
        .isLength({ min: 2, max: 50 })
        .withMessage("el producto debe tener entre 2 y 50 caracteres"),
      check("precio", "el precio del producto es obligatorio")
        .notEmpty()
        .isNumeric()
        .withMessage("el precio debe ser numerico")
        .custom((value) => {
          if (value >= 1 && value <= 10000) {
            return true;
          } else {
            throw new Error("el precio debe estar entre 1 y 10000");
          }
        }),
      check("imagen")
        .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
        .withMessage("debe enviar una URL valida"),
      check("categoria")
        .isIn(["bebida-fria", "bebida-caliente", "dulce", "salado"])
        .withMessage("La categoria debe ser valida"),
    ],
    crearProducto
  );
router
  .route("/productos/:id")
  .get(obtenerProductos)
  .put(editarProducto)
  .delete(borrarProducto);

export default router;
