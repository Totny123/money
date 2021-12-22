import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { EditTag } from "views/EditTag";
import Money from "views/Money";
import NoMatch from "views/NoMatch";
import Statistics from "views/Statistics";
import Tags from "views/Tags";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/money" />
        <Route exact path="/tags">
          <Tags />
        </Route>
        <Route exact path="/tags/:tagId">
          <EditTag />
        </Route>
        <Route exact path="/money">
          <Money />
        </Route>
        <Route exact path="/statistics">
          <Statistics />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
