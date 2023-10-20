import style from "./ToastPage.module.scss";
import Menu from "../../components/Menu/Menu";
import Toast from "../../components/Toast/Toast";

const ToastPage = () => {
  return (
    <div className={style["toast-page"]}>
      <Menu />
      <Toast type="success" title="You have successfully enabled Personas." />
      <Toast type="warning" title="You have successfully enabled Personas." />
      <Toast type="danger" title="You have successfully enabled Personas." />
      <Toast
        type="info"
        title="You have successfully enabled Personas."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  );
};

export default ToastPage;
