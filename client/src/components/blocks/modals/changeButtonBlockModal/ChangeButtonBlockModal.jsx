import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateBlock } from "../../../../store/reducers/blocksReducer/actions";
import Input from "../../../input/Input";
import ChangeBlockModal from "../changeBlockModal/ChangeBlockModal";

const ChangeButtonBlockModal = ({ active, setActive, id }) => {
  const params = useParams();
  const textRef = useRef();
  const linkRef = useRef();

  const dispatch = useDispatch();
  const { blocks } = useSelector((state) => state.blocks);
  const block = blocks.find((block) => block.id === id);

  useEffect(() => {
    textRef.current.value = block.text;
    linkRef.current.value = block.link;
  }, [active, block.link, block.text]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const text = textRef.current.value;
      const link = linkRef.current.value;
      await dispatch(updateBlock(params.id, { ...block, text, link }));
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
      <Input placeholder="Текст" forwardedRef={textRef} />
      <Input placeholder="Ссылка" forwardedRef={linkRef} />
    </ChangeBlockModal>
  );
};

export default ChangeButtonBlockModal;
