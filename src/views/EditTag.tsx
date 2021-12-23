import { useParams } from "react-router-dom";
import { useTags } from "useTags";
import Layout from "components/Layout";
import Icon from "components/Icon";
import { Button } from "components/Button";
import styled from "styled-components";
import { Input } from "components/Input";
import { Center } from "components/Center";
import { Space } from "components/Space";
type Params = { tagId: string };

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  font-size: 16px;
  background: white;
`;

const InputWrapper = styled.div`
  margin-top: 8px;
  padding: 0 0 0 15px;
  background: white;
`;

const EditTag: React.FunctionComponent = () => {
  const { tagId } = useParams<Params>();
  const { findTag, updateTag, deleteTag } = useTags();
  const tag = findTag(tagId);
  const onChangeHandle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (tag) {
      updateTag(tag.id, e.target.value);
    }
  };
  const onClickHandle = () => {
    if (tag) {
      deleteTag(tag.id);
    }
  };
  const tagContent = (tag: { id: number; name: string }) => (
    <InputWrapper>
      <Input
        type="text"
        label="标签名"
        value={tag.name}
        onChange={onChangeHandle}
      />
    </InputWrapper>
  );
  return (
    <Layout>
      <Header>
        <Icon name="left" />
        <span>编辑标签</span>
        <Icon />
      </Header>
      {tag ? tagContent(tag) : <div>没有该标签。</div>}
      <Center>
        <Space />
        <Button onClick={onClickHandle}>删除标签</Button>
      </Center>
    </Layout>
  );
};

export { EditTag };
