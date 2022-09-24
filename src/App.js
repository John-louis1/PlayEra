import NavigationBar from "./components/NavigationBar"
import Welcome from "./pages/homepage/components/Welcome"
import GamesList from "./pages/homepage/components/GamesList"
import Information from "./pages/homepage/components/Information"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <NavigationBar />
      <Welcome />
      <GamesList />
      <Information />
      <Footer />
    </>
  );
}