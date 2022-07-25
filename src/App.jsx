import WheaterApp from "./components/WheaterApp";
import { WheatherProvider } from "./context/WheatherProvider";

function App() {
  return (
    <WheatherProvider>
      <WheaterApp/>
    </WheatherProvider>
  )
}

export default App
