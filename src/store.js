import { createStore } from "redux";
import { loadState, saveState } from "./localStorage";
import { resumeReducer } from "./reducer/resumeReducer";

const persistedState = loadState();
const store = createStore(
  resumeReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//After every action this saveState will be called for sure in any circumstances
store.subscribe(() => {
  saveState(store.getState());
});
export default store; // console.log(store.getState());