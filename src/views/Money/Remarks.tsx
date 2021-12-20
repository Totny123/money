import styled from "styled-components";

const Remarks = styled.section`
  padding-left: 16px;
  background: #f5f5f5;
  > label {
    display: flex;
    align-items: center;
    > span {
      font-size: 14px;
      white-space: nowrap;
    }
    > input {
      margin-left: 16px;
      padding: 0 2px;
      width: 100%;
      height: 73px;
      border: none;
      background: none;
    }
  }
`;

export { Remarks };
