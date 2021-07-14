console.log("Hola Mundo!");

/*
    ===== Código de TypeScript =====
*/
class PersonaNormal {
  constructor(public nombre: string, public direccion: string) {}
}

class Heroe extends PersonaNormal {
  /* alterEgo: string;
  edad: number;
  nombreReal: number; */

  constructor(
    public alterEgo: string,
    public edad?: number,
    public nombreReal?: string
  ) {
    super(nombreReal, "New York, USA");
    /* this.alterEgo = alterEgo;
    this.edad = edad;
    this.nombreReal = nombreReal; */
  }

  imprimirNombre() {
    return this.alterEgo + " " + this.nombreReal;
  }
}

const ironman = new Heroe("Ironman", 45, "Tony");

console.log(ironman);
