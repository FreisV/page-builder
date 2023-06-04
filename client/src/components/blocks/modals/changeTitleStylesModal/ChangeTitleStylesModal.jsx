import React, { useEffect, useRef } from "react";
import ChangeModal from "../changeBlockModal/ChangeModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Input from "../../../input/Input";
import { updateStyles } from "../../../../store/reducers/blocksReducer/actions";
import ColorInput from "../../../colorInput/ColorInput";
import Select from "../../../select/Select";

const ChangeTitleStylesModal = ({ active, setActive, blockId }) => {
  const params = useParams();

  const titleColorRef = useRef();
  const titleAlignRef = useRef();
  const subtitleColorRef = useRef();
  const subtitleAlignRef = useRef();
  const descriptionColorRef = useRef();
  const descriptionAlignRef = useRef();

  const paddingTopRef = useRef();
  const paddingBottomRef = useRef();
  const backgroundColorRef = useRef();

  const dispatch = useDispatch();
  const { blocksStyles } = useSelector((state) => state.blocks);
  const blockStyles = blocksStyles.find((styles) => styles.blockId === blockId);

  useEffect(() => {
    titleColorRef.current.value = blockStyles?.titleColor;
    titleAlignRef.current.value = blockStyles?.titleAlign;
    subtitleColorRef.current.value = blockStyles?.subtitleColor;
    subtitleAlignRef.current.value = blockStyles?.subtitleAlign;
    descriptionColorRef.current.value = blockStyles?.descriptionColor;
    descriptionAlignRef.current.value = blockStyles?.descriptionAlign;

    paddingTopRef.current.value = blockStyles?.paddingTop;
    paddingBottomRef.current.value = blockStyles?.paddingBottom;
    backgroundColorRef.current.value = blockStyles?.backgroundColor;
  }, [
    blockStyles?.backgroundColor,
    blockStyles?.descriptionAlign,
    blockStyles?.descriptionColor,
    blockStyles?.paddingBottom,
    blockStyles?.paddingTop,
    blockStyles?.subtitleAlign,
    blockStyles?.subtitleColor,
    blockStyles?.titleAlign,
    blockStyles?.titleColor,
  ]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const titleColor = titleColorRef.current.value;
      const titleAlign = titleAlignRef.current.value;
      const subtitleColor = subtitleColorRef.current.value;
      const subtitleAlign = subtitleAlignRef.current.value;
      const descriptionColor = descriptionColorRef.current.value;
      const descriptionAlign = descriptionAlignRef.current.value;

      const paddingTop = (parseFloat(paddingTopRef.current.value) || 0) + "px";
      const paddingBottom =
        (parseFloat(paddingBottomRef.current.value) || 0) + "px";
      const backgroundColor = backgroundColorRef.current.value;

      await dispatch(
        updateStyles(params.id, {
          ...blockStyles,

          titleColor,
          titleAlign,
          subtitleColor,
          subtitleAlign,
          descriptionColor,
          descriptionAlign,

          paddingTop,
          paddingBottom,
          backgroundColor,
        })
      );
      setActive(false);
    } catch (e) {
      console.error(e);
    }
  };

  const values = [
    { value: "center", title: "По центру" },
    { value: "justify ", title: "По ширине" },
    { value: "left", title: "По левому краю" },
    { value: "right", title: "По правому краю" },
  ];

  return (
    <ChangeModal
      active={active}
      setActive={setActive}
      handleUpdate={handleUpdate}
    >
      <ColorInput desc="Цвет заголовка" forwardedRef={titleColorRef} />
      <Select
        desc="Выравнивание заголовка"
        values={values}
        forwardedRef={titleAlignRef}
      />
      <ColorInput desc="Цвет подзаголовка" forwardedRef={subtitleColorRef} />
      <Select
        desc="Выравнивание подзаголовка"
        values={values}
        forwardedRef={subtitleAlignRef}
      />
      <ColorInput desc="Цвет описания" forwardedRef={descriptionColorRef} />
      <Select
        desc="Выравнивание описания"
        values={values}
        forwardedRef={descriptionAlignRef}
      />

      <Input placeholder="Отступ сверху" forwardedRef={paddingTopRef} />
      <Input placeholder="Отступ снизу" forwardedRef={paddingBottomRef} />
      <ColorInput desc="Цвет фона блока" forwardedRef={backgroundColorRef} />
    </ChangeModal>
  );
};

export default ChangeTitleStylesModal;
