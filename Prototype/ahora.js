var log = console.log;

var A = {
    propA:"propA",
};

var B = {
    propB:"propB"
}

log(B.propB)
log(B.propA)
log("-".repeat(10))

B.propA = "b propA"
B.__proto__.propA = "new propA"

log(B.propA)
log(B.propA)
log("-".repeat(10))

log(B)
log(B.__proto__.__proto__)

/////////////////////////////////////

function A(){
    this.propA = "propA"
}

A.prototype.subPropA = "subPropA"

var a = new A()

log(Function.prototype)
log("A: ",A)
log("A prototype: ",A.prototype)
log(a)
log(a.__proto__)

