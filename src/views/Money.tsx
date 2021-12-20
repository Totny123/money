import Layout from "components/Layout";
import styled from "styled-components";

const Tags = styled.section`
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
    margin-top:12px;
    padding:2px 4px;
    background: none;
    border: none;
    color: #999999;
    border-bottom: 1px solid #666666;
  }
`;
const Remarks = styled.section``;
const Types = styled.section``;
const NumberPanel = styled.section``;

function Money() {
  return (
    <Layout>
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
          备注：
          <input placeholder="在这里添加备注" />
        </label>
      </Remarks>
      <Types>
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </Types>
      <NumberPanel>
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
        <button>OK</button>
        <button>0</button>
        <button>.</button>
      </NumberPanel>
    </Layout>
  );
}

export default Money;
