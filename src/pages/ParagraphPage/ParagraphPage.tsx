import Menu from "../../components/Menu/Menu";
import Paragraph from "../../components/Paragraph/Paragraph";

import style from "./ParagraphPage.module.scss";

const ParagraphPage = () => {
  return (
    <div className={style["paragraph-page"]}> 
      <Menu />

      <section>        
        <Paragraph type="small">
          Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud impetus antiopam. Eu wisi commune volutpat pro, usu at alii magna aperiam.
        </Paragraph>
      </section>

      <section>        
        <Paragraph type="medium">
          Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud impetus antiopam. Eu wisi commune volutpat pro, usu at alii magna aperiam.
        </Paragraph>
      </section>

      <section>        
        <Paragraph type="large">
          Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud impetus antiopam. Eu wisi commune volutpat pro, usu at alii magna aperiam.
        </Paragraph>
      </section>

    </div>
  );
};

export default ParagraphPage;
