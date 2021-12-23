import { useEffect, useRef } from "react";

const useUpdate = (fn: () => void, deps: any[]) => {
  //使用useRef记录render次数
  const count = useRef(0);
  useEffect(() => {
    count.current++;
  });
  //render次数大于一时才执行回调.跳过了undefined->[]的执行。
  useEffect(() => {
    if (count.current > 1) {
      fn();
    }
  }, deps);
};

export { useUpdate };
