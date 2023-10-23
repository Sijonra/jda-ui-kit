import style from "./CardPage.module.scss";
import codeExample from "../../styles/codeExample.module.scss";
import Card from "../../components/Card/Card";
import Menu from "../../components/Menu/Menu";

const CardPage = () => {
  return (
    <div className={style["card-page"]}>
      <Menu page="cards" />
      <h1 className={style["card-page__title"]}>UI Kit / Cards</h1>
      <h5 className={style["card-page__subtitle"]}>
        Default cards with title and subtitle:{" "}
      </h5>
      <section
        className={style["card-page__default"] + " " + style["card-default"]}
      >
        <Card
          elevation={0}
          title="Card / Elevation 0"
          subtitle="Floating Cards"
        />
        <Card
          elevation={1}
          title="Card / Elevation 1"
          subtitle="Floating Cards"
        />
        <Card
          elevation={2}
          title="Card / Elevation 2"
          subtitle="Floating Cards"
        />
        <Card
          elevation={3}
          title="Card / Elevation 3"
          subtitle="Floating Cards"
        />
      </section>
      <h5 className={style["card-page__subtitle"]}>
        Card with your own styles:
      </h5>
      <section
        className={style["custom-card"] + " " + style["card-page__custom"]}
      >
        <Card
          className={style["custom-card__item"]}
          elevation={1}
          title="TITLE"
          subtitle="Subtitle"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 1.00437H14C14.55 1.00437 15 1.45409 15 2.00375V3.00312H1V2.00375C1 1.45409 1.45 1.00437 2 1.00437H6C6 0.454716 6.45 0.00499725 7 0.00499725H9C9.55 0.00499725 10 0.454716 10 1.00437ZM14.5 4.0025H1.5C1.22 4.0025 1 4.22236 1 4.50219C1 4.78201 1.22 5.00187 1.5 5.00187H2V14.9956C2 15.5453 2.45 15.995 3 15.995H13C13.55 15.995 14 15.5453 14 14.9956V5.00187H14.5C14.78 5.00187 15 4.78201 15 4.50219C15 4.22236 14.78 4.0025 14.5 4.0025ZM6 12.9969C6 13.5465 5.55 13.9963 5 13.9963C4.45 13.9963 4 13.5465 4 12.9969V7.00063C4 6.45097 4.45 6.00125 5 6.00125C5.55 6.00125 6 6.45097 6 7.00063V12.9969ZM8 13.9963C8.55 13.9963 9 13.5465 9 12.9969V7.00063C9 6.45097 8.55 6.00125 8 6.00125C7.45 6.00125 7 6.45097 7 7.00063V12.9969C7 13.5465 7.45 13.9963 8 13.9963ZM12 12.9969C12 13.5465 11.55 13.9963 11 13.9963C10.45 13.9963 10 13.5465 10 12.9969V7.00063C10 6.45097 10.45 6.00125 11 6.00125C11.55 6.00125 12 6.45097 12 7.00063V12.9969Z"
              fill="#66788A"
            />
          </svg>
        </Card>
      </section>
      <h5 className={style["card-page__subtitle"]}>
        How to use it in your code:{" "}
      </h5>
      <section>
        <pre
          className={codeExample["code"] + " " + "line-numbers language-jsx"}
          tabIndex={0}
        >
          <code>
            <span className="tab">{"\t"}</span>
            <span className={codeExample["code__operator"]}>&lt;</span>
            <span className={codeExample["code__red"]}>Card</span>
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
            <span className={codeExample["code__attr-name"]}>elevation</span>
            <span className={codeExample["code__operator"]}>=</span>
            <span className={codeExample["code__attr-value"]}>number</span>
            <span className="lf">{"\n"}</span>
            <span className="tab">{"\t"}</span>
            <span className="tab">{"\t"}</span>
            <span className={codeExample["code__attr-name"]}>title</span>
            <span className={codeExample["code__operator"]}>?</span>
            <span className={codeExample["code__operator"]}>=</span>
            <span className={codeExample["code__attr-value"]}>string</span>
            <span className="lf">{"\n"}</span>
            <span className="tab">{"\t"}</span>
            <span className="tab">{"\t"}</span>
            <span className={codeExample["code__attr-name"]}>subtitle</span>
            <span className={codeExample["code__operator"]}>?</span>
            <span className={codeExample["code__operator"]}>=</span>
            <span className={codeExample["code__attr-value"]}>string</span>
            <span className="lf">{"\n"}</span>
            <span className="tab">{"\t"}</span>
            <span className={codeExample["code__operator"]}>&gt;</span>
            <span className="token lf">{"\n"}</span>
            <span className="token tab">{"\t"}</span>
            <span className="tab">{"\t"}</span>
            your content, text, img, svg, or react node
            <span className="token lf">{"\n"}</span>
            <span className="tab">{"\t"}</span>
            <span className={codeExample["code__operator"]}>&lt;/</span>
            <span className={codeExample["code__red"]}>Card</span>
            <span className={codeExample["code__operator"]}>&gt;</span>
            <span
              className={
                codeExample["line-numbers"] +
                " " +
                codeExample["code__line-numbers"]
              }
            >
              <span
                aria-hidden="true"
                className={codeExample["line-numbers__rows"]}
              >
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
              </span>
            </span>
          </code>
        </pre>
      </section>
    </div>
  );
};

export default CardPage;
