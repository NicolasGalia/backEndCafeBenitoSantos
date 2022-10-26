import Producto from "../models/productos";

export const listarProductos = (req, res) => {
  res.send("hola desde el backEnd en la peticion get");
};

export const crearProducto = async (req, res) => {
  try {
    // console.log(req.body);
    //validar los datos del objeto

    const productoNuevo = new Producto(req.body);
    //guarda ese objeto en la base de datos
    await productoNuevo.save();

    res.status(201).json({
      mensaje: "el producto fue creado correctamente",
    });
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ mensaje: "error al intentar agregar un nuevo producto" });
  }
};
