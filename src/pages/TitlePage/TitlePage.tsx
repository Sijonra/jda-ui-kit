import Menu from "../../components/Menu/Menu";
import style from "./TitlePage.module.scss";
import Heading from "../../components/Heading/Heading";

const TitlePage = () => {
  return (
    <section className={style["title-page"]}>
      <Menu />
      <Heading type="jumbo" className={style["title-page__title"]}>
        UI KIT
      </Heading>
      <Heading type={"introduction"} className={style["title-page__subtitle"]}>
        Author: Davydenko Ilya Mikhailovich
      </Heading>
    </section>
  );
};

export default TitlePage;
