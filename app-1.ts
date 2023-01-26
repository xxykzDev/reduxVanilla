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
