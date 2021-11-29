/*2 str = "origin"
  cambiar las vocales por el numero 1 
  output => 1r1g1n*/

function vocalesRem(string){
    let dato = string.replace(/[aeiou]/g, "1")
    return dato
  }
