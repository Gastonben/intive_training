/* 6 arr = [1,3,4,2,6,7,9,1, 8]
 indicar el total de elementos impares
 output => 5 */

 //arr = [1,3,4,2,6,7,9,1,8]
  function elementoImpar(array){
    let cont = 0;
    for(i = 0; i <= array.length; i++){
        if(array[i] % 2 === 1){
          cont++
        }
    }
    return cont
  }