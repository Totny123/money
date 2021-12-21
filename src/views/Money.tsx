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
  return (
    <MyLayout>
      <Tags
        tags={selected.tags}
        onChange={(selectedTags) => {
          setSelected({ ...selected, tags: selectedTags });
        }}
      />
      <Remarks
        remarks={selected.remarks}
        onChange={(newRemarks) => {
          setSelected({ ...selected, remarks: newRemarks });
        }}
      />
      <Types
        type={selected.type}
        onChange={(selectedType) => {
          setSelected({ ...selected, type: selectedType });
        }}
      />
      <NumberPanel
        amount={selected.amount}
        onChange={(newAmount) => {
          setSelected({ ...selected, amount: newAmount });
        }}
      />
    </MyLayout>
  );
}

export default Money;
