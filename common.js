var getName1 = function(){
	console.log('calling common.js function from main.js');
}
 
fetch('http://localhost/testscript/main.js').then(v => {
  v.text().then(txt => {
    eval(txt)
    getName() // calling function from main.js
  })
})