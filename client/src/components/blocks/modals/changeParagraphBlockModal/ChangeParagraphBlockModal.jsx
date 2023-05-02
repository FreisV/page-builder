import React, { useEffect, useRef } from "react";
import Textarea from "../../../textarea/Textarea";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateBlock } from "../../../../store/reducers/blocksReducer/actions";
import ChangeBlockModal from "../changeBlockModal/ChangeBlockModal";

const ChangeParagraphBlockModal = ({ active, setActive, id }) => {
  const params = useParams();
  const textRef = useRef();

  const dispatch = useDispatch();
  const { blocks } = useSelector((state) => state.blocks);
  const block = blocks.find((block) => block.id === id);

  useEffect(() => {
    textRef.current.value = block.text;
  }, [active, block.text]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const text = textRef.current.value;
      await dispatch(updateBlock(params.id, { ...block, text }));
      setActive(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ChangeBlockModal
      active={active}
      setActive={setActive}
      handleUpdate={handleUpdate}
    >
      <Textarea placeholder="Текст" forwardedRef={textRef} />
    </ChangeBlockModal>
  );
};

export default ChangeParagraphBlockModal;
