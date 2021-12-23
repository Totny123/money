import { useState, useEffect, useRef } from "react";
import { createId } from "lib/createId";
import { useUpdate } from "hooks/useUpdate";

const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
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
    setTags(tags.map((tag) => (tag.id === id ? { id, name } : tag)));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };
  const addTag = () => {
    const tagName = window.prompt("请输入要添加的标签！");
    if (tagName !== null && tagName !== "") {
      setTags([...tags, { id: createId(), name: tagName }]);
    }
  };

  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem("tags") || "[]");
    if (localTags.length === 0) {
      localTags = [
        { id: createId(), name: "衣" },
        { id: createId(), name: "食" },
        { id: createId(), name: "住" },
        { id: createId(), name: "行" },
      ];
    }
    setTags(localTags);
  }, []);
  useUpdate(() => {
    window.localStorage.setItem("tags", JSON.stringify(tags));
  }, [tags]);

  return { tags, setTags, findTag, findIndex, updateTag, deleteTag, addTag };
};
export { useTags };
