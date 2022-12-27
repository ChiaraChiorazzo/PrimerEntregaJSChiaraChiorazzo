/* Algoritmo para calcular costo de compra (teniendo en cuenta intereses por cuotas y descuentos por valor de compra)*/

//Variables constantes con el precio del producto 
const costoProdA = 1000;
const costoProdB = 2500;
const costoProdC = 1700;

//Variables de costo total de cada producto. precio por cantidad 
let costoTotalA = 0;
let costoTotalB = 0;
let costoTotalC = 0;

//funcion para calcular el precio (before interest and discounts)
const costoProdBid = (prodA, prodB, prodC) => prodA + prodB + prodC;

//funcion para calcular el valor del costo luego del descuento por cantidad gastada. 

const costoConDesc = (costoNeto) => costoNeto * 0.95;

// funcion para calcular el costo despues del descuento e intereses. (costoBi = costo before interest)
const costoDescInt = (costoBi) => costoBi * 1.15;

// Solicitar al usuario cantidades de cada producto + Alerta para indicar que no se seleccion ningun articulo en caso de que a b y c = 0 
while (costoTotalA == 0 && costoTotalB == 0 && costoTotalC == 0) {
    //Cantidades de cada producto seleccionadas por usuario multiplicado por su costo 
    costoTotalA = Number(prompt("ingrese cantidad de A que desea comprar")) * costoProdA;
    costoTotalB = Number(prompt("ingrese cantidad de B que desea")) * costoProdB;
    costoTotalC = Number(prompt("ingrese cantidad de C que desea")) * costoProdC;
    if (costoTotalA == 0 && costoTotalB == 0 && costoTotal == 0) {
        alert("no seleccionaste ningun artículo");
    }
}

// Costo Total antes de Descuentos e Intereses 
let costoTotalNeto = costoProdBid(costoTotalA, costoTotalB, costoTotalC);
alert("El importe neto de tu compra es de " + costoTotalNeto);


//5% de descuento por compras mayores o iguales a 5000 
// Creamos la variable que guarde el costo despues de aplicar descuentos 
let costoDespDesc;
if (costoTotalNeto >= 5000) {
    //si la compra es mayor a 5000, llamo a la funcion que calcula el valor del costo aplicando el 5% de descuento  
    costoDespDesc = costoConDesc(costoTotalNeto)
    alert("Su compra fue mayor a 5000$ por lo que recibió un descuento del 5%, su nuevo costo es de " + costoDespDesc + " pesos");

} else {
    //si la compra es inferior a 5000, no aplicamos la funcion y el costo se mantiene igual al neto.
    costoDespDesc = costoTotalNeto;
    alert("Su compra fue inferior a $5000 por lo que no recibió descuentos, su costo es de  " + costoDespDesc + " pesos");
}

// Medio de pago. Preguntamos al usuario si paga o no en efvo.
let medioPago = prompt("Paga en Efectivo? Si / No ")

//15% de recargo por pagos en tarjeta 
//creo una variable para que guarde el costo luego de aplicar intereses .
let costoDespDescInt

if (medioPago == "No" || medioPago == "no" || medioPago == "NO") {
    //si se paga con tarjeta, al costo luego de descuentos le aplico la funcion que le calcula intereses 
    costoDespDescInt = costoDescInt(costoDespDesc);
    alert("Los pagos con tarjeta reciben un interés del 15%, su nuevo costo es de  " + costoDespDescInt + " pesos");
} else {
    //si se paga en efectivo, el costo será el mismo que luego de los descuentos. 
    costoDespDescInt = costoDespDesc;
    alert("El importe final de su compra es de " + costoDespDescInt + " pesos");
}

