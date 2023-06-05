import React, { useEffect, useRef, useState } from "react";
import Textarea from "../../../textarea/Textarea";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateBlock } from "../../../../store/reducers/blocksReducer/actions";
import ChangeModal from "../changeBlockModal/ChangeModal";
import ImageInput from "../../../imageInput/ImageInput";

const ChangeTeamBlockModal = ({ active, setActive, id }) => {
  const params = useParams();
  const nameRef = useRef();
  const infoRef = useRef();
  const name2Ref = useRef();
  const info2Ref = useRef();
  const name3Ref = useRef();
  const info3Ref = useRef();
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);

  const dispatch = useDispatch();
  const { blocks } = useSelector((state) => state.blocks);
  const block = blocks.find((block) => block.id === id);

  useEffect(() => {
    nameRef.current.value = block.name;
    infoRef.current.value = block.info;
    name2Ref.current.value = block.name2;
    info2Ref.current.value = block.info2;
    name3Ref.current.value = block.name3;
    info3Ref.current.value = block.info3;
  }, [
    block.info,
    block.info2,
    block.info3,
    block.name,
    block.name2,
    block.name3,
    block.subtitle,
    block.text,
  ]);

  const handleChangeImage = (e) => {
    e.preventDefault();
    setImage(e.target.files[0]);
  };

  const handleChangeImage2 = (e) => {
    e.preventDefault();
    setImage(e.target.files[0]);
  };

  const handleChangeImage3 = (e) => {
    e.preventDefault();
    setImage(e.target.files[0]);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const name = nameRef.current.value;
      const info = infoRef.current.value;
      const name2 = name2Ref.current.value;
      const info2 = info2Ref.current.value;
      const name3 = name3Ref.current.value;
      const info3 = info3Ref.current.value;
      if (image || image2 || image3) {
        const formData = new FormData();
        if (image) {
          const imageExtension = image.name.split(".").pop();
          const filename = block.id + "-1." + imageExtension;
          formData.append("images", image, filename);
          formData.set("filename", filename);
        }

        if (image2) {
          const imageExtension = image2.name.split(".").pop();
          const filename = block.id + "-2." + imageExtension;
          formData.append("images", image2, filename);
          formData.set("filename2", filename);
        }

        if (image3) {
          const imageExtension = image3.name.split(".").pop();
          const filename = block.id + "-3." + imageExtension;
          formData.append("images", image3, filename);
          formData.set("filename3", filename);
        }

        formData.set("id", block.id);
        formData.set("name", name);
        formData.set("info", info);
        formData.set("name2", name2);
        formData.set("info2", info2);
        formData.set("name3", name3);
        formData.set("info3", info3);

        await dispatch(updateBlock(params.id, formData));
      } else {
        await dispatch(
          updateBlock(params.id, {
            ...block,
            name,
            info,
            name2,
            info2,
            name3,
            info3,
          })
        );
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
        desc={"Выберите первое изображение"}
        filename={image?.name || "Файл не выбран"}
      />
      <Textarea placeholder="Первое имя" forwardedRef={nameRef} />
      <Textarea placeholder="Первая информация" forwardedRef={infoRef} />
      <ImageInput
        handleChange={handleChangeImage2}
        desc={"Выберите второе изображение"}
        filename={image2?.name || "Файл не выбран"}
      />
      <Textarea placeholder="Второе имя" forwardedRef={name2Ref} />
      <Textarea placeholder="Вторая информация" forwardedRef={info2Ref} />
      <ImageInput
        handleChange={handleChangeImage3}
        desc={"Выберите третье изображение"}
        filename={image3?.name || "Файл не выбран"}
      />
      <Textarea placeholder="Третье имя" forwardedRef={name3Ref} />
      <Textarea placeholder="Третья информация" forwardedRef={info3Ref} />
    </ChangeModal>
  );
};

export default ChangeTeamBlockModal;
