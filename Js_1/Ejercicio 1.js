/* 1 str = "origin"
  eliminar las vocales del string
  output => rgn */
  
function vocalesElim(string){
    let dato = string.replace(/[aeiou]/g, "")
    return dato
  }