import styled from "styled-components";

const Types = styled.section`
  > ul {
    display: flex;
    background: #c4c4c4;
    > li {
      position: relative;
      width: 50%;
      padding: 18px 0;
      text-align: center;
      font-size: 24px;
      &.selected {
        &::after {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          bottom: 0;
          background: #333333;
          height: 4px;
          width: 100%;
        }
      }
    }
  }
`;

export { Types };
