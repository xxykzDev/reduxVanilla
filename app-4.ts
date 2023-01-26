import { Store, createStore } from "redux";
import { contadorReducer } from "./contador/contador.reducer";
import { decrementAction, incrementAction } from "./contador/contador.actions";

// no ejecutamos la fx sino que enviamos la definicion
const store: Store = createStore(contadorReducer);

// nos suscribimos al store, de esta forma seremos notficados cuando el state se modifique en el store
store.subscribe(() => {
  console.log("subs:", store.getState());
});

store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(decrementAction);
store.dispatch(incrementAction);
