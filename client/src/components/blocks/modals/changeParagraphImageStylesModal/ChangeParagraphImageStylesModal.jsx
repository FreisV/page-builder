import React, { useEffect, useRef } from "react";
import ChangeModal from "../changeBlockModal/ChangeModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Input from "../../../input/Input";
import { updateStyles } from "../../../../store/reducers/blocksReducer/actions";
import ColorInput from "../../../colorInput/ColorInput";
import Select from "../../../select/Select";

const ChangeParagraphImageStylesModal = ({ active, setActive, blockId }) => {
  const params = useParams();

  const subtitleColorRef = useRef();
  const subtitleAlignRef = useRef();
  const colorRef = useRef();
  const textAlignRef = useRef();
  const maxHeightRef = useRef();

  const paddingTopRef = useRef();
  const paddingBottomRef = useRef();
  const backgroundColorRef = useRef();

  const dispatch = useDispatch();
  const { blocksStyles } = useSelector((state) => state.blocks);
  const blockStyles = blocksStyles.find((styles) => styles.blockId === blockId);

  useEffect(() => {
    subtitleColorRef.current.value = blockStyles?.subtitleColor;
    subtitleAlignRef.current.value = blockStyles?.subtitleAlign;
    colorRef.current.value = blockStyles?.color;
    textAlignRef.current.value = blockStyles?.textAlign;
    maxHeightRef.current.value = blockStyles?.maxHeight;

    paddingTopRef.current.value = blockStyles?.paddingTop;
    paddingBottomRef.current.value = blockStyles?.paddingBottom;
    backgroundColorRef.current.value = blockStyles?.backgroundColor;
  }, [
    blockStyles?.subtitleColor,
    blockStyles?.subtitleAlign,
    blockStyles?.color,
    blockStyles?.textAlign,
    blockStyles?.maxHeight,
    blockStyles?.paddingBottom,
    blockStyles?.paddingTop,
    blockStyles?.backgroundColor,
  ]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const subtitleColor = subtitleColorRef.current.value;
      const subtitleAlign = subtitleAlignRef.current.value;
      const color = colorRef.current.value;
      const textAlign = textAlignRef.current.value;
      const enteredMaxHeight = parseFloat(maxHeightRef.current.value);
      const maxHeight = isNaN(enteredMaxHeight) ? "" : enteredMaxHeight + "px";

      const paddingTop = (parseFloat(paddingTopRef.current.value) || 0) + "px";
      const paddingBottom =
        (parseFloat(paddingBottomRef.current.value) || 0) + "px";
      const backgroundColor = backgroundColorRef.current.value;

      await dispatch(
        updateStyles(params.id, {
          ...blockStyles,

          subtitleColor,
          subtitleAlign,
          color,
          textAlign,
          maxHeight,

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
      <ColorInput desc="Цвет заголовка" forwardedRef={subtitleColorRef} />
      <Select
        desc="Выравнивание заголовка"
        values={values}
        forwardedRef={subtitleAlignRef}
      />
      <ColorInput desc="Цвет текста" forwardedRef={colorRef} />
      <Select
        desc="Выравнивание текста"
        values={values}
        forwardedRef={textAlignRef}
      />
      <Input
        placeholder="Максимальная высота изображения"
        forwardedRef={maxHeightRef}
      />

      <Input placeholder="Отступ сверху" forwardedRef={paddingTopRef} />
      <Input placeholder="Отступ снизу" forwardedRef={paddingBottomRef} />
      <ColorInput desc="Цвет фона блока" forwardedRef={backgroundColorRef} />
    </ChangeModal>
  );
};

export default ChangeParagraphImageStylesModal;
