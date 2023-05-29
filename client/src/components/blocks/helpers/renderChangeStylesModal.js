import ChangeButtonStylesModal from "../modals/changeButtonStylesModal/ChangeButtonStylesModal";
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
    default:
      return null;
  }
}
