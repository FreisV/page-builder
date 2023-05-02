import ButtonBlock from "../buttonBlock/ButtonBlock";
import ParagraphBlock from "../paragraphBlock/ParagraphBlock";

export default function renderBlock(data) {
  switch (data.type) {
    case "ButtonBlock":
      return <ButtonBlock id={data.id} />;
    case "ParagraphBlock":
      return <ParagraphBlock id={data.id} />;
    default:
      return null;
  }
}
