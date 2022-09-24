import NavigationBar from "./components/NavigationBar"
import Welcome from "./pages/homepage/components/Welcome"
import GamesList from "./pages/homepage/components/GamesList"

export default function App() {
  return (
    <>
      <NavigationBar />
      <Welcome />
      <GamesList />
    </>
  );
}