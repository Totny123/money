import Layout from "components/Layout";
import styled from "styled-components";
import { NumberPanel } from "./Money/NumberPanel";
import { Remarks } from "./Money/Remarks";
import { Tags } from "./Money/Tags";
import { Types } from "./Money/Types";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

function Money() {
  return (
    <MyLayout>
      <Tags />
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
