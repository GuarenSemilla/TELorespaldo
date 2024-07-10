import linkActions from '../../actions/link/link'

exports.getAllLinks = async (ctx) => {
    ctx.body = await linkActions.getAllLinks()
    return ctx
}

exports.getAllRamos = async (ctx) => {
    ctx.body = await linkActions.getAllRamos()
    return ctx
}

exports.getDataBySigla = async (ctx) => {
    const sigla = ctx.params.sigla; // Obtener el parámetro de la URL
    console.log(ctx.params.sigla);
    try {
        const body = await linkActions.getDataBySigla(sigla)
        if (body) {
            ctx.status = 200;
            ctx.body = body;
        } else {
            ctx.status = 404;
            ctx.body = { error: 'Sigla no encontrada' };
        }
    }catch (error) {
            console.error('Error al procesar la solicitud:', error);
            ctx.status = 500;
            ctx.body = { error: 'Error interno del servidor' };
        }  
    return ctx
};

exports.getOneLink = async (ctx) => {
    const id = ctx.params.ID; // Obtener el parámetro de la URL
    console.log(ctx.params.ID);
    try {
        const user = await linkActions.getOneLink(id);
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


