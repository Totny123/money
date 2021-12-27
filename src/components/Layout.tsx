import styled from "styled-components";
import Nav from "components/Nav";
import { useEffect, useRef } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

type Props = {
  className?: string;
  navVisible?: string;
  scrollTop?: number;
};

const Layout: React.FunctionComponent<Props> = (props) => {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      if (!mainRef.current) {
        return;
      }
      mainRef.current.scrollTop = props.scrollTop!;
    }, 0);
  }, [props.scrollTop]);
  return (
    <Wrapper>
      <Main ref={mainRef} className={props.className}>
        {props.children}
      </Main>
      {props.navVisible !== "false" ? <Nav /> : ""}
    </Wrapper>
  );
};

Layout.defaultProps = {
  scrollTop: 0,
};
export default Layout;
