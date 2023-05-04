import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import renderBlock from "../blocks/helpers/renderBlock";
import CreateBlockModal from "../blocks/modals/createBlockModal/CreateBlockModal";
import Button from "../button/Button";
import BlockMenu from "../blocks/blockMenu/BlockMenu";
import {
  getBlocks,
  getStyles,
} from "../../store/reducers/blocksReducer/actions";

const BlockList = () => {
  const [createActive, setCreateActive] = useState(false);
  const params = useParams();

  const dispatch = useDispatch();
  const { blocks } = useSelector((state) => state.blocks);

  useEffect(() => {
    const getProjectBlocks = async () => {
      try {
        await dispatch(getBlocks(params.id));
        await dispatch(getStyles(params.id));
      } catch (e) {
        console.error(e);
      }
    };
    getProjectBlocks();
  }, [dispatch, params.id]);

  return (
    <>
      {blocks ? (
        blocks.map((block) => (
          <BlockMenu key={block.id} id={block.id}>
            {renderBlock(block)}
          </BlockMenu>
        ))
      ) : (
        <></>
      )}
      <CreateBlockModal active={createActive} setActive={setCreateActive} />
      <Button onClick={() => setCreateActive(true)}>Создать блок</Button>
    </>
  );
};

export default BlockList;
