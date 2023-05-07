import React from "react";
import { useSelector } from "react-redux";
import BlockWrapper from "../blockWrapper/BlockWrapper";

const ParagraphBlock = ({ id, ...otherProps }) => {
  const { blocks, blocksStyles } = useSelector((state) => state.blocks);
  const block = blocks.find((block) => block.id === id);
  const blockStyles = blocksStyles.find((style) => style.blockId === id);

  return (
    <BlockWrapper blockStyles={blockStyles}>
      <div
        style={{width:"100%"}}
      >
        <p
          style={{
            color: blockStyles?.color,
            textAlign: blockStyles?.textAlign,

            fontSize: "18px",
          }}
        >
          {block.text}
        </p>
      </div>
    </BlockWrapper>
  );
};

export default ParagraphBlock;
