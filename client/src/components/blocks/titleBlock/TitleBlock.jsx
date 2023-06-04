import React from "react";
import { useSelector } from "react-redux";
import BlockWrapper from "../blockWrapper/BlockWrapper";

const TitleBlock = ({ id, ...otherProps }) => {
  const { blocks, blocksStyles } = useSelector((state) => state.blocks);
  const block = blocks.find((block) => block.id === id);
  const blockStyles = blocksStyles.find((style) => style.blockId === id);

  console.log(blockStyles);

  return (
    <BlockWrapper blockStyles={blockStyles}>
      <div class="oneColumnWrapper">
        <h1
          className="title"
          style={{
            color: blockStyles?.titleColor,
            textAlign: blockStyles?.titleAlign,
          }}
        >
          {block.title}
        </h1>
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
            color: blockStyles?.descriptionColor,
            textAlign: blockStyles?.descriptionAlign,
          }}
        >
          {block.description}
        </p>
      </div>
    </BlockWrapper>
  );
};

export default TitleBlock;
