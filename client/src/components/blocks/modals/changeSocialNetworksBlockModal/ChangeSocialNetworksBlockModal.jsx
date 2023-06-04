import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateBlock } from "../../../../store/reducers/blocksReducer/actions";
import Input from "../../../input/Input";
import ChangeModal from "../changeBlockModal/ChangeModal";

const ChangeSocialNetworksBlockModal = ({ active, setActive, id }) => {
  const params = useParams();
  const facebookLinkRef = useRef();
  const vkLinkRef = useRef();
  const instagramLinkRef = useRef();
  const telegramLinkRef = useRef();

  const dispatch = useDispatch();
  const { blocks } = useSelector((state) => state.blocks);
  const block = blocks.find((block) => block.id === id);

  useEffect(() => {
    facebookLinkRef.current.value = block.facebookLink;
    vkLinkRef.current.value = block.vkLink;
    instagramLinkRef.current.value = block.instagramLink;
    telegramLinkRef.current.value = block.telegramLink;
  }, [
    block.facebookLink,
    block.instagramLink,
    block.telegramLink,
    block.vkLink,
  ]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const facebookLink = facebookLinkRef.current.value;
      const vkLink = vkLinkRef.current.value;
      const instagramLink = instagramLinkRef.current.value;
      const telegramLink = telegramLinkRef.current.value;
      await dispatch(
        updateBlock(params.id, {
          ...block,
          facebookLink,
          vkLink,
          instagramLink,
          telegramLink,
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
      <Input placeholder="Ссылка на Facebook" forwardedRef={facebookLinkRef} />
      <Input
        placeholder="Ссылка на Instagram"
        forwardedRef={instagramLinkRef}
      />
      <Input placeholder="Ссылка на VK" forwardedRef={vkLinkRef} />
      <Input placeholder="Ссылка на Telegram" forwardedRef={telegramLinkRef} />
    </ChangeModal>
  );
};

export default ChangeSocialNetworksBlockModal;
