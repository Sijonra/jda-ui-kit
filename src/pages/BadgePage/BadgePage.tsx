import Menu from "../../components/Menu/Menu";
import Badge from "../../components/Badge/Badge";

import style from "./BadgePage.module.scss";
import codeExample from "../../styles/codeExample.module.scss";

const BadgePage = () => {
  return (
    <div className={style["badge-page"]}>
      <Menu />
      <h1 className={style["badge-page__title"]}>UI Kit / Badges</h1>
      <section>
        <h5 className={style["badge-page__subtitle"]}>Solid badge:</h5>
        <Badge type="badge" theme="solid" color="neutral" text="badge" />
        <Badge type="badge" theme="solid" color="green" text="badge" />
        <Badge type="badge" theme="solid" color="blue" text="badge" />
        <Badge type="badge" theme="solid" color="red" text="badge" />
        <Badge type="badge" theme="solid" color="orange" text="badge" />
        <Badge type="badge" theme="solid" color="purple" text="badge" />
        <Badge type="badge" theme="solid" color="yellow" text="badge" />
        <Badge type="badge" theme="solid" color="teal" text="badge" />
      </section>

      <section>
        <h5 className={style["badge-page__subtitle"]}>Subtle badge:</h5>
        <Badge type="badge" theme="subtle" color="neutral" text="badge" />
        <Badge type="badge" theme="subtle" color="green" text="badge" />
        <Badge type="badge" theme="subtle" color="blue" text="badge" />
        <Badge type="badge" theme="subtle" color="red" text="badge" />
        <Badge type="badge" theme="subtle" color="orange" text="badge" />
        <Badge type="badge" theme="subtle" color="purple" text="badge" />
        <Badge type="badge" theme="subtle" color="yellow" text="badge" />
        <Badge type="badge" theme="subtle" color="teal" text="badge" />
      </section>

      <section>
        <h5 className={style["badge-page__subtitle"]}>Solid pills:</h5>
        <Badge type="pill" theme="solid" color="neutral" text="48" />
        <Badge type="pill" theme="solid" color="green" text="48" />
        <Badge type="pill" theme="solid" color="blue" text="48" />
        <Badge type="pill" theme="solid" color="red" text="48" />
        <Badge type="pill" theme="solid" color="orange" text="48" />
        <Badge type="pill" theme="solid" color="purple" text="48" />
        <Badge type="pill" theme="solid" color="yellow" text="48" />
        <Badge type="pill" theme="solid" color="teal" text="48" />
      </section>

      <section>
        <h5 className={style["badge-page__subtitle"]}>Subtle pills:</h5>
        <Badge type="pill" theme="subtle" color="neutral" text="48" />
        <Badge type="pill" theme="subtle" color="green" text="48" />
        <Badge type="pill" theme="subtle" color="blue" text="48" />
        <Badge type="pill" theme="subtle" color="red" text="48" />
        <Badge type="pill" theme="subtle" color="orange" text="48" />
        <Badge type="pill" theme="subtle" color="purple" text="48" />
        <Badge type="pill" theme="subtle" color="yellow" text="48" />
        <Badge type="pill" theme="subtle" color="teal" text="48" />
      </section>

      <section>
        <h5 className={style["badge-page__subtitle"]}>
          Badge with your classNames
        </h5>
        <Badge
          type="badge"
          theme="solid"
          color="yellow"
          text="badge with custom className"
          className={style.badge}
        />
      </section>

      <h5 className={style["badge-page__subtitle"]}>
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
            <span className={codeExample["code__red"]}>Badge</span>
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
              "badge" || "solid"
            </span>
            <span className="lf">{"\n"}</span>
            <span className="tab">{"\t"}</span>
            <span className="tab">{"\t"}</span>
            <span className={codeExample["code__attr-name"]}>theme</span>
            <span className={codeExample["code__operator"]}>?</span>
            <span className={codeExample["code__operator"]}>=</span>
            <span className={codeExample["code__attr-value"]}>
              "solid" || "subtle"
            </span>
            <span className="lf">{"\n"}</span>
            <span className="tab">{"\t"}</span>
            <span className="tab">{"\t"}</span>
            <span className={codeExample["code__attr-name"]}>color</span>
            <span className={codeExample["code__operator"]}>?</span>
            <span className={codeExample["code__operator"]}>=</span>
            <span className={codeExample["code__attr-value"]}>
              "neutral" || "green" || "blue" || "red" || "orange" || "purple" ||
              "yellow" || "teal"
            </span>
            <span className="token lf">{"\n"}</span>
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

export default BadgePage;
