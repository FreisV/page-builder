import React, { useEffect, useRef } from "react";
import Textarea from "../../../textarea/Textarea";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateBlock } from "../../../../store/reducers/blocksReducer/actions";
import ChangeModal from "../changeBlockModal/ChangeModal";

const ChangeTwoParagraphsBlockModal = ({ active, setActive, id }) => {
  const params = useParams();
  const textRef = useRef();
  const text2Ref = useRef();

  const dispatch = useDispatch();
  const { blocks } = useSelector((state) => state.blocks);
  const block = blocks.find((block) => block.id === id);

  useEffect(() => {
    textRef.current.value = block.text;
    text2Ref.current.value = block.text2;
  }, [block.text, block.text2]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const text = textRef.current.value;
      const text2 = text2Ref.current.value;
      await dispatch(updateBlock(params.id, { ...block, text, text2 }));
      setActive(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ChangeModal
      active={active}
      setActive={setActive}
      handleUpdate={handleUpdate}
    >
      <Textarea placeholder="Первый текст" forwardedRef={textRef} />
      <Textarea placeholder="Второй текст" forwardedRef={text2Ref} />
    </ChangeModal>
  );
};

export default ChangeTwoParagraphsBlockModal;
