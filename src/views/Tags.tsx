import { Button } from "components/Button";
import { Center } from "components/Center";
import Icon from "components/Icon";
import Layout from "components/Layout";
import { Space } from "components/Space";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTags } from "useTags";

function Tags() {
  const TagsList = styled.ul`
    background: #ffffff;
    > li {
      padding: 0px 10px;
      > a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 44px;
        font-size: 16px;
        border-bottom: 1px solid #bcbbc1;
      }
    }
  `;

  const { tags } = useTags();
  return (
    <Layout>
      <TagsList>
        {tags.map((tag) => (
          <li key={tag.id}>
            <Link to={`/tags/${tag.id}`}>
              <span className="one-line">{tag.name}</span>
              <Icon name="right"></Icon>
            </Link>
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
