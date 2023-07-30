import { useState } from "react";
import "./App.css";
import Loader from "./components/Loader";

interface DataIp {
  ip: string;
}

function App(): JSX.Element {
  const [data, setData] = useState<DataIp | null>(null);
  const [loader, setLoader] = useState<boolean>(false);

  const getAdressIp = async () => {
    setLoader((load) => !load);
    const response = await fetch("https://ip4.seeip.org/json");
    const dataResponse = await response.json();
    console.log(dataResponse);
    const { ip } = dataResponse;
    setData({ ip });
    setLoader((load) => !load);
  };

  return (
    <div>
      <div>
        <button onClick={() => getAdressIp()}>Exibir ip</button>
      </div>
      {loader ? (
        <Loader />
      ) : data ? (
        <p>{data.ip}</p>
      ) : !data ? null : (
        <p>Erro!</p>
      )}
    </div>
  );
}

export default App;
