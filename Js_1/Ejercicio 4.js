/*4 arr = [10, "20", 30, "40", 50]
  verificar cada elemento sea de  tipo number y sino lo es cambiar su  tipo
  a number
  output => [10, 20, 30, 40, 50]*/

  //deberia probar map
  //arr = [10, "20", 30, "40", 50]
  function convertir(array){
     return array.map(function(arr, i){
       if(typeof arr[i] === 'string'){
         return Number(arr[i])
       }
     })
  }