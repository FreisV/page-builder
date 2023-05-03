import React, { useState } from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "../../button/Button";
import renderChange from "../helpers/renderChangeModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteBlock } from "../../../store/reducers/blocksReducer/actions";
import { useParams } from "react-router-dom";
import CreateBlockModal from "../modals/createBlockModal/CreateBlockModal";

const BlockMenu = ({ id, children }) => {
  const [changeActive, setChangeActive] = useState(false);
  const [createActive, setCreateActive] = useState(false);

  const params = useParams();

  const dispatch = useDispatch();
  const { blocks } = useSelector((state) => state.blocks);
  const block = blocks.find((block) => block.id === id);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await dispatch(deleteBlock(params.id, block.id));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttons}>
        <Button onClick={() => setChangeActive(true)}>
          <FontAwesomeIcon icon={faPen} />
        </Button>
        <Button onClick={() => setCreateActive(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <Button isRed={true} onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
      <div className={styles.content}>{children}</div>
      {renderChange(changeActive, setChangeActive, block)}
      <CreateBlockModal
        active={createActive}
        setActive={setCreateActive}
        newBlockNumber={block.blockNumber}
      />
    </div>
  );
};

export default BlockMenu;
