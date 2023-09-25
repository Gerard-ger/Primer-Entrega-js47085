let prestamo = 0;


let monto = parseInt(prompt("Ingrese el monto a solicitar"));
let cuotas = parseInt(prompt("Ingrese cantidad de cuotas"));
  
while (monto<=0 || cuotas <1) {
    monto = parseInt(prompt("Ingrese el monto valido"));
    cuotas = parseInt(prompt("Ingrese cantidad de cuotas validas"));
}


function Calcular_prestamo( monto, cuotas){

     switch (cuotas) {
        case 1:
            return monto
            break;
        case 3:
            prestamo = monto + (monto * 0.2);
            return prestamo
            break;
        case 6:
            prestamo = monto + (monto * 0.4);
            return prestamo
            break;
        case 12:
            prestamo = monto + (monto * 0.8);
            return prestamo
            break;

        default:

            break;
     }
}

function ValorCuotas(cuotas, valorTotal){
    return valorTotal/cuotas
}

let totalAPagar = Calcular_prestamo(monto,cuotas)
let cuotasDe = ValorCuotas(cuotas,totalAPagar)

alert("tiene que pagar un total de: " + totalAPagar )
alert("en " + cuotas + " cuotas de " + cuotasDe)