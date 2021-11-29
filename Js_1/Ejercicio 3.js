/*3 una función acepta un parámetro, con los valores desde 1 hasta 5
  si valor numérico ingresado es 1 mostrar una lista 
  del 1 al 10, si es 2 al 10, teniendo en cuenta el limite es 10 
  posibles salidas esperadas:
  output => 1...10
  output => 2...10
  output => 3...10
  output => 4...10
  output => 5...10*/

function contar(num){
    let conteo = [];
    if(num < 1 || num > 5) return "num invalido";
    for(i = num; i <= 10; i++){
      conteo.push(i);
    }
    return conteo.map(function(el){
      return console.log(el)
     })
  }