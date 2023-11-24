import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import YButton from "../../components/YButton";
import db from "../../db/promise-box.json";
import { Verse } from "../../interfaces/promiseBox";
import Content from "../../sections/Content";
import Footer from "../../sections/Footer";
import Header from "../../sections/Header";

export function getServerSideProps(context: GetServerSidePropsContext) {
  const routeParam = context.query.verse;

  const verse = db.filter((verse) => {
    return verse.localizacao === routeParam;
  });

  if (verse.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      verse: verse[0],
    },
  };
}

export default function VersePage({ verse }: { verse: Verse }) {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col">
      <Header onLogoClick={() => {}} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 text-center flex flex-col">
        <Content verse={verse} />

        <div className="flex flex-row max-w-sm justify-center items-center mx-auto py-12">
          <YButton
            title="Nova Promessa"
            onClick={() => {
              router.push("/");
            }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
