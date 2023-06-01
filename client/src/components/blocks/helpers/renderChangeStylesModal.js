import ChangeButtonStylesModal from "../modals/changeButtonStylesModal/ChangeButtonStylesModal";
import ChangeImageStylesModal from "../modals/changeImageStylesModal/ChangeImageStylesModal";
import ChangeParagraphImageStylesModal from "../modals/changeParagraphImageStylesModal/ChangeParagraphImageStylesModal";
import ChangeParagraphStylesModal from "../modals/changeParagraphStylesModal/ChangeParagraphStylesModal";
import ChangeTwoParagraphsStylesModal from "../modals/changeTwoParagraphsStylesModal/ChangeTwoParagraphsStylesModal";

export default function renderChangeStylesModal(active, setActive, block) {
  switch (block.type) {
    case "ButtonBlock":
      return (
        <ChangeButtonStylesModal
          active={active}
          setActive={setActive}
          blockId={block.id}
        />
      );
    case "ParagraphBlock":
      return (
        <ChangeParagraphStylesModal
          active={active}
          setActive={setActive}
          blockId={block.id}
        />
      );
    case "TwoParagraphsBlock":
      return (
        <ChangeTwoParagraphsStylesModal
          active={active}
          setActive={setActive}
          blockId={block.id}
        />
      );
    case "ImageBlock":
      return (
        <ChangeImageStylesModal
          active={active}
          setActive={setActive}
          blockId={block.id}
        />
      );
    case "ParagraphImageBlock":
      return (
        <ChangeParagraphImageStylesModal
          active={active}
          setActive={setActive}
          blockId={block.id}
        />
      );
    default:
      return null;
  }
}
