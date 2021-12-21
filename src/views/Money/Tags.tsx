import styled from "styled-components";
import { useState } from "react";
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  flex-grow: 1;
  padding-top: 16px;
  padding-left: 16px;
  background: #ffffff;
  > ul {
    > li {
      display: inline-block;
      padding: 3px 17px;
      margin-right: 12px;
      margin-bottom: 10px;
      background: #d9d9d9;
      border-radius: 18px;
      font-size: 14px;
      &.selected {
        background: red;
      }
    }
  }
  > button {
    margin: 0 0 12px;
    padding: 2px 4px;
    background: none;
    border: none;
    color: #999999;
    border-bottom: 1px solid #666666;
  }
`;
type Props = {
  tags: string[];
  onChange: (tags: string[]) => void;
};
const Tags: React.FunctionComponent<Props> = (props) => {
  const [tags, setTags] = useState<string[]>(["衣", "食", "住", "行"]);
  const selectedTags = props.tags;

  const onAddTag = () => {
    const tagName = window.prompt("请输入要添加的标签！");
    if (tagName !== null && tagName !== "") {
      if (tags.indexOf(tagName) > -1) {
        window.alert("已存在该标签");
      } else {
        setTags((t) => {
          return [...t, tagName];
        });
      }
    }
  };
  const onToggleSelect = (tag: string) => {
    const isSelected = selectedTags.indexOf(tag) > -1;
    if (isSelected) {
      const notSelectedArr = selectedTags.filter((item) => item !== tag);
      props.onChange(notSelectedArr);
    } else {
      props.onChange([...selectedTags, tag]);
    }
  };
  const getClass = (tag: string) =>
    selectedTags.indexOf(tag) > -1 ? "selected" : "";
  return (
    <Wrapper>
      <ul>
        {tags.map((tag) => (
          <li
            key={tag}
            onClick={() => {
              onToggleSelect(tag);
            }}
            className={getClass(tag)}
          >
            {tag}
          </li>
        ))}
      </ul>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export { Tags };
