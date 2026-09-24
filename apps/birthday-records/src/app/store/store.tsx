import { createStore } from "redux";
import filter from "../reducers/filterReducer";

export default () => createStore(filter);

// const store = createStore(filter);

// export default store;
