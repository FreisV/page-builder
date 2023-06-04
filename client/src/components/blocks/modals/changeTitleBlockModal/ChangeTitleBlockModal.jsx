import React, { useEffect, useRef } from "react";
import Textarea from "../../../textarea/Textarea";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateBlock } from "../../../../store/reducers/blocksReducer/actions";
import ChangeModal from "../changeBlockModal/ChangeModal";

const ChangeTitleBlockModal = ({ active, setActive, id }) => {
  const params = useParams();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const descriptionRef = useRef();

  const dispatch = useDispatch();
  const { blocks } = useSelector((state) => state.blocks);
  const block = blocks.find((block) => block.id === id);

  useEffect(() => {
    titleRef.current.value = block.title;
    subtitleRef.current.value = block.subtitle;
    descriptionRef.current.value = block.description;
  }, [block.description, block.subtitle, block.title]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const title = titleRef.current.value;
      const subtitle = subtitleRef.current.value;
      const description = descriptionRef.current.value;

      await dispatch(
        updateBlock(params.id, { ...block, title, subtitle, description })
      );
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
      <Textarea placeholder="Заголовок" forwardedRef={titleRef} />
      <Textarea placeholder="Подзаголовок" forwardedRef={subtitleRef} />
      <Textarea placeholder="Описание" forwardedRef={descriptionRef} />
    </ChangeModal>
  );
};

export default ChangeTitleBlockModal;
