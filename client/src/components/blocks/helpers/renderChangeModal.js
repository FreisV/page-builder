import ChangeButtonBlockModal from "../modals/changeButtonBlockModal/ChangeButtonBlockModal";
import ChangeParagraphBlockModal from "../modals/changeParagraphBlockModal/ChangeParagraphBlockModal";

export default function renderChange(active, setActive, block) {
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
    default:
      return null;
  }
}
