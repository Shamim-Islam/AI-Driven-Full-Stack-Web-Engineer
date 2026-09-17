import { Suspense, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Players from "./components/Players/Players";
import type { PlayerType } from "./components/types/PlayerType";

const playersFetch = async (): Promise<PlayerType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const playersPromise = playersFetch();
  const [coin, setCoin] = useState(5000);

  return (
    <>
      <Navbar coin={coin} />
      <Hero></Hero>
      <Suspense fallback={<div>Loading...</div>}>
        <Players
          playersPromise={playersPromise}
          coin={coin}
          setCoin={setCoin}
        />
      </Suspense>
    </>
  );
}

export default App;
