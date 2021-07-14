console.log("Hola Mundo!");

/*
    ===== Código de TypeScript =====
*/
function ClassDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@ClassDecorator
class MiSuperClase {
  public miPropiedad: string = "ABC123";

  imprimir() {
    console.log("Hola Mundo");
  }
}

console.log(MiSuperClase);

const miclase = new MiSuperClase();

console.log(miclase.miPropiedad);
