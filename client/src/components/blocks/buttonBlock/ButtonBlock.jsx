import React from "react";
import { useSelector } from "react-redux";
import BlockWrapper from "../blockWrapper/BlockWrapper";

const ButtonBlock = ({ id, ...otherProps }) => {
  const { blocks, blocksStyles } = useSelector((state) => state.blocks);
  const block = blocks.find((block) => block.id === id);
  const blockStyles = blocksStyles.find((style) => style.blockId === id);

  return (
    <BlockWrapper blockStyles={blockStyles}>
      <span>
        <button
          style={{
            color: blockStyles?.color,
            backgroundColor: blockStyles?.buttonBackgroundColor,
            border:
              blockStyles?.buttonBorderWidth +
              " solid " +
              blockStyles?.buttonBorderColor,

            padding: "20px 60px",
            fontSize: "19px",
            fontWeight: "600",
          }}
        >
          {block.text}
        </button>
      </span>
    </BlockWrapper>
  );
};

export default ButtonBlock;
