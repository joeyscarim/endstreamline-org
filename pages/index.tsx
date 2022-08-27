import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Jumbotron } from '../components/Jumbotron';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Jumbotron
        title="End Streamline"
        backgroundImage="/images/home-jumbotron.jpg"
        paragraph="The End Streamline Coalition founded in Tucson, Arizona in 2013 as a
        group of individuals and organizations committed to opposing the
        criminalization of immigrants and the use of Streamline or other
        similar en mass court systems."
        showButtons
      />

      {/* <main className="container mx-auto"> */}
      {/* section: our mission */}
      <section className="section-white p-5 py-12">
        <div className="my-24 flex flex-col items-center">
          <h2>Our Mission</h2>

          <div className="mt-8">
            We stand for ending:
            <ul>
              <li>Criminalization of migration</li>
              <li>Prosecutions for illegal entry and re-entry</li>
              <li>En mass court systems that deny due process</li>
              <li>etaining and incarcerating immigrants</li>
              <li>Private prison profiteering from mass incarceration</li>
              <li>Border militarization</li>
            </ul>
          </div>
        </div>
      </section>
      {/* first image is inline, and the others are backgrounds, so they resize to fit based on it */}

      {/* section: image gallery */}

      <section className="section-white p-5 py-12">
        <div className="grid grid-cols-4 grid-rows-2 gap-4 ">
          <div className="col-span-2 row-span-2 ">
            <img
              src="/images/home-gallery-1.jpg"
              className="object-fit cover"
            />
          </div>
          <div
            className="col-span-2 row-span-1  bg-cover bg-center"
            style={{ backgroundImage: "url('/images/home-gallery-2.jpg')" }}
          />
          <div
            className="col-span-1 row-span-1  bg-cover bg-center"
            style={{ backgroundImage: "url('/images/home-gallery-3.jpg')" }}
          />
          <div
            className="col-span-1 row-span-1  bg-cover bg-center"
            style={{ backgroundImage: "url('/images/home-gallery-4.jpg')" }}
          />
        </div>
      </section>

      <section className="section-white p-5 py-12">
        <div className="flex gap-16 max-w-5xl mx-auto flex-col md:flex-row">
          <div className="flex-1 ">
            <img src="/images/home-bottom.jpg" />
          </div>

          <div className="flex-1">
            <h2>We call for...</h2>
            <h3>
              …principled immigration reform that addresses the root causes of
              migration and without provisions that would increase
              criminalization of migrants in the future in exchange for
              legalizing undocumented community members now.
            </h3>

            {/* We call <for className=""></for> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
