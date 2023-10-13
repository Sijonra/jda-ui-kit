import "./App.scss";
import Button from "./components/Button/Button";
import plus from "./assets/svg/plus.svg";
console.log(plus);
function App() {
  return (
    <>
      <div className="FONT">Label</div>
      <Button icon={true} text="Label" type={"primary"} />
      <Button icon={true} text="Label" type={"regular"} />
      <Button icon={true} text="Label" type={"minimal"} />
      <Button icon={true} text="Label" type={"danger"} />
    </>
  );
}

export default App;
