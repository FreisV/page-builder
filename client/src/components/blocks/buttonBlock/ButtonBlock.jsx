import React from "react";
import { useSelector } from "react-redux";

const ButtonBlock = ({ id, ...otherProps }) => {
  const { blocks } = useSelector((state) => state.blocks);
  const block = blocks.find((block) => block.id === id);

  return (
    <div>
      <span>
        <button>{block.text}</button>
      </span>
    </div>
  );
};

export default ButtonBlock;
