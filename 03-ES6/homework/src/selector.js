var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl);
  for (let i = 0; i < startEl.children.length; i++) {
    let child = startEl.children[i];
    let result = traverseDomAndCollectElements(matchFunc, child);
    resultSet = [...resultSet, ...result];
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0] === '#') return 'id';
  if(selector[0] === '.') return 'class';
  // if(selector.split('.').length === 2) return 'tag.class';
          // o si no con un 'for'
  for (let i = 0; i < selector.length; i++) {
      if(selector[i] === '.') return 'tag.class';
  }
    return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
   matchFunction = function(el){
    return '#' + el.id === selector;
   }
  } else if (selectorType === "class") {
    matchFunction = function(el){
      if(el.classList.length > 1){
        for(let i = 0; i < el.classList.length; i++){
          if('.' + el.classList[i] === selector){
            return true;
          }
        }
      }
      return '.' + el.classList === selector;
    }
  } else if (selectorType === "tag.class") {
    matchFunction = function(el){
      let array = selector.split('.');
      if(el.tagName.toLowerCase() === array[0]){
        if(el.classList.length > 1){
          for (let i = 0; i < el.classList.length; i++) {
            if(el.classList[i] === array[1]) return true;
          }
        }
        if(el.classList === array[1]) return true;
      }
      return false;
    }
  } else if (selectorType === "tag") {
    matchFunction = function(el){
      return el.tagName.toLowerCase() === selector;
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);// funcion que recibe un elemento y recibe T o F
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

// selectorTypeMatcher('#uno');
// matchFunctionMaker('uno');
// $('uno');
