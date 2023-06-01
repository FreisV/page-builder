import React, { useEffect, useRef } from "react";
import ChangeModal from "../changeBlockModal/ChangeModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Input from "../../../input/Input";
import { updateStyles } from "../../../../store/reducers/blocksReducer/actions";
import ColorInput from "../../../colorInput/ColorInput";

const ChangeImageStylesModal = ({ active, setActive, blockId }) => {
  const params = useParams();

  const maxHeightRef = useRef();

  const paddingTopRef = useRef();
  const paddingBottomRef = useRef();
  const backgroundColorRef = useRef();

  const dispatch = useDispatch();
  const { blocksStyles } = useSelector((state) => state.blocks);
  const blockStyles = blocksStyles.find((styles) => styles.blockId === blockId);

  useEffect(() => {
    maxHeightRef.current.value = blockStyles?.maxHeight;

    paddingTopRef.current.value = blockStyles?.paddingTop;
    paddingBottomRef.current.value = blockStyles?.paddingBottom;
    backgroundColorRef.current.value = blockStyles?.backgroundColor;
  }, [blockStyles?.backgroundColor, blockStyles?.maxHeight, blockStyles?.paddingBottom, blockStyles?.paddingTop]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const enteredMaxHeight = parseFloat(maxHeightRef.current.value);
      const maxHeight = isNaN(enteredMaxHeight) ? "" : enteredMaxHeight + "px";

      const paddingTop = (parseFloat(paddingTopRef.current.value) || 0) + "px";
      const paddingBottom =
        (parseFloat(paddingBottomRef.current.value) || 0) + "px";
      const backgroundColor = backgroundColorRef.current.value;
      await dispatch(
        updateStyles(params.id, {
          ...blockStyles,

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

  return (
    <ChangeModal
      active={active}
      setActive={setActive}
      handleUpdate={handleUpdate}
    >

      <Input placeholder="Максимальная высота изображения" forwardedRef={maxHeightRef}/>
      <Input placeholder="Отступ сверху" forwardedRef={paddingTopRef} />
      <Input placeholder="Отступ снизу" forwardedRef={paddingBottomRef} />
      <ColorInput desc="Цвет фона блока" forwardedRef={backgroundColorRef} />
    </ChangeModal>
  );
};

export default ChangeImageStylesModal;
