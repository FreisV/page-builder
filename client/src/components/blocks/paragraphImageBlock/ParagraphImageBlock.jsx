import React from "react";
import { useSelector } from "react-redux";
import BlockWrapper from "../blockWrapper/BlockWrapper";
import { API_URL } from "../../../http";

const ParagraphImageBlock = ({ id, ...otherProps }) => {
  const { blocks, blocksStyles } = useSelector((state) => state.blocks);
  const block = blocks.find((block) => block.id === id);
  const blockStyles = blocksStyles.find((style) => style.blockId === id);

  return (
    <BlockWrapper blockStyles={blockStyles}>
      <div className="twoColumnsWrapper">
        <h3
          className="subtitle"
          style={{
            color: blockStyles?.subtitleColor,
            textAlign: blockStyles?.subtitleAlign,
          }}
        >
          {block.subtitle}
        </h3>
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
      <div className="twoColumnsWrapper image-wrapper">
        <img
          className="image"
          src={`${API_URL}/images/${block.filename}`}
          alt=""
          style={{
            maxHeight: blockStyles?.maxHeight,
          }}
        />
      </div>
    </BlockWrapper>
  );
};

export default ParagraphImageBlock;
