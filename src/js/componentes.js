import '../css/components.css';
import webpackLogo from '../assets/img/webpack-logo.png';

export const saludar = (name) =>{
    console.log(`Creando etiqueda h1`);

    const h1 = document.createElement('h1');
    h1.innerHTML = `Hola ${name}`;

    document.body.append(h1);

    const logo = document.createElement('img');
    logo.src = webpackLogo; 
    document.body.append(logo);
}


 module.export = {
    saludar
}