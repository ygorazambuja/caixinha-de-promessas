import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";
import { useEffectOnce, useIsMounted, useUpdateEffect } from "usehooks-ts";
import { LoadingSpinner } from "../components/LoadingSpinner";
import YButton from "../components/YButton";
import { Verse } from "../interfaces/promiseBox";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  const [message, setMessage] = useState("");
  const [data, setData] = useState<Verse>({} as Verse);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const isMounted = useIsMounted();
  const fetchPromise = async () => {
    setIsLoading(true);
    const randomVerse = await axios.get("/api/random-versicle");
    const { versiculo, localizacao } = randomVerse.data;

    setData({
      versiculo,
      localizacao,
    });
  };

  const fetchAnotherPromise = () => router.reload();

  const buildMessageRequest = useCallback(async () => {
    setMessage("");
    const { versiculo, localizacao } = data;
    const messages = [
      {
        role: "system",
        content: `${versiculo} - ${localizacao}, segundo essa versiculo, explique em poucas palavras o seu conteudo, e crie uma aplicação no dia a dia`,
      },
    ];

    const response = await axios.post("/api/chat", {
      messages,
    });

    setMessage(response.data);
    setIsLoading(false);
  }, [data]);

  useUpdateEffect(() => {
    buildMessageRequest();
  }, [data]);

  useEffectOnce(() => {
    fetchPromise();
  });

  if (!isMounted) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen flex flex-col" suppressHydrationWarning>
      <Header onLogoClick={fetchAnotherPromise} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 text-center flex flex-col">
        {data && <Content verse={data} />}
        {isLoading && (
          <div className="flex justify-center py-12">
            <LoadingSpinner />
          </div>
        )}
        {message && !isLoading && (
          <div className="py-4 px-12 text-sm">{message}</div>
        )}
        <div className="flex flex-row max-w-sm justify-center items-center mx-auto py-12 gap-4">
          <WhatsappShareButton
            title="Caixinha de Promessas"
            separator=" "
            url={`https://caixinhapromessas.vercel.app/versiculo/${data.localizacao}`}
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <FacebookShareButton
            url={`https://caixinhapromessas.vercel.app/versiculo/${data.localizacao}`}
            hashtag="Caixinha de Promessas"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton
            url={`https://caixinhapromessas.vercel.app/versiculo/${data.localizacao}`}
          >
            <XIcon size={32} round />
          </TwitterShareButton>
          {/* <div className="flex flex-col">
            <FaXTwitter size={24} />
          </div>
          <div className="flex flex-col">
            <FaFacebook size={24} />
          </div>
          <div className="flex flex-col">
            <FaWhatsapp size={24} />
          </div> */}
        </div>
        <div className="flex flex-row max-w-sm justify-center items-center mx-auto py-12">
          <YButton
            title="Nova Promessa"
            onClick={() => fetchAnotherPromise()}
          />
        </div>{" "}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
