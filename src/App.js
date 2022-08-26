import "./App.css";
import Render from "./components/Render/Render";
import { renderData } from "./components/data/data";

function App() {
  return (
    <div className="App">
      {renderData.map((el) => (
        <Render
          id={el.id}
          img={el.url}
          title={el.title}
        />
      ))}
    </div>
  );
}

export default App;
