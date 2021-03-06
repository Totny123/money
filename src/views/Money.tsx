import Layout from "components/Layout";
import { useState } from "react";
import styled from "styled-components";
import { NumberPanel } from "./Money/NumberPanel";
import { Remarks } from "./Money/Remarks";
import { Tags } from "./Money/Tags";
import { Types } from "./Money/Types";
import { useRecords } from "hooks/useRecords";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

const defaultSelected = {
  tagIds: [] as number[],
  remarks: "",
  type: "-" as "-" | "+",
  amount: 0,
};

const TypesWrapper = styled.div`
  background: #c4c4c4;
`;

function Money() {
  const { addRecord } = useRecords();
  const [selected, setSelected] = useState(defaultSelected);
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({ ...selected, ...obj });
  };
  const onOkHandler = () => {
    if (addRecord(selected)) {
      alert("添加成功！");
      setSelected(defaultSelected);
    }
  };

  return (
    <MyLayout scrollTop={9999}>
      <Tags
        tagIds={selected.tagIds}
        onChange={(tagIds) => {
          onChange({ tagIds });
        }}
      />
      <Remarks
        remarks={selected.remarks}
        onChange={(remarks) => {
          onChange({ remarks });
        }}
      />
      <TypesWrapper>
        <Types
          type={selected.type}
          onChange={(type) => {
            onChange({ type });
          }}
        />
      </TypesWrapper>

      <NumberPanel
        amount={selected.amount}
        onChange={(amount) => {
          onChange({ amount });
        }}
        onOk={onOkHandler}
      />
    </MyLayout>
  );
}

export default Money;
