import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Layout from "components/Layout";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/money" />
        <Route path="/tags">
          <Tags />
        </Route>
        <Route path="/money">
          <Money />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

function Tags() {
  return (
    <Layout>
      <h2>标签</h2>
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      <h2>记一笔</h2>
    </Layout>
  );
}

function Statistics() {
  return (
    <Layout>
      <h2>统计</h2>
    </Layout>
  );
}

function NoMatch() {
  return (
    <Layout navVisible="false">
      <h2>404</h2>
    </Layout>
  );
}

export default App;
