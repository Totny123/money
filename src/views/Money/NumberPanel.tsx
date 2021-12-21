import { useState } from "react";
import { Wrapper } from "./NumberPanel/Wrapper";
import { generateOutput } from "./NumberPanel/generateOutput";

const NumberPanel = () => {
  const [output, _setOutput] = useState<string>("0");
  const setOutput = (output: string) => {
    if (output === "") {
      _setOutput("0");
    } else {
      if (output.length >= 16) {
        _setOutput(output.slice(0, 16));
      } else {
        _setOutput(output);
      }
    }
  };
  const buttonsClick = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) return;
    if (text === "OK") {
      console.log("确定");
      return;
    }
    setOutput(generateOutput(text, output));
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
