import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Movie from "./components/Movie";
import Login from "./components/Login";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Movie} />
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
