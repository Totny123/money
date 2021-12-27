import { useEffect, useState } from "react";
import { useUpdate } from "./useUpdate";

export type RecordItem = {
  tagIds: number[];
  remarks: string;
  type: "+" | "-";
  amount: number;
  createdTime: string;
};

type newRecordItem = Omit<RecordItem, "createdTime">;

const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  //第一次加载从localStorage获取records
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem("records") || "[]"));
  }, []);
  //当records发生变化时将records存进localStorage
  useUpdate(() => {
    window.localStorage.setItem("records", JSON.stringify(records));
  }, [records]);
  const addRecord = (newRecord: newRecordItem): boolean => {
    if (newRecord.amount === 0) {
      alert("请输入金额！");
      return false;
    }
    if (newRecord.tagIds.length === 0) {
      alert("请选择标签！");
      return false;
    }
    setRecords([
      ...records,
      { ...newRecord, createdTime: new Date().toISOString() },
    ]);
    return true;
  };
  return { records, addRecord };
};

export { useRecords };
