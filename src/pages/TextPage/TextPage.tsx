import Menu from "../../components/Menu/Menu";
import Text from "../../components/Text/Text";

import style from "./TextPage.module.scss";

const TextPage = () => {
  return (
    <div className={style['text-page']}>
      <Menu /> 

      <section>
        <Text type="small" weight="default">Text / 300 / Default</Text>
        <Text type="small" weight="md">Text / 300 / Default</Text>
        <Text type="small" weight="semibold">Text / 300 / Default</Text>
      </section>

      <section>
        <Text type="medium" weight="default">Text / 300 / Default</Text>
        <Text type="medium" weight="md">Text / 300 / Default</Text>
        <Text type="medium" weight="semibold">Text / 300 / Default</Text>
      </section>

      <section>
        <Text type="large" weight="default">Text / 300 / Default</Text>
        <Text type="large" weight="md">Text / 300 / Default</Text>
        <Text type="large" weight="semibold">Text / 300 / Default</Text>
      </section>

    </div>
  );
};

export default TextPage;
