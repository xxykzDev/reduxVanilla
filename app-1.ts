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
  // evaluamos el action que nos pasan por parametro
  if (action.type === "INCREMENTAR") {
    return (state += 1);
  }
  return state;
}

// creamos una constante de tipo Action
const incrementAction: Action = {
  type: "INCREMENTAR",
};

// imprimimos el llamado al reducer
console.log(reducer(10, incrementAction));
