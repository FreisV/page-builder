import ButtonBlock from "../buttonBlock/ButtonBlock";
import ParagraphBlock from "../paragraphBlock/ParagraphBlock";
import TwoParagraphsBlock from "../twoParagraphsBlock/TwoParagraphsBlock";

export default function renderBlock(data) {
  switch (data.type) {
    case "ButtonBlock":
      return <ButtonBlock id={data.id} />;
    case "ParagraphBlock":
      return <ParagraphBlock id={data.id} />;
      case "TwoParagraphsBlock": 
      return <TwoParagraphsBlock id={data.id} />
    default:
      return null;
  }
}
