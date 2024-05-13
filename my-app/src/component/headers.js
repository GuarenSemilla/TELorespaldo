/*Existen 2 formas de crear componentes, una es usando clases , heredaba de react component con consturctores
ahora se utiliza de que cada componente sea una función y se utilizan hooks para modificar esos componentes*/

function header (props){
   return(
        <div>
            <header>
                <nav>
                    <h1>{props.course}-{props.detail}</h1>
                </nav>
            </header>
        </div>
   ) 
}

export default header

/* Ahora viene el uso de bootstrap como libreria para diseño de react que vienen previamente definidas material ui react*/