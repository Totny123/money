import Layout from "components/Layout";
import { useState } from "react";
import styled from "styled-components";
import { Types } from "./Money/Types";
import { useRecords } from "hooks/useRecords";
import { useTags } from "hooks/useTags";
import day from "dayjs";

const TypesWrapper = styled.div`
  background: white;
`;

function Statistics() {
  const [type, setType] = useState<"-" | "+">("-");
  const { records } = useRecords();
  const { getName } = useTags();
  return (
    <Layout>
      <TypesWrapper>
        <Types
          type={type}
          onChange={(newType) => {
            setType(newType);
          }}
        />
      </TypesWrapper>

      {records.map((r) => (
        <div key={r.createdTime}>
          {r.tagIds.map((tagId) => (
            <span>{getName(tagId)}</span>
          ))}
          <hr />
          {r.amount}
          <hr />
          {day(r.createdTime).format("YYYY年MM月DD日")}
        </div>
      ))}
    </Layout>
  );
}

export default Statistics;
