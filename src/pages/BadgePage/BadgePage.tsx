import Menu from "../../components/Menu/Menu";
import Badge from "../../components/Badge/Badge";

import style from "./BadgePage.module.scss";

const BadgePage = () => {
  return (
    <div className={style["badge-page"]}>
      <Menu />
      <Badge type="badge" theme="subtle" color="neutral" text="badge" />
      <Badge type="badge" theme="subtle" color="green" text="badge" />
      <Badge type="badge" theme="subtle" color="blue" text="badge" />
      <Badge type="badge" theme="subtle" color="red" text="badge" />
      <Badge type="badge" theme="subtle" color="orange" text="badge" />
      <Badge type="badge" theme="subtle" color="purple" text="badge" />
      <Badge type="badge" theme="subtle" color="yellow" text="badge" />
      <Badge type="badge" theme="subtle" color="teal" text="badge" />

      <Badge type="badge" theme="solid" color="neutral" text="badge" />
      <Badge type="badge" theme="solid" color="green" text="badge" />
      <Badge type="badge" theme="solid" color="blue" text="badge" />
      <Badge type="badge" theme="solid" color="red" text="badge" />
      <Badge type="badge" theme="solid" color="orange" text="badge" />
      <Badge type="badge" theme="solid" color="purple" text="badge" />
      <Badge type="badge" theme="solid" color="yellow" text="badge" />
      <Badge type="badge" theme="solid" color="teal" text="badge" />

      <Badge type="pill" theme="subtle" color="neutral" text="48" />
      <Badge type="pill" theme="subtle" color="green" text="48" />
      <Badge type="pill" theme="subtle" color="blue" text="48" />
      <Badge type="pill" theme="subtle" color="red" text="48" />
      <Badge type="pill" theme="subtle" color="orange" text="48" />
      <Badge type="pill" theme="subtle" color="purple" text="48" />
      <Badge type="pill" theme="subtle" color="yellow" text="48" />
      <Badge type="pill" theme="subtle" color="teal" text="48" />

      <Badge type="pill" theme="solid" color="neutral" text="48" />
      <Badge type="pill" theme="solid" color="green" text="48" />
      <Badge type="pill" theme="solid" color="blue" text="48" />
      <Badge type="pill" theme="solid" color="red" text="48" />
      <Badge type="pill" theme="solid" color="orange" text="48" />
      <Badge type="pill" theme="solid" color="purple" text="48" />
      <Badge type="pill" theme="solid" color="yellow" text="48" />
      <Badge type="pill" theme="solid" color="teal" text="48" />
    </div>
  );
};

export default BadgePage;
