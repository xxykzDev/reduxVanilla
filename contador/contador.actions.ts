import { Action } from "../ngrx-fake/ngrx";

//los tipos de las acciones tienen que matchear con el case de nuestro reducer
// creamos una constante de tipo Action
export const incrementAction: Action = {
  type: "INCREMENTAR",
};

// ----------------------------EXPORTAMOS CADA ACTION-----------------------------//

// creamos una constante de tipo Action
export const decrementAction: Action = {
  type: "DECREMENTAR",
};

// en nuestra accion agregamos el segundo parametro puede admitir un reducer, el payload
export const multiplicarAction: Action = {
  type: "MULTIPLICAR",
  payload: 2,
};

export const dividirAction: Action = {
  type: "DIVIDIR",
  payload: 2,
};

export const resetAction: Action = {
  type: "RESET",
};
