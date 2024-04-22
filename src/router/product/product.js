import { readJsonFile, writeJsonFile }  from '../../actions/product/product'

// controllers/productController.js


// Función para obtener todos los productos
exports.getAllProducts = async (ctx) => {
    try {
        const products = readJsonFile();
        ctx.body = products;
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        ctx.status = 500;
        ctx.body = { error: 'Error al obtener los productos' };
    }
};

// Función para agregar un nuevo producto
exports.addNewItem = async (ctx) => {
    try {
        const requestData = ctx.request.body;
        const products = readJsonFile();
        const newProduct = {
            id: products.length + 1,
            nombre: requestData.nombre,
            precio: requestData.precio,
            cantidad: requestData.cantidad,
            categorias: requestData.categorias,
        };
        products.push(newProduct);
        writeJsonFile(products);
        ctx.status = 201;
        ctx.body = { message: 'Producto agregado correctamente', product: newProduct };
    } catch (error) {
        console.error('Error al agregar un nuevo producto:', error);
        ctx.status = 500;
        ctx.body = { error: 'Error al agregar un nuevo producto' };
    }
};
