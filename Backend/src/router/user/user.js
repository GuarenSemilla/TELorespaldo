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
    console.log(ctx.request.body)
    sandia.registrarUser(ctx.request.body)
    console.log("hola pe")
    return ctx
}
