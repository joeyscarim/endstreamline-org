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
        title="What is Operation Streamline?"
        backgroundImage="/images/what-jumbotron.jpg"
      />

      <section className="bg-white px-4 py-24">
        <div className="container mx-auto flex gap-10">
          <div className="w-1/2">
            <img src="/images/what-1.jpg" />
          </div>
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
      </section>

      <section className="bg-gray-100 px-4 py-24">
        <div className="container mx-auto">
          <h2>What happened prior to Streamline?</h2>
          <p>
            Being in the United States without proper documentation is a
            violation of immigration law, which is a civil not a criminal
            matter. Prior to Operation Streamline, U.S. attorneys were able to
            exercise prosecutorial discretion, initiating civil deportation
            proceedings against most undocumented immigrants while reserving
            criminal charges for repeat entrants or those with criminal records.
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

      <section className="section-gray px-4 py-24">
        <div className="container mx-auto flex gap-10">
          <div className="w-1/2">
            <h2>Pleas and Sentences</h2>
            <img src="/images/what-2.jpg" />
          </div>
          <div className="w-1/2">
            <p>
              Illegal entry. Most first-time border crossers who are charged
              with illegal entry plead guilty and get a sentence of time served,
              i.e., the time that they have been in Border Patrol detention
              before going to court. They are deported with a criminal
              conviction on their record. Illegal Re-entry. Those charged with
              illegal re-entry are offered a plea bargain. If they agree to
              plead guilty to the lesser violation of illegal entry, the felony
              charge of illegal re-entry will be dropped. The terms of the plea
              bargain include a sentence of 30 – 180 days in an immigration
              detention center. After serving the sentence, immigrants will be
              deported to their home country with a criminal conviction on their
              record.
            </p>
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="container mx-auto flex gap-10">
          <div className="w-3/4">
            <p>
              When an individual is prosecuted as a criminal, the court must
              provide a defense attorney, and this applies to immigrants.
              Streamline defendants are represented by public defenders and
              court-appointed contract lawyers who may represent dozens of
              clients at a time, meeting with each one for only a few minutes
              before their court appearance.
            </p>
          </div>
          <div className="w-1/4">
            <h2>Do Streamline defendants have lawyers?</h2>
          </div>
        </div>
      </section>

      <section className="section-gray">
        <div className="container mx-auto flex gap-10">
          <div className="w-3/4">
            <h2>Are Asylum Seekers Prosecuted in Streamline?</h2>
          </div>
          <div className="w-1/4">
            <p>
              Yes. Immigrants who are fleeting violence and enter the U.S.
              without authorization are treated as lawbreakers and prosecuted
              for illegal entry or illegal re-entry.[Readmore– link to this
              website’s page on Asylum]
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatIsOperationStreamline;
