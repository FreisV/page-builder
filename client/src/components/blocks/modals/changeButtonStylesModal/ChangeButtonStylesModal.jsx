import React, { useEffect, useRef } from "react";
import ChangeModal from "../changeBlockModal/ChangeModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Input from "../../../input/Input";
import { updateStyles } from "../../../../store/reducers/blocksReducer/actions";
import ColorInput from "../../../colorInput/ColorInput";

const ChangeButtonStylesModal = ({ active, setActive, blockId }) => {
  const params = useParams();

  const colorRef = useRef();
  const buttonBackgroundColorRef = useRef();
  const buttonBorderColorRef = useRef();
  const buttonBorderWidthRef = useRef();

  const paddingTopRef = useRef();
  const paddingBottomRef = useRef();
  const backgroundColorRef = useRef();

  const dispatch = useDispatch();
  const { blocksStyles } = useSelector((state) => state.blocks);
  const blockStyles = blocksStyles.find((styles) => styles.blockId === blockId);

  useEffect(() => {
    colorRef.current.value = blockStyles?.color;
    buttonBackgroundColorRef.current.value =
      blockStyles?.buttonBackgroundColor;
    buttonBorderColorRef.current.value = blockStyles?.buttonBorderColor;
    buttonBorderWidthRef.current.value = blockStyles?.buttonBorderWidth;

    paddingTopRef.current.value = blockStyles?.paddingTop;
    paddingBottomRef.current.value = blockStyles?.paddingBottom;
    backgroundColorRef.current.value = blockStyles?.backgroundColor;

  }, [blockStyles?.backgroundColor, blockStyles?.buttonBackgroundColor, blockStyles?.buttonBorderColor, blockStyles?.buttonBorderWidth, blockStyles?.color, blockStyles?.paddingBottom, blockStyles?.paddingTop]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const color = colorRef.current.value;
      const buttonBackgroundColor = buttonBackgroundColorRef.current.value;
      const buttonBorderColor = buttonBorderColorRef.current.value;
      const buttonBorderWidth = (parseFloat(buttonBorderWidthRef.current.value) || 0) + "px";


      const paddingTop = (parseFloat(paddingTopRef.current.value) || 0) + "px";
      const paddingBottom =
        (parseFloat(paddingBottomRef.current.value) || 0) + "px";
      const backgroundColor = backgroundColorRef.current.value;

      await dispatch(
        updateStyles(params.id, {
          ...blockStyles,

          color,
          buttonBackgroundColor,
          buttonBorderColor,
          buttonBorderWidth,

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

  return (
    <ChangeModal
      active={active}
      setActive={setActive}
      handleUpdate={handleUpdate}
    >
      <ColorInput desc="Цвет текста кнопки" forwardedRef={colorRef} />
      <ColorInput
        desc="Цвет фона кнопки"
        forwardedRef={buttonBackgroundColorRef}
      />
      <ColorInput desc="Цвет контура" forwardedRef={buttonBorderColorRef} />
      <Input
        placeholder="Толщина контура кнопки"
        forwardedRef={buttonBorderWidthRef}
      />

      <Input placeholder="Отступ сверху" forwardedRef={paddingTopRef} />
      <Input placeholder="Отступ снизу" forwardedRef={paddingBottomRef} />
      <ColorInput desc="Цвет фона блока" forwardedRef={backgroundColorRef} />
    </ChangeModal>
  );
};

export default ChangeButtonStylesModal;
