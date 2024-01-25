import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import { BrowserRouter } from "react-router-dom";
const App = lazy(() => import("./App"));
import { Provider } from "react-redux";
import { store } from "./context/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Suspense fallback="loading...">
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </BrowserRouter>
);
