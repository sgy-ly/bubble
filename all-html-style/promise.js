new Promise(
    function(resolve,reject){
        // reject("err");
        resolve("yes");
    }
).then(value =>{
    console.log("11111");
    value=66;

}).then(value =>{
    console.log("22222");

}).then(value=>{
    console.log(value);
})