const k = 3
const machine = new kNear(k)
let vector = [];

var button1 = document.getElementById("checkVector");
button1.addEventListener("click",function(e) {
    updateVector();
    // predicting
    console.log(vector)
    let prediction = machine.classify(vector)
    console.log(machine.training);
    console.log(`I think it's a ${prediction}`)
}, false);

var button2 = document.getElementById("saveVector");
button2.addEventListener("click",function(e){
    updateVector();
    let label = document.getElementById("vectorLabel").value;
    if (label) {
        machine.learn(vector, label);
        console.log('learned current state as ', label);
    }
},false);

function updateVector () {
    vector = document.getElementById("array").textContent.split(',');
    vector = vector.map((vecItem) => parseInt(vecItem));
    vector = vector.filter((vecItem) => !isNaN(vecItem))
}
