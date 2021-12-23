import { Wrapper } from "./NumberPanel/Wrapper";
import { generateOutput } from "./NumberPanel/generateOutput";

type Props = {
  amount: number;
  onChange: (amount: number) => void;
  onOk: () => void;
};

const NumberPanel: React.FunctionComponent<Props> = (props) => {
  const output = props.amount.toString();
  const setOutput = (output: string) => {
    let value;
    if (output === "") {
      value = 0;
    } else {
      if (output.length >= 16) {
        value = parseFloat(output.slice(0, 16));
      } else {
        value = parseFloat(output);
      }
    }
    props.onChange(value);
  };
  const buttonsClick = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) return;
    if (text === "OK") {
      props.onOk();
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
