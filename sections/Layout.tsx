import Header from "./Header";
import Footer from "./Footer";
import useSWR from "swr";
import { Verse } from "../interfaces/promiseBox";
import { fetcher } from "../utils/fetcher";
import Content from "./Content";
import YButton from "../components/YButton";

const Layout = () => {
  const { data, mutate } = useSWR<Verse, any>("/api/random-versicle", fetcher);

  const fetchAnotherPromise = () => mutate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header onLogoClick={fetchAnotherPromise} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 text-center">
        {data && <Content verse={data} />}
        {!data && <div>Loading...</div>}
        <YButton title="Nova Promessa" onClick={() => fetchAnotherPromise()} />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
