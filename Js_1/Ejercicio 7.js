/* 7 str = "hola mundo desde javascript"
  pasar un string en array, indicar los espacios en blanco por "-" 
  output => ["hola", "mundo", "-", "desde", "-", "javascript"] */

//str = "hola mundo desde javascript";
  function convertirArray(string){
    let array =  string.split(" ").join(' - ');
    return array.split(" ");
  }
