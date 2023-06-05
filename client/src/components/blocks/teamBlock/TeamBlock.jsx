import React from "react";
import { useSelector } from "react-redux";
import BlockWrapper from "../blockWrapper/BlockWrapper";
import TeamCard from "../../teamCard/TeamCard";

const TeamBlock = ({ id, ...otherProps }) => {
  const { blocks, blocksStyles } = useSelector((state) => state.blocks);
  const block = blocks.find((block) => block.id === id);
  const blockStyles = blocksStyles.find((style) => style.blockId === id);

  const firstCard =
    block.name || block.info ? (
      <TeamCard
        filename={block.filename}
        name={block.name}
        info={block.info}
        blockStyles={blockStyles}
      />
    ) : (
      ""
    );

  const secondCard =
    block.name2 || block.info2 ? (
      <TeamCard
        filename={block.filename2}
        name={block.name2}
        info={block.info2}
        blockStyles={blockStyles}
      />
    ) : (
      ""
    );

  const thirdCard =
    block.name3 || block.info3 ? (
      <TeamCard
        filename={block.filename3}
        name={block.name3}
        info={block.info3}
        blockStyles={blockStyles}
      />
    ) : (
      ""
    );
    
  return (
    <BlockWrapper blockStyles={blockStyles}>
      <div className="cards">
        {firstCard}
        {secondCard}
        {thirdCard}
      </div>
    </BlockWrapper>
  );
};

export default TeamBlock;
