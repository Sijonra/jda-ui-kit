import style from "./ButtonPage.module.scss";
import codeExample from "../../styles/codeExample.module.scss";
import Button from "../../components/Button/Button";
import Menu from "../../components/Menu/Menu";

const ButtonPage = () => {
  return (
    <div className={style["button-page"]}>
      <Menu />
      <h1 className={style["button-page__title"]}>UI Kit / Button</h1>
      <h5 className={style["button-page__subtitle"]}>Button Variants: </h5>
      <section
        className={
          style["button-page__variants"] + " " + ["button-page__themes"]
        }
      >
        <Button type="primary">Button Primary</Button>
        <Button type="regular">Button Regular</Button>
        <Button type="minimal">Button Minimal</Button>
        <Button type="danger">Button Danger</Button>
      </section>
      <h5 className={style["button-page__subtitle"]}>
        You can add 2 types of svg icons to your button:
      </h5>
      <section
        className={
          style["button-page__variants"] + " " + ["button-page__icons"]
        }
      >
        <Button type="primary" plusLeft={true}>
          Plus Left
        </Button>
        <Button type="primary" plusRight={true}>
          Plus Right
        </Button>
        <Button type="primary" iDownLeft={true}>
          Down Left
        </Button>
        <Button type="primary" iDownRight={true}>
          Down Right
        </Button>
      </section>
      <h5 className={style["button-page__subtitle"]}>
        Also you can add your custom class name with your own styles and your
        custom svg icon:
      </h5>
      <section
        className={
          style["button-page__variants"] + " " + ["button-page__classes"]
        }
      >
        <Button type="primary" className={"button-page__classes_green"}>
          Green Button
        </Button>
        <Button type="primary" className="button-page__classes_round">
          Round Button
        </Button>

        <Button type="primary" className="button-page__classes_save">
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
              d="M15.71 2.29L13.71 0.29C13.53 0.11 13.28 0 13 0H12V6H4V0H1C0.45 0 0 0.45 0 1V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V3C16 2.72 15.89 2.47 15.71 2.29ZM14 15H2V9C2 8.45 2.45 8 3 8H13C13.55 8 14 8.45 14 9V15ZM9 1H11V5H9V1Z"
              fill="#66788A"
            />
          </svg>
        </Button>
        <Button type="primary" className="button-page__classes_menu">
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
              d="M0 2C0 0.9 0.9 0 2 0C3.1 0 4 0.9 4 2C4 3.1 3.1 4 2 4C0.9 4 0 3.1 0 2ZM15 3H6C5.45 3 5 2.55 5 2C5 1.45 5.45 1 6 1H15C15.55 1 16 1.45 16 2C16 2.55 15.55 3 15 3ZM0 8C0 6.9 0.9 6 2 6C3.1 6 4 6.9 4 8C4 9.1 3.1 10 2 10C0.9 10 0 9.1 0 8ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12ZM6 7H15C15.55 7 16 7.45 16 8C16 8.55 15.55 9 15 9H6C5.45 9 5 8.55 5 8C5 7.45 5.45 7 6 7ZM15 13H6C5.45 13 5 13.45 5 14C5 14.55 5.45 15 6 15H15C15.55 15 16 14.55 16 14C16 13.45 15.55 13 15 13Z"
              fill="#66788A"
            />
          </svg>
        </Button>
      </section>
      <h5 className={style["button-page__subtitle"]}>
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
            <span className={codeExample["code__red"]}>Button</span>
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
            <span className={codeExample["code__attr-value"]}>
              primary | regular | minimal | danger
            </span>
            <span className="lf">{"\n"}</span>
            <span className="tab">{"\t"}</span>
            <span className="tab">{"\t"}</span>
            <span className={codeExample["code__attr-name"]}>
              plusLeft | plusRight
            </span>
            <span className={codeExample["code__operator"]}>?</span>
            <span className={codeExample["code__operator"]}>=</span>
            <span className={codeExample["code__attr-value"]}>boolean</span>
            <span className="lf">{"\n"}</span>
            <span className="tab">{"\t"}</span>
            <span className="tab">{"\t"}</span>
            <span className={codeExample["code__attr-name"]}>
              iDownLeft | iDownRight
            </span>
            <span className={codeExample["code__operator"]}>?</span>
            <span className={codeExample["code__operator"]}>=</span>
            <span className={codeExample["code__attr-value"]}>boolean</span>
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
            <span className={codeExample["code__red"]}>Button</span>
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

export default ButtonPage;
