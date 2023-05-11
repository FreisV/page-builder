import React, { useEffect, useRef } from "react";
import ChangeModal from "../changeBlockModal/ChangeModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Input from "../../../input/Input";
import { updateStyles } from "../../../../store/reducers/blocksReducer/actions";
import ColorInput from "../../../colorInput/ColorInput";
import Select from "../../../select/Select";

const ChangeParagraphStylesModal = ({ active, setActive, blockId }) => {
  const params = useParams();

  const colorRef = useRef();
  const textAlignRef = useRef();

  const paddingTopRef = useRef();
  const paddingBottomRef = useRef();
  const backgroundColorRef = useRef();

  const dispatch = useDispatch();
  const { blocksStyles } = useSelector((state) => state.blocks);
  const blockStyles = blocksStyles.find((styles) => styles.blockId === blockId);

  useEffect(() => {
    colorRef.current.value = blockStyles?.color;
    textAlignRef.current.value = blockStyles?.textAlign;

    paddingTopRef.current.value = blockStyles?.paddingTop;
    paddingBottomRef.current.value = blockStyles?.paddingBottom;
    backgroundColorRef.current.value = blockStyles?.backgroundColor;
  }, [blockStyles?.backgroundColor, blockStyles?.color, blockStyles?.paddingBottom, blockStyles?.paddingTop, blockStyles?.textAlign]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const color = colorRef.current.value;
      const textAlign = textAlignRef.current.value;


      const paddingTop = (parseFloat(paddingTopRef.current.value) || 0) + "px";
      const paddingBottom =
        (parseFloat(paddingBottomRef.current.value) || 0) + "px";
      const backgroundColor = backgroundColorRef.current.value;

      await dispatch(
        updateStyles(params.id, {
          ...blockStyles,

          color,
          textAlign,

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
      <ColorInput desc="Цвет текста" forwardedRef={colorRef} />
      <Select
        desc="Выравнивание текста"
        values={values}
        forwardedRef={textAlignRef}
      />

      <Input placeholder="Отступ сверху" forwardedRef={paddingTopRef} />
      <Input placeholder="Отступ снизу" forwardedRef={paddingBottomRef} />
      <ColorInput desc="Цвет фона блока" forwardedRef={backgroundColorRef} />
    </ChangeModal>
  );
};

export default ChangeParagraphStylesModal;
