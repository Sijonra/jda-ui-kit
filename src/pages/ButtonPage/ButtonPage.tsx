import style from "./ButtonPage.module.scss";
import Button from "../../components/Button/Button";

const ButtonPage = () => {
  return (
    <div className={style["button-page"]}>
      <h1 className={style["button-page__title"]}>UI Kit / Button</h1>
      <h5 className={style["button-page__subtitle"]}>Button Variants: </h5>
      <section className={style["button-page__variants"]}>
        <Button type="primary" text="Button Primary" icon={false} />
        <Button type="regular" text="Button regular" icon={false} />
        <Button type="minimal" text="Button minimal" icon={false} />
        <Button type="danger" text="Button danger" icon={false} />
      </section>
    </div>
  );
};

export default ButtonPage;
