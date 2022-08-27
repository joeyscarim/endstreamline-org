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
        backgroundImage="/images/you-jumbotron.jpg"
      />

      <section className="section-white">
        <div className="section-container md:w-1/2">
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

      <section className="section-gray">
        <div className="section-container flex flex-col md:flex-row">
          <div className="flex-1">
            <h2>If you live in another part of the U.S.</h2>
            <ul>
              <li>
                Join with others in your area to oppose the criminal prosecution
                of immigrants and separation of families through deportation. Be
                sure to seek out immigrant-led organization and work under their
                leadership.
              </li>

              <li>
                Support national immigration justice organizations. [Link to
                Resource page]
              </li>

              <li>
                Visit a Federal Courthouse in your area to see these
                prosecutions for yourself. Find your federal district court
                here. [Link – http://www.uscourts.gov/court-locator ]
              </li>
            </ul>
          </div>

          <div className="flex-1">ok</div>
        </div>
      </section>

      <section className="section-white">
        <div className="section-container flex flex-col md:flex-row">
          <div className="flex-1">ok</div>

          <div className="flex-1">
            <h2>Everywhere</h2>
            <ul>
              <li>
                Contact Members of Congress to demand an end to the criminal
                prosecution of migrants and an end to fast-track Streamline
                courts.
              </li>

              <li>
                Insist to local elected officials that local police and jails do
                not cooperate with ICE when immigrants are apprehended by local
                law enforcement.
              </li>

              <li>
                Work with others to elect local and national representatives who
                will work to create real immigration reform.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatIsOperationStreamline;
