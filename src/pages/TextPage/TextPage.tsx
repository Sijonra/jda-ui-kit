import Menu from "../../components/Menu/Menu";
import Text from "../../components/Text/Text";

import style from "./TextPage.module.scss";
import codeExample from "../../styles/codeExample.module.scss";

const TextPage = () => {
  return (
    <div className={style["text-page"]}>
      <Menu page="text" />

      <h1 className={style["text-page__title"]}>UI Kit / Headings</h1>
      <h5 className={style["text-page__subtitle"]}>Types of text:</h5>

      <section className={style["text-page__text"]}>
        <Text type="small" weight="default">
          Text type="small"; weight="default" / 12px / font-weight: 400;
        </Text>
        <Text type="small" weight="md">
          Text type="small"; weight="md" / 12px / font-weight: 500;
        </Text>
        <Text type="small" weight="semibold">
          Text type="small"; weight="semibold" / 12px / font-weight: 600;
        </Text>
      </section>

      <section className={style["text-page__text"]}>
        <Text type="medium" weight="default">
          Text type="medium"; weight="default" / 12px / font-weight: 400;
        </Text>
        <Text type="medium" weight="md">
          Text type="medium"; weight="md" / 12px / font-weight: 500;
        </Text>
        <Text type="medium" weight="semibold">
          Text type="medium"; weight="semibold" / 12px / font-weight: 600;
        </Text>
      </section>

      <section className={style["text-page__text"]}>
        <Text type="large" weight="default">
          Text type="large"; weight="default" / 12px / font-weight: 400;
        </Text>
        <Text type="large" weight="md">
          Text type="large"; weight="md" / 12px / font-weight: 500;
        </Text>
        <Text type="large" weight="semibold">
          Text type="large"; weight="semibold" / 12px / font-weight: 600;
        </Text>
      </section>

      <section>
        <pre
          className={codeExample["code"] + " " + "line-numbers language-jsx"}
          tabIndex={0}
        >
          <code>
            <span className="tab">{"\t"}</span>
            <span className={codeExample["code__operator"]}>&lt;</span>
            <span className={codeExample["code__red"]}>Text</span>
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
            <span className="tab">{"\t"}</span>
            <span className={codeExample["code__attr-name"]}>weight</span>
            <span className={codeExample["code__operator"]}>=</span>
            <span className={codeExample["code__attr-value"]}>
              default || md || semibold
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
            content
            <span className="token lf">{"\n"}</span>
            <span className="tab">{"\t"}</span>
            <span className={codeExample["code__operator"]}>&lt;/</span>
            <span className={codeExample["code__red"]}>Text</span>
            <span className={codeExample["code__operator"]}>&gt;</span>
          </code>
        </pre>
      </section>
    </div>
  );
};

export default TextPage;
