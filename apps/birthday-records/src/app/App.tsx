import React, { Component } from "react";
import Filter from "./components/Filter";
import RecordTable from "./components/RecordTable";
import { Provider } from "react-redux";
import createStore from "./store/store";

const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container-fluid">
          <center>
            <h1>Birthday Records</h1>
          </center>
          <Filter />
          <RecordTable />
        </div>
      </Provider>
    );
  }
}

export default App;
