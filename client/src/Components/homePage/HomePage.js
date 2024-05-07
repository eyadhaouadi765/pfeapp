import Header from "./Header";
import News from "./News";
import Contact from "./Contact";
import Welcome from "./Welcome";

function HomePage() {
  return (
    <>
      <Header />
      <Welcome/>
      <News />
      <Contact />
    </>
  );
}

export default HomePage;
