let contador: number = 1;
let clave: string;

while (contador <= 3 && clave !== "eureka") {
   contador = contador + 1;
   clave = prompt("Ingrese la clave");
   }
   if (clave == "eureka") {
      console.log("clave correcta");
   } else {
     console.log("agoto la cantidad de intentos");
   }