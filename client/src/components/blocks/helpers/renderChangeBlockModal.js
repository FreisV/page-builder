import ChangeButtonBlockModal from "../modals/changeButtonBlockModal/ChangeButtonBlockModal";
import ChangeImageBlockModal from "../modals/changeImageBlockModal/ChangeImageBlockModal";
import ChangeParagraphBlockModal from "../modals/changeParagraphBlockModal/ChangeParagraphBlockModal";
import ChangeTwoParagraphsBlockModal from "../modals/changeTwoParagraphsBlockModal/ChangeTwoParagraphsBlockModal";
import ChangeParagraphImageBlockModal from "../modals/changeParagraphImageBlockModal/ChangeParagraphImageBlockModal";
import ChangeCoverBlockModal from "../modals/changeCoverBlockModal/ChangeCoverBlockModal";
export default function renderChangeBlockModal(active, setActive, block) {
  switch (block.type) {
    case "ButtonBlock":
      return (
        <ChangeButtonBlockModal
          active={active}
          setActive={setActive}
          id={block.id}
        />
      );
    case "ParagraphBlock":
      return (
        <ChangeParagraphBlockModal
          active={active}
          setActive={setActive}
          id={block.id}
        />
      );
    case "TwoParagraphsBlock":
      return (
        <ChangeTwoParagraphsBlockModal
          active={active}
          setActive={setActive}
          id={block.id}
        />
      );
    case "ImageBlock":
      return (
        <ChangeImageBlockModal
          active={active}
          setActive={setActive}
          id={block.id}
        />
      );
    case "ParagraphImageBlock":
      return (
        <ChangeParagraphImageBlockModal
          active={active}
          setActive={setActive}
          id={block.id}
        />
      );
    case "CoverBlock":
      return (
        <ChangeCoverBlockModal
          active={active}
          setActive={setActive}
          id={block.id}
        />
      );
    default:
      return null;
  }
}
