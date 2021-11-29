/* 5 arr = [2, 4, 7, 1, 2, "foo", 7, "bar", "qux", 3, "foo"]
  eliminar los elementos repetidos, nota: (el segundo elemento repetido) 
  output => [2, 4, 7, 1,  "foo", "bar", "qux", 3]*/

//arr = [2, 4, 7, 1, 2, "foo", 7, "bar", "qux", 3, "foo"]
  function repetir(arr){
    let data = arr.filter(function(dato,indice){
      return arr.indexOf(dato) === indice;
    })
    return data
  }