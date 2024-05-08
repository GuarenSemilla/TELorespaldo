import { readJsonFile, writeJsonFile }  from '../../actions/link/link'

// controllers/productController.js


// Función para obtener todos los productos
exports.getAllRepos = async (ctx) => {
    try {
        const products = readJsonFile();
        ctx.body = products;
    } catch (error) {
        console.error('Error al obtener los Repositorios:', error);
        ctx.status = 500;
        ctx.body = { error: 'Error al obtener los productos' };
    }
};

// Función para agregar un nuevo producto
exports.addNewLink = async (ctx) => {
    try {
        const requestData = ctx.request.body;
        const products = readJsonFile();
        const newProduct = {
            id: products.length + 1,
            usuario: requestData.nombre,
            fecha: requestData.fecha,
            link: requestData.link,
            categoria: requestData.categoria,
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
