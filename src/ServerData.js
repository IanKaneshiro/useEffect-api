import { useEffect, useState } from "react";

const ServerData = () => {
  const [ServerData, setServerData] = useState();

  useEffect(() => {
    const fetchFortnite = async () => {
      const data = await fetch("https://fortnite-api.com/v2/news");
      const response = await data.json();
      setServerData(response.data.br.motds);
    };
    fetchFortnite();
  }, []);

  if (!ServerData) return <h1>No Data To Display</h1>;

  return (
    <>
      {ServerData.map((data) => {
        return (
          <div className="serverContainer" key={`API${data.id}`}>
            <h1 className="title">{data.title}</h1>
            <h2 className="body">{data.body}</h2>
            <img className="img" src={data.image} alt={data.title} />
          </div>
        );
      })}
    </>
  );
};

export default ServerData;
