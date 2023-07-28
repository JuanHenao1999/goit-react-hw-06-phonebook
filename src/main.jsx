import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./redux/store";
import { CssBaseline } from "@mui/material";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <CssBaseline />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
