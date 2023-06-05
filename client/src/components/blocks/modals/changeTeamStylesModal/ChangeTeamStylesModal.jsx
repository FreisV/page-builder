import React, { useEffect, useRef } from "react";
import ChangeModal from "../changeBlockModal/ChangeModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Input from "../../../input/Input";
import { updateStyles } from "../../../../store/reducers/blocksReducer/actions";
import ColorInput from "../../../colorInput/ColorInput";
import Select from "../../../select/Select";

const ChangeTeamStylesModal = ({ active, setActive, blockId }) => {
  const params = useParams();

  const nameColorRef = useRef();
  const nameAlignRef = useRef();
  const infoColorRef = useRef();
  const infoAlignRef = useRef();

  const paddingTopRef = useRef();
  const paddingBottomRef = useRef();
  const backgroundColorRef = useRef();

  const dispatch = useDispatch();
  const { blocksStyles } = useSelector((state) => state.blocks);
  const blockStyles = blocksStyles.find((styles) => styles.blockId === blockId);

  useEffect(() => {
    nameColorRef.current.value = blockStyles?.nameColor;
    nameAlignRef.current.value = blockStyles?.nameAlign;
    infoColorRef.current.value = blockStyles?.infoColor;
    infoAlignRef.current.value = blockStyles?.infoAlign;

    paddingTopRef.current.value = blockStyles?.paddingTop;
    paddingBottomRef.current.value = blockStyles?.paddingBottom;
    backgroundColorRef.current.value = blockStyles?.backgroundColor;
  }, [
    blockStyles?.backgroundColor,
    blockStyles?.paddingBottom,
    blockStyles?.paddingTop,
    blockStyles?.infoAlign,
    blockStyles?.infoColor,
    blockStyles?.nameAlign,
    blockStyles?.nameColor,
  ]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const nameColor = nameColorRef.current.value;
      const nameAlign = nameAlignRef.current.value;
      const infoColor = infoColorRef.current.value;
      const infoAlign = infoAlignRef.current.value;

      const paddingTop = (parseFloat(paddingTopRef.current.value) || 0) + "px";
      const paddingBottom =
        (parseFloat(paddingBottomRef.current.value) || 0) + "px";
      const backgroundColor = backgroundColorRef.current.value;

      await dispatch(
        updateStyles(params.id, {
          ...blockStyles,

          nameColor,
          nameAlign,
          infoColor,
          infoAlign,

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
      <ColorInput desc="Цвет заголовка" forwardedRef={nameColorRef} />
      <Select
        desc="Выравнивание заголовка"
        values={values}
        forwardedRef={nameAlignRef}
      />
      <ColorInput desc="Цвет информации" forwardedRef={infoColorRef} />
      <Select
        desc="Выравнивание информации"
        values={values}
        forwardedRef={infoAlignRef}
      />

      <Input placeholder="Отступ сверху" forwardedRef={paddingTopRef} />
      <Input placeholder="Отступ снизу" forwardedRef={paddingBottomRef} />
      <ColorInput desc="Цвет фона блока" forwardedRef={backgroundColorRef} />
    </ChangeModal>
  );
};

export default ChangeTeamStylesModal;
