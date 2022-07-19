let contrasenaG = 'entrar';
let continuar = false;

for (i=0; i>=0; i--){
    let usuarioPass = prompt('Ingresa la contrasena del instituto para acceder, te quedan '+ (i+1) + ' intentos.')
    if(contrasenaG === usuarioPass){
        alert("Ingresaste al sistema");
        continuar = true;
        break;
    }else {
        alert("Te equivocaste muchas veces, te quedan "+ i +" intentos.")
        continuar = false;
    }
} 

if(continuar){
    class skins {
        constructor(arma, precio, estado) {
          this.arma = arma;
          this.precio = parseFloat(precio);
          this.estado = estado;
        }
        comision() {
          this.precio = this.precio * 1.75;
        }
      }
      
      const stockSkins = [];
      stockSkins.push(new skins("Ak 47 Blue", 1238 , "Casi Nuevo"));
      stockSkins.push(new skins("AWP Dragon Lore", 30000 , "Recien fabricado"));
      stockSkins.push(new skins("Karambit Stained", 2458 , "Bastante degastado"));
      stockSkins.push(new skins("Number K", 1700))
      console.log(stockSkins); //muestra en consola el arrays
      
      let tienda = prompt('Ingrese:\nComprar: si estas interesado en algo, o quieras comprar.\nVender: Para vender')
      while(tienda != 'ESC' || tienda != 'esc'){
        switch(tienda){
            case "Comprar":
                alert('Ingresaste en la zona de compra');
                break
            case "Vender": 
                alert('Ingresaste en la zona de Venta.');
                break
        }
        tienda = prompt('Ingrese:\nComprar: si estas interesado en algo, o quieras comprar.\nVender: Para vender')
      }

}else{
    alert('La cuenta se bloqueo, por muchos intentos.')
}





