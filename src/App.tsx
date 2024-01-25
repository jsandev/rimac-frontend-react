import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Onboarding } from "./components/Onboarding";

import BlurPurple from "./assets/blur-purple.svg?react";
import BlurGreen from "./assets/blur-green.svg?react";

function App() {
  return (
    <div className="container">
      <div className="blur-purple">
        <BlurPurple />
      </div>
      <div className="blur-green">
        <BlurGreen />
      </div>
      <Header />
      <main>
        <Onboarding />
        <Footer />
      </main>
    </div>
  );
}

export default App;
