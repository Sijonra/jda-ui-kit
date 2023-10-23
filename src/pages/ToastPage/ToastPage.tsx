import codeExample from "../../styles/codeExample.module.scss";
import style from "./ToastPage.module.scss";
import Menu from "../../components/Menu/Menu";
import Toast from "../../components/Toast/Toast";

const ToastPage = () => {
  return (
    <div className={style["toast-page"]}>
      <Menu page="toast" />
      <h1 className={style["toast-page__title"]}>UI Kit / Toast</h1>
      <h5 className={style["toast-page__subtitle"]}>
        There are 4 types of toasts:
      </h5>

      <section
        className={
          style["toasts-primary"] + " " + style["toast-page__examples"]
        }
      >
        <Toast type="success" title="success" />
        <Toast type="warning" title="warning" />
        <Toast type="danger" title="danger" />
        <Toast type="info" title="info" />
      </section>

      <section className={style["toast-page__examples"]}>
        <h5 className={style["toast-page__subtitle"]}>
          Also you can add additional text:
        </h5>
        <Toast
          type="info"
          title="You have successfully enabled Personas."
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </section>

      <section className={style["toast-page__examples"]}>
        <h5 className={style["toast-page__subtitle"]}>More examples:</h5>
        <Toast type="success" title="You have successfully enabled Personas." />
        <Toast type="warning" title="You have successfully enabled Personas." />
        <Toast type="danger" title="You have successfully enabled Personas." />
        <Toast type="info" title="You have successfully enabled Personas." />
      </section>

      <section>
        <h5 className={style["toast-page__subtitle"]}>
          How to use it in your code:
        </h5>
        <pre
          className={codeExample["code"] + " " + "line-numbers language-jsx"}
          tabIndex={0}
        >
          <code>
            <span className="tab">{"\t"}</span>
            <span className={codeExample["code__operator"]}>&lt;</span>
            <span className={codeExample["code__red"]}>Toast</span>
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
              success || warning || danger || info
            </span>
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
            <span className={codeExample["code__attr-name"]}>text</span>
            <span className={codeExample["code__operator"]}>?</span>
            <span className={codeExample["code__operator"]}>=</span>
            <span className={codeExample["code__attr-value"]}>string</span>
            <span className="lf">{"\n"}</span>
            <span className="tab">{"\t"}</span>
            <span className={codeExample["code__operator"]}>/</span>
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

export default ToastPage;
