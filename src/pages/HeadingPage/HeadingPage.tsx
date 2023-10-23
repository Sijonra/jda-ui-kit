import Menu from "../../components/Menu/Menu";
import Heading from "../../components/Heading/Heading";
import style from "./HeadingPage.module.scss";

const HeadingPage = () => {
  return (
    <div className={style["heading-page"]}>
      <Menu /> 

      <Heading type="jumbo">
        Jumbo Titles. When You Feel Funky
      </Heading>

      <Heading type="oversized">
        Oversized Screen Titles
      </Heading>

      <Heading type="introduction">
        Empty States and Feature Introductions
      </Heading>

      <Heading type="key">
        Headings That Identify Key Functionality
      </Heading>

      <Heading type="sub">
        Sub-section and card headings.
      </Heading>

      <Heading type="deep">
        Deep headings and for highlighting important pieces of information.
      </Heading>

      <Heading type="list-item">
        Heading up a group of list items.
      </Heading>

      <Heading type="low">
        Low level headings.
      </Heading>

      <Heading type="lowest">
        Lowest level headings. Used to group items in a sidebar.
      </Heading>
    </div>
  );
};
export default HeadingPage;
