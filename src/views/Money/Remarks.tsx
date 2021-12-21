import styled from "styled-components";
import { useRef } from "react";

const Wrapper = styled.section`
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

type Props = {
  remarks: string;
  onChange: (remarks: string) => void;
};

const Remarks: React.FunctionComponent<Props> = (props) => {
  const remarks = props.remarks;
  const inputRef = useRef<HTMLInputElement>(null);
  const onBlurHandle = () => {
    if (inputRef.current !== null) {
      props.onChange(inputRef.current.value);
    }
  };
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input
          type="text"
          placeholder="在这里添加备注"
          defaultValue={remarks}
          onBlur={onBlurHandle}
          ref={inputRef}
        />
      </label>
    </Wrapper>
  );
};

export { Remarks };
