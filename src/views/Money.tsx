import Layout from "components/Layout";
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
const NumberPanel = styled.section`
  display: flex;
  flex-direction: column;
  .output {
    padding: 15px 10px;
    text-align: right;
    font-size: 36px;
    background: #ffffff;
    box-shadow: inset 0 -5px 3px -5px rgba(0, 0, 0, 0.25),
      inset 0 5px 3px -5px rgba(0, 0, 0, 0.25);
  }
  .number-buttons {
    &.clearfix::after {
      content: "";
      display: block;
      clear: both;
      height: 0;
      visibility: hidden;
    }
    > button {
      float: left;
      width: 25%;
      height: 64px;
      border: none;
      font-size: 18px;
      &.ok {
        float: right;
        height: 128px;
        background: #8b8b8b;
      }
      &.zero {
        width: 50%;
      }
      &:nth-child(1) {
        background: #f2f2f2;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: #e0e0e0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: #d3d3d3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: #c1c1c1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: #b8b8b8;
      }
      &:nth-child(14) {
        background: #9a9a9a;
      }
    }
  }
`;

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;

function Money() {
  return (
    <MyLayout>
      <Tags>
        <ul>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <button>新增标签</button>
      </Tags>
      <Remarks>
        <label>
          <span>备注</span>
          <input placeholder="在这里添加备注" />
        </label>
      </Remarks>
      <Types>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </Types>
      <NumberPanel>
        <div className="output">100</div>
        <div className="number-buttons clearfix">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button>.</button>
        </div>
      </NumberPanel>
    </MyLayout>
  );
}

export default Money;
