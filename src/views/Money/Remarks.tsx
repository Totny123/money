import styled from "styled-components";
import { Input } from "components/Input";

const Wrapper = styled.section`
  padding-left: 16px;
  background: #f5f5f5;
`;
const InputWrapper = styled.div`
  padding: 15px 0;
`;
type Props = {
  remarks: string;
  onChange: (remarks: string) => void;
};

const Remarks: React.FunctionComponent<Props> = (props) => {
  const remarks = props.remarks;
  //声明onChangeHandle函数类型是接受HTMLInputElement的React.ChangeEventHandler函数。
  const onChangeHandle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <InputWrapper>
        <Input
          type="text"
          label="备注"
          placeholder="在这里添加备注"
          value={remarks}
          onChange={onChangeHandle}
        />
      </InputWrapper>
    </Wrapper>
  );
};

export { Remarks };
