import Menu from "../../components/Menu/Menu";
import Heading from "../../components/Heading/Heading";
import style from "./HeadingPage.module.scss";
import codeExample from "../../styles/codeExample.module.scss";

const HeadingPage = () => {
  return (
    <div className={style["heading-page"]}>
      <Menu page="headings" />

      <h1 className={style["heading-page__title"]}>UI Kit / Headings</h1>
      <h5 className={style["heading-page__subtitle"]}>
        This is all types of headings:
      </h5>

      <section className={style["heading-page__examples"]}>
        <span>type === jumbo</span>
        <Heading type="jumbo">Jumbo Titles. When You Feel Funky</Heading>

        <span>type === oversized</span>
        <Heading type="oversized">Oversized Screen Titles</Heading>

        <span>type === introduction</span>
        <Heading type="introduction">
          Empty States and Feature Introductions
        </Heading>

        <span>type === key</span>
        <Heading type="key">Headings That Identify Key Functionality</Heading>

        <span>type === sub</span>
        <Heading type="sub">Sub-section and card headings.</Heading>

        <span>type === deep</span>
        <Heading type="deep">
          Deep headings and for highlighting important pieces of information.
        </Heading>

        <span>type === list-item</span>
        <Heading type="list-item">Heading up a group of list items.</Heading>

        <span>type === low</span>
        <Heading type="low">Low level headings.</Heading>

        <span>type === lowest</span>
        <Heading type="lowest">
          Lowest level headings. Used to group items in a sidebar.
        </Heading>
      </section>

      <h5 className={style["heading-page__subtitle"]}>
        How to use it in your code:
      </h5>
      <section>
        <pre
          className={codeExample["code"] + " " + "line-numbers language-jsx"}
          tabIndex={0}
        >
          <code>
            <span className="tab">{"\t"}</span>
            <span className={codeExample["code__operator"]}>&lt;</span>
            <span className={codeExample["code__red"]}>Heading</span>
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
            <span className={codeExample["code__operator"]}>?=</span>
            <span className={codeExample["code__attr-value"]}>string</span>
            <span className={codeExample["code__operator"]}>?</span>
            <span className={codeExample["code__operator"]}>=</span>
            <span className={codeExample["code__attr-value"]}>boolean</span>
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
            <span className={codeExample["code__red"]}>Heading</span>
            <span className={codeExample["code__operator"]}>&gt;</span>
          </code>
        </pre>
      </section>
    </div>
  );
};
export default HeadingPage;
