import styled from "styled-components";
import { useTags } from "useTags";
import { createId } from "lib/createId";
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
  tagIds: number[];
  onChange: (tags: number[]) => void;
};
const Tags: React.FunctionComponent<Props> = (props: Props) => {
  const { tags, setTags } = useTags();
  const selectedTagIds = props.tagIds;
  const onAddTag = () => {
    const tagName = window.prompt("请输入要添加的标签！");
    if (tagName !== null && tagName !== "") {
      setTags([...tags, { id: createId(), name: tagName }]);
    }
  };
  const onToggleSelect = (tagId: number) => {
    const isSelected = selectedTagIds.indexOf(tagId) > -1;
    if (isSelected) {
      const notSelectedArr = selectedTagIds.filter((item) => item !== tagId);
      props.onChange(notSelectedArr);
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  const getClass = (tagId: number) =>
    selectedTagIds.indexOf(tagId) > -1 ? "selected" : "";
  return (
    <Wrapper>
      <ul>
        {tags.map((tag) => (
          <li
            key={tag.id}
            onClick={() => {
              onToggleSelect(tag.id);
            }}
            className={getClass(tag.id)}
          >
            {tag.name}
          </li>
        ))}
      </ul>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export { Tags };
