import {
  incrementAction,
  multiplicarAction,
} from "./contador/contador.actions";
import { contadorReducer } from "./contador/contador.reducer";
import { Action, Reducer } from "./ngrx-fake/ngrx";

// los stores son clases
class Store<T> {
  // siempre el state sera del mismo tipo que el Store
  // private state: T;

  //   el constructor necesita el reducer y el state
  constructor(private reducer: Reducer<T>, private state: T) {}

  getState() {
    return this.state;
  }

  dispatch(action: Action) {
    this.state = this.reducer(this.state, action);
  }
}

const store = new Store(contadorReducer, 10);

console.log(store.getState());
store.dispatch(incrementAction);
console.log(store.getState());
store.dispatch(multiplicarAction);
console.log(store.getState());
