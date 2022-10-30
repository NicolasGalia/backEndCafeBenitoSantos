import Producto from "../models/productos";

export const listarProductos = async (req, res) => {
  try {
    //buscar los productos 
const Productos = await Producto.find();
    //responder al frontEnd con el arreglo de productos 
    res.status(200).json(Productos);

  } catch (error) {
    console.log(error);
    //enviar una respuesta al frontEnd
    res.status(404).json({mensaje: 'error al busca los productos'})
  }
};


export const obtenerProductos = async (req, res) => {
  try {
 
    //obtener el parametro 
console.log(req.params.id);
    //pedirle a la base de datos el prdoucto que coincide con el parametro 
    const productoBuscado = await Producto.findById(req.params.id);

    //responder al frontEnd 
    res.status(200).json(productoBuscado);

  } catch (error) {
    console.log(error);
    //enviar una respuesta al frontEnd
    res.status(404).json({mensaje: 'error al busca los producto'})
  }
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
