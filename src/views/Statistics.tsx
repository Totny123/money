import Layout from "components/Layout";
import { useState } from "react";
import styled from "styled-components";
import { Types } from "./Money/Types";
// 导入类型RecordItem
import { useRecords, RecordItem } from "hooks/useRecords";
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

const Header = styled.h3`
  padding: 10px 16px;
  font-size: 18px;
  background: #f5f5f5;
`;

function Statistics() {
  const [type, setType] = useState<"-" | "+">("-");
  const { records } = useRecords();
  const { getName } = useTags();
  const selectedRecords = (records: RecordItem[]) =>
    records.filter((r) => r.type === type);
  //键名key不固定就用该写法定义类型。
  const hash: { [key: string]: RecordItem[] } = {};
  records.forEach((item) => {
    const date = day(item.createdTime).format("YYYY年MM月DD日");
    if (!(date in hash)) {
      hash[date] = [];
    }
    hash[date].push(item);
  });
  // Object.entries()
  const array = Object.entries(hash);
  //字符串比较实际上比的是Unicode编码
  array.sort((a, b) => {
    return a[0] < b[0] ? 1 : -1;
  });
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
      {/* 对item进行解构赋值 */}
      {array.map(([date, records]) => (
        <div key={Math.random()}>
          {selectedRecords(records).length === 0 ? "" : <Header>{date}</Header>}
          {selectedRecords(records).map((r) => (
            <Item key={Math.random()}>
              <div className="tags">
                {r.tagIds.map((tagId, index, arr) => (
                  <span key={Math.random()}>
                    {getName(tagId) + (index === arr.length - 1 ? " " : "，")}
                  </span>
                ))}
              </div>
              <div className="remarks">{r.remarks}</div>
              <div className="amount">￥{r.amount}</div>
            </Item>
          ))}
        </div>
      ))}
    </Layout>
  );
}

export default Statistics;
