import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Jumbotron } from '../components/Jumbotron';

const WhatIsOperationStreamline: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Jumbotron
        title="What You Can Do"
        backgroundImage="/images/what-jumbotron.jpg"
      />

      {/* <section className="bg-white px-4 py-24">
        <div className="container mx-auto flex">
          <div className="w-1/2"></div>
          <div className="w-1/2">
            <h3>
              Operation Streamline is an initiative of the Department of
              Homeland Security and the Department of Justice launched in 2005
              under a “zero-tolerance” policy to prosecute unauthorized
              immigrants as criminals. Streamline courts were created to deliver
              en masse fast-track criminal court proceedings. Streamline began
              in Del Rio, Texas, on December 16, 2005 and expanded to every
              border district except California. In 2018 new Trump
              administration zero-tolerance prosecution policies resulted in a
              new Streamline court in San Diego.
            </h3>
          </div>
        </div>
      </section> */}

      <section className=" px-4 py-24">
        <div className="container mx-auto w-1/3">
          <h2>If you live in the Tucson area</h2>
          <p className="underline">
            Attend the Tucson Operation Streamline court.
          </p>
          <p>
            Streamline is held most weekdays at 1:30 pm on the second floor of
            the Evo DeConcini U.S. courthouse, 405 W. Congress St. Members of
            the public may attend. Bring ID and expect to go through security
            screening. No photos or recordings are permitted.
          </p>
          <p>
            Before you go, visit the court website and download the Streamline
            calendar to confirm that court will be in session and to see the
            list of defendants by name. http://www.azd.uscourts.gov/calendars
            Print the list and bring it to court – it will make it easier to
            follow the proceedings.
          </p>
          <p>Volunteer as an End Streamline court observer</p>
          <p>
            End Streamline documents the prosecutions of asylum seekers in the
            Tucson Streamline court proceedings. Contact us at
            endstreamline@gmail.com if you would like to volunteer as a court
            observer.
          </p>
        </div>
      </section>

      {/* make applys for these sections? section-white section-gray? */}
      <section className="bg-white px-4 py-24">
        <div className="container mx-auto">
          <h2>What Happens in Streamline courts?</h2>
          <p>
            Streamline courts are criminal courts. Unlike most federal
            prosecutions, judges condense the entire criminal proceeding
            including initial appearance, plea and sentencing into a a few hours
            on one day.
          </p>
          <ul>
            <li>
              First-time border crossers are charged with illegal entry which is
              a criminal misdemeanor, punishable by up to 6 months in prison.
            </li>
            <li>
              Those with prior removals are charged with illegal re-entry, which
              is a criminal felony punishable by up to two years in prison.
            </li>
          </ul>

          <p>
            Streamline defendants are shackled at the hands, waist, and feet,
            although in Tucson shackles are removed before defendants enter the
            courtroom. Depending on the court location, as many as 100
            defendants enter the courtroom for a single en masse hearing lasting
            two or three hours. All are advised of their charges, waive their
            constitutional rights, plead guilty to entering at a place other
            than a port of entry, and are sentenced.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatIsOperationStreamline;
