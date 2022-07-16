
//definir el objeto
class Skins{
    constructor(arma, precio, float, pegatinas, strattrak, estado){
        this.arma = arma;
        this.precio = precio;
        this.float = float;
        this.pegatinas = pegatinas;
        this.strattrak = strattrak;
        this.estado = estado;
        this.vendido = false;
    }
    comision(){
        this.precio = this.precio * 1.75; 
    }
    vender(){
        this.vendido = true;
    }
}


//Objetos a la venta
const arma1 = new Skins ("Ak-47 blue", 321, 0.3212213, false, "No tiene", "Mininal Wear");
const arma2 = new Skins ("AWP Boom", 1320, 0.06515452, "2 Pegatinas", "Si", "Factory New");
const arma3 = new Skins ("Knife Talon", 6098, 0.00810552, "No disponible", "Si", "Factory New");
const arma4 = new Skins ("Number K", 62.1, "No disponible", "No tiene", "No disponible", "No disponible") ;
const arma5 = new Skins ("Souvenir AWP Dragon Lore", 366666, 0.2927967, "4 Pegatinas", "No", "Field Tested");
const arma6 = new Skins ("Knife Buttlefly Crimsom Web", 199999, 0.0633563, "No disponible", "Si", "Factory New");
const arma7 = new Skins ("R8 Fade", 32.55, 0.1453701704, "No", "No", "Minimal Wear");

const armas = [arma1,arma2,arma5,arma7];
const cuchillos = [arma3,arma6];
const skinsPJ = [arma4];