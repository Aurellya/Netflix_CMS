import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./stores";
import router from "./routers";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
