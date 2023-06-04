import React from "react";
import styles from "./styles.module.css";
import Modal from "../../../modal/Modal";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createBlock } from "../../../../store/reducers/blocksReducer/actions";

const CreateBlockModal = ({ active, setActive, newBlockNumber }) => {
  const params = useParams();

  const dispatch = useDispatch();
  const { blocks, isFetching } = useSelector((state) => state.blocks);

  const getLastBlockNumber = () => {
    const maxBlockNumber = blocks.reduce(
      (max, block) => (max > block.blockNumber ? max : block.blockNumber),
      0
    );
    return maxBlockNumber + 1;
  };

  const createNewBlock = async (type, blockNumber) => {
    if (!isFetching) {
      const newBlockNumber = blockNumber ?? getLastBlockNumber();
      await dispatch(
        createBlock(params.id, { type, blockNumber: newBlockNumber })
      );
      setActive(false);
    }
  };

  return (
    <Modal active={active} setActive={setActive}>
      <button className={styles.closeButton} onClick={() => setActive(false)}>
        Закрыть
      </button>
      <h2 className={styles.title}>Создать новый блок</h2>
      <div className={styles.fields}>
        <button
          className={styles.button}
          onClick={() => createNewBlock("ButtonBlock", newBlockNumber)}
        >
          Кнопка
        </button>
        <button
          className={styles.button}
          onClick={() => createNewBlock("ParagraphBlock", newBlockNumber)}
        >
          Параграф
        </button>
        <button
          className={styles.button}
          onClick={() => createNewBlock("TwoParagraphsBlock", newBlockNumber)}
        >
          Два параграфа
        </button>
        <button
          className={styles.button}
          onClick={() => createNewBlock("ImageBlock", newBlockNumber)}
        >
          Изображение
        </button>
        <button
          className={styles.button}
          onClick={() => createNewBlock("ParagraphImageBlock", newBlockNumber)}
        >
          Параграф-Изображение
        </button>
        <button
          className={styles.button}
          onClick={() => createNewBlock("CoverBlock", newBlockNumber)}
        >
          Обложка
        </button>
        <button
          className={styles.button}
          onClick={() => createNewBlock("TitleBlock", newBlockNumber)}
        >
          Заголовок
        </button>
        <button
          className={styles.button}
          onClick={() => createNewBlock("SocialNetworksBlock", newBlockNumber)}
        >
          Социальные сети
        </button>
      </div>
      <div className={styles.close}></div>
    </Modal>
  );
};

export default CreateBlockModal;
