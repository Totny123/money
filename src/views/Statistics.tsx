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

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 16px;
  font-size: 18px;
  background: white;
  > .remarks {
    margin-right: auto;
    margin-left: 15px;
    color: #999999;
  }
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

      {records
        .filter((re) => re.type === type)
        .map((r) => (
          <Item key={r.createdTime}>
            <div className="tags">
              {r.tagIds.map((tagId) => (
                <span>{getName(tagId)}</span>
              ))}
            </div>
            <div className="remarks">{r.remarks}</div>
            <div className="amount">￥{r.amount}</div>
            {/* {day(r.createdTime).format("YYYY年MM月DD日")} */}
          </Item>
        ))}
    </Layout>
  );
}

export default Statistics;
