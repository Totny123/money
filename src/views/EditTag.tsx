import { useParams } from "react-router-dom";
import { useTags } from "useTags";
import Layout from "components/Layout";
import Icon from "components/Icon";
import { Button } from "components/Button";
type Params = { tagId: string };
const EditTag: React.FunctionComponent = () => {
  const { tagId } = useParams<Params>();
  const { findTag } = useTags();
  const tag = findTag(tagId);
  return (
    <Layout>
      <header>
        <Icon name="left" />
        <span>编辑标签</span>
      </header>
      <label>
        <span>标签名</span>
        <input type="text" placeholder={tag?.name} />
      </label>
      <Button>删除标签</Button>
    </Layout>
  );
};

export { EditTag };
