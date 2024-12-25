import Card from "./components/Card";
import { cardItens } from "../constants";
import '../global.css';

function App() {
  return (
    <div className="App">
      {
        cardItens.map((item) => (
          <Card
            key={item.url}
            {...item}
          />
        ))
      }
    </div>
  );
}

export default App;
