let globalVar = " глобальная п "; 
  console.log(globalVar);
function blockScopes() {

  var functionVar = " только в этой функции ";
  console.log(functionVar);
  {
    let blockVar = " только в этом блоке ";
    console.log(blockVar);
  }
}
blockScopes();
