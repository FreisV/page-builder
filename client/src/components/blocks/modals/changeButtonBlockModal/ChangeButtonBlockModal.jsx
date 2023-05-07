import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateBlock } from "../../../../store/reducers/blocksReducer/actions";
import Input from "../../../input/Input";
import ChangeModal from "../changeBlockModal/ChangeModal";
import Checkbox from "../../../checkbox/Checkbox";

const ChangeButtonBlockModal = ({ active, setActive, id }) => {
  const params = useParams();
  const textRef = useRef();
  const linkRef = useRef();
  const downloadRef = useRef();

  const dispatch = useDispatch();
  const { blocks } = useSelector((state) => state.blocks);
  const block = blocks.find((block) => block.id === id);

  useEffect(() => {
    textRef.current.value = block.text;
    linkRef.current.value = block.link;
    downloadRef.current.checked = block.download;
  }, [active, block.download, block.link, block.text]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const text = textRef.current.value;
      const link = linkRef.current.value;
      const download = downloadRef.current.checked;
      await dispatch(
        updateBlock(params.id, { ...block, text, link, download })
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
      <Input placeholder="Текст" forwardedRef={textRef} />
      <Input placeholder="Ссылка" forwardedRef={linkRef} />
      <Checkbox
        forwardedRef={downloadRef}
        desc={"Скачивать файл при нажатии?"}
      />
    </ChangeModal>
  );
};

export default ChangeButtonBlockModal;
