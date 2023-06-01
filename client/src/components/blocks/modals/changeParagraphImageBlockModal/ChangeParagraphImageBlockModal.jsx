import React, { useEffect, useRef, useState } from "react";
import Textarea from "../../../textarea/Textarea";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateBlock } from "../../../../store/reducers/blocksReducer/actions";
import ChangeModal from "../changeBlockModal/ChangeModal";
import ImageInput from "../../../imageInput/ImageInput";

const ChangeParagraphImageBlockModal = ({ active, setActive, id }) => {
  const params = useParams();
  const textRef = useRef();
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();
  const { blocks } = useSelector((state) => state.blocks);
  const block = blocks.find((block) => block.id === id);

  useEffect(() => {
    textRef.current.value = block.text;
  }, [active, block.text]);

  const handleChangeImage = (e) => {
    e.preventDefault();
    setImage(e.target.files[0]);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      if (image) {
        const imageExtension = image.name.split(".").pop();
        const filename = block.id + "." + imageExtension;
        const formData = new FormData();
        formData.set("images", image, filename);

        for (let key in block) {
          formData.set(key, block[key]);
        }

        formData.set("filename", filename);

        await dispatch(updateBlock(params.id, formData));
      } else {
        const text = textRef.current.value;
        await dispatch(updateBlock(params.id, { ...block, text }));
      }
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
      <ImageInput
        handleChange={handleChangeImage}
        desc={"Выберите изображение"}
        filename={image?.name || "Файл не выбран"}
      />
    </ChangeModal>
  );
};

export default ChangeParagraphImageBlockModal;
