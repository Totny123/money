import Layout from "components/Layout";
import { useState } from "react";
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
  const [selected, setSelected] = useState({
    tags: [] as string[],
    remarks: "",
    type: "-" as "-" | "+",
    amount: 0,
  });
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({ ...selected, ...obj });
  };

  return (
    <MyLayout>
      <Tags
        tags={selected.tags}
        onChange={(tags) => {
          onChange({ tags });
        }}
      />
      <Remarks
        remarks={selected.remarks}
        onChange={(remarks) => {
          onChange({ remarks });
        }}
      />
      <Types
        type={selected.type}
        onChange={(type) => {
          onChange({ type });
        }}
      />
      <NumberPanel
        amount={selected.amount}
        onChange={(amount) => {
          onChange({ amount });
        }}
      />
    </MyLayout>
  );
}

export default Money;
