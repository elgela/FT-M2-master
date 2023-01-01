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
  const firstChar = selector[0]
  if(firstChar === '#') return 'id';
  if(firstChar === '.') return 'class';
  if(selector.includes('.')) return 'tag.class';
          // o si no con un 'for'
  // for (let i = 0; i < selector.length; i++) {
  //     if(selector[i] === '.') return 'tag.class';
  // }
  if(selector.includes('>')) return 'child combinator';
  if(!selector.includes('>') && selector.includes(' ')) return 'descendant combinator'
    return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

const matchFunctionMaker = function(selector) {
  const selectorType = selectorTypeMatcher(selector);

  let matchFunction;
  if (selectorType === 'id') {
    matchFunction = function (element) {
      return element.id === selector.slice(1);
    };
  } else if (selectorType === 'class') {
    matchFunction = function (element) {
      const classes = element.className.split(' ');
      return classes.includes(selector.slice(1));
    };
  } else if (selectorType === 'tag.class') {
    matchFunction = function (element) {

      [tag, theClass] = selector.split('.'); // ahora tenemos una variable llamada 'tag' y ninguna llamada 'theClass'

      const classes = element.className.split(' ');
      return classes.includes(theClass) &&
             element.tagName.toLowerCase() === tag.toLowerCase();
    };
  } else if (selectorType === 'tag') {
    matchFunction = function (el) {
      return el.tagName && (el.tagName.toLowerCase() === selector.toLowerCase());
    };
  } else if (selectorType === "child combinator") {
    // for Selector Hierarchy extra credit
    const selectorArr = selector.split(' > ');
    const [parentSelector, childSelector] = selectorArr;

    matchFunction = function (element) {
      return matchFunctionMaker(parentSelector)(element.parentElement) && matchFunctionMaker(childSelector)(element)
    };
  } else if (selectorType === "descendant combinator") {
    // also for Selector Hierarchy extra credit
    const selectorArr = selector.split(' ');
    const [ancestorSelector, elementSelector] = selectorArr;

    matchFunction = function (element) {
      let ancestorBool;

      function walkUpTheDOM(el) {
        el = el.parentElement;
        while (el) {
          if (el.nodeName == "#text") el = el.nextSibling;
          if (matchFunctionMaker(ancestorSelector)(el)) {
            ancestorBool = true;
            break;
          }

          walkUpTheDOM(el);
          el = el.nextSibling;
        }
      }

      walkUpTheDOM(element);

      return ancestorBool && matchFunctionMaker(elementSelector)(element);
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

// var extraCredit = function(selector) {
//   if(selector === '>' || selector === ' '){
    
//   } return elements;
 
// }
