import { useParams } from "react-router-dom";
import { useTags } from "useTags";
type Params = { tagId: string };
const EditTag: React.FunctionComponent = () => {
  const { tagId } = useParams<Params>();
  const { findTag } = useTags();
  const tag = findTag(tagId);
  return <div>{tag?.name}</div>;
};

export { EditTag };
