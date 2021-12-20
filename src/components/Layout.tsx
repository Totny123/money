import styled from "styled-components";
import Nav from "components/Nav";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.div`
  flex-grow: 1;
`;

function Layout(props: any) {
  return (
    <Wrapper>
      <Main>{props.children}</Main>
      {props.navVisible !== "false" ? <Nav /> : ""}
    </Wrapper>
  );
}
export default Layout;
