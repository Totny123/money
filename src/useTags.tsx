import { useState } from "react";
import { createId } from "lib/createId";

const defaultTags = [
  { id: createId(), name: "衣" },
  { id: createId(), name: "食" },
  { id: createId(), name: "住" },
  { id: createId(), name: "行" },
];

const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
  console.log(tags)
  const findTag = (tagId: string) => {
    return tags.find((tag) => tag.id === parseInt(tagId));
  };
  const findIndex = (id: number) => {
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        return i;
      }
    }
    return -1;
  };
  const updateTag = (id: number, name: string) => {
    const index = findIndex(id);
    const newTags = JSON.parse(JSON.stringify(tags));
    newTags.splice(index, 1, { id, name });
    setTags(newTags);
  };
  return { tags, setTags, findTag, findIndex, updateTag };
};
export { useTags };
