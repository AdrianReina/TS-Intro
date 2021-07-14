import { calcularISV, Producto } from "./06-desectructuración-función";

console.log("Hola Mundo!");

/*
    ===== Código de TypeScript =====
*/

const carritoCompras: Producto[] = [
  {
    desc: "Telefono1",
    precio: 100,
  },
  {
    desc: "Telefono2",
    precio: 100,
  },
];

const [total, isv] = calcularISV(carritoCompras);

console.log("Total: ", total);
console.log("ISV: ", isv);
