import { Verse } from "../interfaces/promiseBox";

type ContentProps = {
  verse: Verse;
};

const Content: React.FC<ContentProps> = ({ verse }) => {
  return (
    <div>
      {verse && (
        <div className="py-12  max-w-4xl mx-auto text-center">
          <p className="text-3xl">{verse.versiculo}</p>
          <p className="font-bold py-4 text-xl">{verse.localizacao}</p>
        </div>
      )}
    </div>
  );
};
export default Content;
