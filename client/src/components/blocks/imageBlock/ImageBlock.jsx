import React from "react";
import { useSelector } from "react-redux";
import BlockWrapper from "../blockWrapper/BlockWrapper";
import { API_URL } from "../../../http";

const ImageBlock = ({ id, ...otherProps }) => {
  const { blocks, blocksStyles } = useSelector((state) => state.blocks);
  const block = blocks.find((block) => block.id === id);
  const blockStyles = blocksStyles.find((style) => style.blockId === id);

  return (
    <BlockWrapper blockStyles={blockStyles}>
      <img
        className="image"
        src={`${API_URL}/images/${block.filename}`}
        alt=""
        style={{
          maxHeight: blockStyles?.maxHeight,
        }}
      />
    </BlockWrapper>
  );
};

export default ImageBlock;
