import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Onboarding } from "./components/Onboarding";
import { Plans } from "./components/Plans";

import { useSelector } from "./store";

import BlurPurple from "./assets/blur-purple.svg?react";
import BlurGreen from "./assets/blur-green.svg?react";

function App() {
  const { currentStep } = useSelector((state) => state.navigation);

  return (
    <div className="container">
      {currentStep === 0 && (
        <>
          <div className="blur-purple">
            <BlurPurple />
          </div>
          <div className="blur-green">
            <BlurGreen />
          </div>
        </>
      )}
      <Header />
      <main>
        {currentStep === 0 ? (
          <>
            <Onboarding />
            <Footer />
          </>
        ) : (
          <Plans />
        )}
      </main>
    </div>
  );
}

export default App;
