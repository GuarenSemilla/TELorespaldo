import userActions from '../../actions/user/user'
import userRegistro from '../../actions/user/registrar'
import userLogin from '../../actions/user/login'
exports.getAllUsers = (ctx) => {
    ctx.body = userActions.getAllUsers()
    return ctx
}

exports.getOneUser = async (ctx) => {
    const correo = ctx.params.correo; // Obtener el parámetro de la URL
    console.log(`Correo: ${correo}`);
    try {
        const user = await userActions.getOneUser(correo);
        if (user) {
            ctx.status = 200;
            ctx.body = user;
        } else {
            ctx.status = 404;
            ctx.body = { error: 'Usuario no encontrado' };
        }
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        ctx.status = 500;
        ctx.body = { error: 'Error interno del servidor' };
    }
};

exports.loginUser = (ctx) => {
    try {
        const result = userLogin.loginUser(ctx.request.body);
        ctx.status = result.status || 200;
        ctx.body = result;
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        ctx.status = 500;
        ctx.body = { error: 'Error interno del servidor' };
    }
};

exports.removeUser = (ctx) => {
    userActions.removeUser(ctx.params.rol)
    ctx.body = { message: 'User was removed' }
    return ctx
}

exports.registrarUser = (ctx) => {
    try {
        const result = userRegistro.registrarUser(ctx.request.body);
        ctx.status = result.status || 200;
        ctx.body = result;
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        ctx.status = 500;
        ctx.body = { error: 'Error interno del servidor' };
    }
};