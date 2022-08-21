import Image from 'next/image';
import Link from 'next/link';

type JumbotronProps = {
  title: string;
  backgroundImage: string;
  paragraph?: string;
  showButtons?: boolean;
};

export const Jumbotron = ({
  title,
  backgroundImage,
  paragraph,
  showButtons,
}: JumbotronProps) => {
  return (
    <section
      className={`bg-green-900 flex justify-center py-24 bg-center bg-cover relative`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        paddingTop: paragraph ? '8rem' : '8rem',
        paddingBottom: paragraph ? '8rem' : '8rem',
      }}
    >
      <div className="bg-gradient-to-br from-black to-gray-500 absolute inset-0 opacity-50" />

      <div className="container px-4 flex gap-4 flex-col relative">
        <h1 className="text-white text-6xl">{title}</h1>
        {paragraph && (
          <p className="text-white text-xl w-1/2 leading-9">{paragraph}</p>
        )}
        {showButtons && (
          <div className="flex gap-4">
            <Link href="/what-is-operation-streamline">
              <button className="text-white bg-blue-900 p-4 px-8 text-xl">
                Learn More
              </button>
            </Link>
            <Link href="/what-you-can-do">
              <button className="text-gray-800 bg-white p-4 px-8 text-xl">
                What You Can Do
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
