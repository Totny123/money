import Icon from "components/Icon";
import Layout from "components/Layout";
import styled from "styled-components";
import { useTags } from "useTags";

function Tags() {
  const { tags, setTags } = useTags();
  const TagsList = styled.ul`
    background: #ffffff;
    > li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 0;
      margin: 0 16px;
      font-size: 16px;
      border-bottom: 1px solid #bcbbc1;
    }
  `;
  const Button = styled.button`
    padding: 8px 13px;
    font-size: 18px;
    background: #767676;
    border-radius: 4px;
    border: none;
    color: white;
  `;
  const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const Space = styled.div`
    height: 44px;
  `;
  return (
    <Layout>
      <TagsList>
        {tags.map((tag) => (
          <li key={tag}>
            <span className="one-line">{tag}</span>
            <Icon name="right"></Icon>
          </li>
        ))}
      </TagsList>
      <Center>
        <Space />
        <Button>新建标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;
