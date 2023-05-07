import React, { useState } from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus, faTrash, faGear } from "@fortawesome/free-solid-svg-icons";
import Button from "../../button/Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteBlock } from "../../../store/reducers/blocksReducer/actions";
import { useParams } from "react-router-dom";
import CreateBlockModal from "../modals/createBlockModal/CreateBlockModal";
import renderChangeBlockModal from "../helpers/renderChangeBlockModal";
import renderChangeStylesModal from "../helpers/renderChangeStylesModal";

const BlockMenu = ({ id, children }) => {
  const [changeBlockActive, setChangeBlockActive] = useState(false);
  const [changeStylesActive, setChangeStylesActive] = useState(false);
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
    <div className={styles.menu}>
      <div className={styles.buttons}>
        <div>
          <Button onClick={() => setChangeBlockActive(true)}>
            <FontAwesomeIcon icon={faPen} />
          </Button>
          <Button onClick={() => setChangeStylesActive(true)}>
          <FontAwesomeIcon icon={faGear} />
          </Button>
        </div>
          <Button onClick={() => setCreateActive(true)}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        <Button isRed={true} onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
      <div className={styles.content}>{children}</div>
      {renderChangeBlockModal(changeBlockActive, setChangeBlockActive, block)}
      {renderChangeStylesModal(
        changeStylesActive,
        setChangeStylesActive,
        block
      )}
      <CreateBlockModal
        active={createActive}
        setActive={setCreateActive}
        newBlockNumber={block.blockNumber}
      />
    </div>
  );
};

export default BlockMenu;
