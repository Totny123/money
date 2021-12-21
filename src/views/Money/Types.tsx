import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
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

const Types: React.FunctionComponent = () => {
  const typesMap = { "-": "支出", "+": "收入" };
  type X = typeof typesMap; //X就是typesMap的类型声明。    {'-':string,'+':string}
  type Y = keyof X; //Y就是类型声明X中的key。    '-'|'y'
  const [typesList] = useState<Y[]>(["-", "+"]);
  const [selected, setSelected] = useState("-");
  return (
    <Wrapper>
      <ul>
        {typesList.map((type) => (
          <li
            key={type}
            className={type === selected ? "selected" : ""}
            onClick={() => {
              setSelected(type);
            }}
          >
            {typesMap[type]}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export { Types };
