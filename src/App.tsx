import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import styled from "styled-components";
import Nav from "components/Nav";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const FlexSwitch = styled.div`
  flex-grow: 1;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <FlexSwitch>
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
        </FlexSwitch>
        <Nav />
      </Wrapper>
    </Router>
  );
}

function Tags() {
  return <h2>标签</h2>;
}

function Money() {
  return <h2>记一笔</h2>;
}

function Statistics() {
  return <h2>统计</h2>;
}

function NoMatch() {
  return <div>404</div>;
}

export default App;
