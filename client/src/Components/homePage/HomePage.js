import Header from "./Header";
import News from "./News";
import Stats from "./Stats";
import Contact from "./Contact";
import Welcome from "./Welcome";

function HomePage() {
  return (
    <>
      <Header />
      <Welcome/>
      <News />
      <Stats />
      <Contact />
    </>
  );
}

export default HomePage;
