import "./App.scss";
import Button from "./components/Button/Button";
import plus from "./assets/svg/plus.svg";
console.log(plus);
function App() {
  return (
    <>
      <Button icon={true} text="LabelKKK" type={"primary"} />
      <Button icon={true} text="Label" type={"regular"} />
      <Button icon={true} text="Label" type={"minimal"} />
      <Button icon={true} text="Label" type={"danger"} />
    </>
  );
}

export default App;
