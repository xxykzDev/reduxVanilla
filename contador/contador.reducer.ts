import { Action } from "../ngrx-fake/ngrx";

export function contadorReducer(state = 10, action: Action) {
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
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
}
