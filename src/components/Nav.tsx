import styled from "styled-components";
import { Link } from "react-router-dom";
require("icons/tag.svg");
require("icons/money.svg");
require("icons/chart.svg");
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
          <svg className="icon">
            <use xlinkHref="#tag"></use>
          </svg>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#money"></use>
          </svg>
          <Link to="/money">记一笔</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#chart"></use>
          </svg>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default Nav;
