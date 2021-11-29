/*_1  cadena = "javascript"; dada la anterior cadena colocar la primera letra en mayúscula
      output => Javascript*/

      function upperFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
//<--------------------------------  -----------------------------------------------> 
/*_2 cadena = "javascript";  dada la anterior cadena colocar la ultima letra en mayúscula
    output => javascripT*/

    function upperLast(string) {
        return string.substring(0, string.length - 1) + string.charAt(string.length - 1).toUpperCase();
      }

//<--------------------------------  -----------------------------------------------> 

/*_3 cadena = "bar"; --- mirar length ---
    dada la anterior cadena colocar la letra del medio en mayúscula si es impar
    si es par no aplica
    true  - output => bAr  
    false  - output => bar*/

    function upperMiddle(string){
      let mid = Math.ceil(string.length / 2);
     let vaser = string.length % 2 === 0 ? false : true;
     if(vaser){
         return (string.slice(0, mid - 1) + string[mid - 1].toUpperCase() + string.slice(mid));
        }
    return string;
    }

//<--------------------------------  -----------------------------------------------> 

// _4 arr = ["foo", "bar", "baz", "qux", "origin"]
//      buscar en ele array el elemento baz y mostrarlo console
//      output =>  baz     

    function findBaz(arr){
      let match =  arr.find(function(element){ 
          return element === "baz";
      })
      
      return match;
    }
      

// _5 arr = ["foo", "bar", "baz", "qux", "origin"] 
//      vaciar el arr 
//      output => [ ]
let arr = ["foo", "bar", "baz", "qux", "origin"];

    function emptyArray(arr) {
      arr = [];
      return arr.length;
    }

     


        

module.exports = {
  arr,
  upperFirst,
  upperLast,
  upperMiddle,
  findBaz,
  emptyArray
}