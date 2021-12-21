import styled from "styled-components";
import { useState } from "react";
const Wrapper = styled.section`
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

const NumberPanel = () => {
  const [output, setOutput] = useState<string>("0");
  const buttonsClick = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) return;
    if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].indexOf(text) > -1) {
      if (output === "0") {
        setOutput(text);
      } else {
        setOutput((o) => o + text);
      }
    }
    switch (text) {
      case ".":
        if (output.indexOf(".") === -1) {
          setOutput((o) => o + text);
        }
        break;
      case "删除":
        if (output !== "0") {
          if (output.length === 1) {
            setOutput("0");
          } else {
            setOutput((o) => o.slice(0, o.length - 1));
          }
        }
        break;
      case "清空":
        setOutput("0");
        break;
      case "OK":
        console.log("OK");
        break;
    }
  };
  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div className="number-buttons clearfix" onClick={buttonsClick}>
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
    </Wrapper>
  );
};
export { NumberPanel };
