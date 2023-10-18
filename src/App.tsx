import "./App.scss";
import Card from "./components/Card/Card";
import ButtonPage from "./pages/ButtonPage/ButtonPage";
import plus from "./assets/svg/plus.svg";
console.log(plus);
function App() {
  return (
    <>
      <ButtonPage />
      <Card
        elevation={0}
        title="Card / Elevation 0"
        subtitle="Floating Cards"
      />
      <Card
        elevation={1}
        title="Card / Elevation 1"
        subtitle="Floating Cards"
      />
      <Card
        elevation={2}
        title="Card / Elevation 2"
        subtitle="Floating Cards"
      />
      <Card
        elevation={3}
        title="Card / Elevation 3"
        subtitle="Floating Cards"
      />
    </>
  );
}

export default App;
