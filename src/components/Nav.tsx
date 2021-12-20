import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Icon from "components/Icon";

const NavWrapper = styled.nav`
  line-height: 20px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    text-align: center;
    > li {
      width: 33.33%;
      > a {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 6px 0;
        .icon {
          width: 24px;
          height: 24px;
        }
        &.selected {
          color: red;
          > .icon {
            fill: red;
          }
        }
      }
    }
  }
`;

function Nav() {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tag" />
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money" />
            记一笔
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="chart" />
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default Nav;
