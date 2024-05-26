import userActions from '../../actions/user/user'
import sandia from '../../actions/user/registrar'

exports.getAllUsers = (ctx) => {
    ctx.body = userActions.getUsers()
    return ctx
}

exports.createUser = (ctx) => {
    userActions.addUser(ctx.request.body)
    ctx.body = { message: 'User was created' }
    return ctx
}

exports.loginUser = (ctx) => {
    userActions.loginUsuario(ctx.request.body)
    ctx.body = { message: 'login exitoso' }
    return ctx
}

exports.removeUser = (ctx) => {
    userActions.removeUser(ctx.params.rol)
    ctx.body = { message: 'User was removed' }
    return ctx
}

exports.registrarUser = (ctx) => {
    try {
        console.log(ctx.request.body);
        const result = sandia.registrarUser(ctx.request.body);
        ctx.status = result.status || 200;
        ctx.body = result;
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        ctx.status = 500;
        ctx.body = { error: 'Error interno del servidor' };
    }
};