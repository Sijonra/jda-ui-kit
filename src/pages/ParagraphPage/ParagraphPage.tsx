import Menu from "../../components/Menu/Menu";
import Paragraph from "../../components/Paragraph/Paragraph";

import style from "./ParagraphPage.module.scss";
import codeExample from "../../styles/codeExample.module.scss";

const ParagraphPage = () => {
  return (
    <div className={style["paragraph-page"]}>
      <Menu />

      <h1 className={style["paragraph-page__title"]}>UI Kit / Paragraphs</h1>
      <h5 className={style["paragraph-page__subtitle"]}>
        Types of paragraphs:
      </h5>

      <section className={style["paragraph"]}>
        <span className={style["paragraph__title"]}>
          Paragraph type="small"
        </span>
        <Paragraph type="small">
          Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex
          lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud
          impetus antiopam. Eu wisi commune volutpat pro, usu at alii magna
          aperiam.
        </Paragraph>
      </section>

      <section className={style["paragraph"]}>
        <span className={style["paragraph__title"]}>
          Paragraph type="medium"
        </span>
        <Paragraph type="medium">
          Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex
          lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud
          impetus antiopam. Eu wisi commune volutpat pro, usu at alii magna
          aperiam.
        </Paragraph>
      </section>

      <section className={style["paragraph"]}>
        <span className={style["paragraph__title"]}>
          Paragraph type="large"
        </span>
        <Paragraph type="large">
          Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex
          lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud
          impetus antiopam. Eu wisi commune volutpat pro, usu at alii magna
          aperiam.
        </Paragraph>
      </section>

      <section>
        <pre
          className={codeExample["code"] + " " + "line-numbers language-jsx"}
          tabIndex={0}
        >
          <code>
            <span className="tab">{"\t"}</span>
            <span className={codeExample["code__operator"]}>&lt;</span>
            <span className={codeExample["code__red"]}>Paragraph</span>
            <span className="lf">{"\n"}</span>
            <span className="tab">{"\t"}</span>
            <span className="tab">{"\t"}</span>
            <span className={codeExample["code__attr-name"]}>className</span>
            <span className={codeExample["code__operator"]}>?</span>
            <span className={codeExample["code__operator"]}>=</span>
            <span className={codeExample["code__attr-value"]}>string</span>
            <span className="lf">{"\n"}</span>
            <span className="tab">{"\t"}</span>
            <span className="tab">{"\t"}</span>
            <span className={codeExample["code__attr-name"]}>type</span>
            <span className={codeExample["code__operator"]}>=</span>
            <span className={codeExample["code__attr-value"]}>
              small || medium || large
            </span>
            <span className="lf">{"\n"}</span>
            <span className="tab">{"\t"}</span>
            <span className={codeExample["code__operator"]}>&gt;</span>
            <span className="token lf">{"\n"}</span>
            <span className="token tab">{"\t"}</span>
            <span className="tab">{"\t"}</span>
            content
            <span className="token lf">{"\n"}</span>
            <span className="tab">{"\t"}</span>
            <span className={codeExample["code__operator"]}>&lt;/</span>
            <span className={codeExample["code__red"]}>Paragraph</span>
            <span className={codeExample["code__operator"]}>&gt;</span>
          </code>
        </pre>
      </section>
    </div>
  );
};

export default ParagraphPage;
