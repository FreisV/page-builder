import React from "react";
import { useSelector } from "react-redux";

const ParagraphBlock = ({ id, ...otherProps }) => {
  const { blocks } = useSelector((state) => state.blocks);
  const block = blocks.find((block) => block.id === id);

  return (
    <div>
      <p>{block.text}</p>
    </div>
  );
};

export default ParagraphBlock;
