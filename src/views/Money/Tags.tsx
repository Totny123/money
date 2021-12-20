import styled from "styled-components";

const Tags = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  flex-grow: 1;
  padding-top: 16px;
  padding-left: 16px;
  background: #ffffff;
  > ul {
    > li {
      display: inline-block;
      padding: 3px 17px;
      margin-right: 24px;
      background: #d9d9d9;
      border-radius: 18px;
      font-size: 14px;
    }
  }
  > button {
    margin: 12px 0;
    padding: 2px 4px;
    background: none;
    border: none;
    color: #999999;
    border-bottom: 1px solid #666666;
  }
`;
export { Tags };
