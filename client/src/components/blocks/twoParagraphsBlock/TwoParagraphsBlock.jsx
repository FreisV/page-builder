import React from "react";
import { useSelector } from "react-redux";
import BlockWrapper from "../blockWrapper/BlockWrapper";

const TwoParagraphsBlock = ({ id, ...otherProps }) => {
  const { blocks, blocksStyles } = useSelector((state) => state.blocks);
  const block = blocks.find((block) => block.id === id);
  const blockStyles = blocksStyles.find((style) => style.blockId === id);

  return (
    <BlockWrapper blockStyles={blockStyles}>
      <div className="twoColumnsWrapper">
        <p
          className="paragraph"
          style={{
            color: blockStyles?.color,
            textAlign: blockStyles?.textAlign,
          }}
        >
          {block.text}
        </p>
      </div>
      <div className="twoColumnsWrapper">
        <p
          className="paragraph"
          style={{
            color: blockStyles?.color2,
            textAlign: blockStyles?.textAlign2,
          }}
        >
          {block.text2}
        </p>
      </div>
    </BlockWrapper>
  );
};

export default TwoParagraphsBlock;
