// actions, es una interface
// tiene 2 parametros, el type es necessario y el payload es opcional,
// payload=> parametros que se pueden enviar a la accion

interface Action {
  type: string;
  payload?: any;
}

// el reducer recibe 2 parametros
// oldState
// action
// los reducers siempre deben retornar un estado
function reducer(state = 10, action: Action) {
  // evaluamos el tyoe de la action recibda
  // por lo general evaluamos mediante la estructura de control switch
  // los reducers deben ser funciones puras, es decir que no contengan acciones externas
  switch (action.type) {
    case "INCREMENTAR":
      return (state += 1);
    case "DECREMENTAR":
      return (state -= 1);
    case "MULTIPLICAR":
      // hacecmos uso del payload que posee la action "MULTIPLICAR"
      return state * action.payload;
    case "DIVIDIR":
      // hacecmos uso del payload que posee la action "DIVIDIR"
      return state / action.payload;
    default:
      return state;
  }
}

//los tipos de las acciones tienen que matchear con el case de nuestro reducer
// creamos una constante de tipo Action
const incrementAction: Action = {
  type: "INCREMENTAR",
};

// creamos una constante de tipo Action
const decrementAction: Action = {
  type: "DECREMENTAR",
};

// en nuestra accion agregamos el segundo parametro puede admitir un reducer, el payload
const multiplicarAction: Action = {
  type: "MULTIPLICAR",
  payload: 2,
};

const dividirAction: Action = {
  type: "DIVIDIR",
  payload: 2,
};

// imprimimos el llamado al reducer
console.log(reducer(10, incrementAction));
console.log(reducer(10, decrementAction));
console.log(reducer(10, multiplicarAction));
console.log(reducer(100, dividirAction));
