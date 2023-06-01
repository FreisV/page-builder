import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ChangeModal from "../changeBlockModal/ChangeModal";
import { updateBlock } from "../../../../store/reducers/blocksReducer/actions";
import ImageInput from "../../../imageInput/ImageInput";

const ChangeImageBlockModal = ({ active, setActive, id }) => {
  const params = useParams();
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();
  const { blocks } = useSelector((state) => state.blocks);
  const block = blocks.find((block) => block.id === id);

  const handleChangeImage = (e) => {
    e.preventDefault();
    setImage(e.target.files[0]);
  };

  const handleUpdate = async (e) => {
    try {
      if (image) {
        const imageExtension = image.name.split('.').pop();
        const filename = block.id + "." + imageExtension;
        const formData = new FormData();
        formData.set("images", image, filename);

        for (let key in block) {
          formData.set(key, block[key]);
        }

        formData.set("filename", filename);

        await dispatch(updateBlock(params.id, formData));
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
      <ImageInput
        handleChange={handleChangeImage}
        desc={"Выберите изображение"}
        filename={image?.name || "Файл не выбран"}
      />
    </ChangeModal>
  );
};

export default ChangeImageBlockModal;
