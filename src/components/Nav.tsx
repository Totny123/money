import styled from "styled-components";
import { Link } from "react-router-dom";
import Icon from "components/Icon";

const NavWrapper = styled.nav`
  line-height: 20px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;
    text-align: center;

    > li {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 33.33%;
      padding: 6px 0;
      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

function Nav() {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name="tag" />
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <Icon name="money" />
          <Link to="/money">记一笔</Link>
        </li>
        <li>
          <Icon name="chart" />
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default Nav;
