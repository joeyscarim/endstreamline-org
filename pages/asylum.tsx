import type { NextPage } from 'next';
import Head from 'next/head';

// components
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Jumbotron } from '../components/Jumbotron';

const WhatIsOperationStreamline: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Asylum | End Streamline</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Jumbotron
        title="Asylum"
        backgroundImage="/images/asylum-jumbotron.jpg"
      />

      <section className="section-white">
        <div className="section-container flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/4">IMAGE</div>
          <div className="w-full md:w-3/4">
            <h3>
              Too often, immigrants who are seeking asylum in the U.S. are
              prosecuted as criminals in Streamline courts. The End Streamline
              Coalition believes that this is illegal as well as immoral. The
              U.S. should protect asylum seekers, not prosecute and incarcerate
              them.
            </h3>
          </div>
        </div>
      </section>

      <section className="section-gray">
        <div className="section-container flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/4">
            <h2>What Does the Law Say About Asylum Seekers?</h2>
          </div>
          <div className="w-full md:w-3/4">
            <p> International Law</p>
            <p>
              Following World War II, the United Nations created the Universal
              Declaration of Human Rights that recognized the right to seek
              asylum from persecution in other countries. The U.N. incorporated
              this principle into the United Nations Convention Relating to the
              Status of Refugees in 1951 which was later amended as the 1967
              U.N. Protocol. The United States was a signatory to the 1967 U.N.
              Protocol and thus is bound by its provisions.
            </p>
            <p>U.S. Law</p>
            <p>
              The U.S. incorporated the U.N. asylum definitions into its own law
              in the Refugee Act of 1980. U.S. law says that any immigrant who
              is fleeing persecution and enters the U.S. may apply for asylum,
              whether or not they entered the U.S. at a port of entry. [“Read
              more”–
              https://americanimmigrationcouncil.org/research/asylum-united-states
            </p>
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="section-container flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-3/4">
            <h2> Criteria for Asylum</h2>
            <p>
              People who are seeking refuge in the U.S. may qualify for asylum
              if they have experienced persecution or have a well-founded fear
              of persecution in their home country due to:
            </p>
            <ul>
              <li>Race</li>

              <li>Religion</li>
              <li>Nationality</li>
              <li> Membership in a particular social group </li>
              <li>Political opinion</li>
            </ul>
          </div>

          <div className="w-full md:w-1/4">IMAGE</div>
        </div>
      </section>

      <section className="section-gray">
        <div className="section-container flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/4">
            <h2> Protection for Asylum Seekers</h2>
          </div>

          <div className="w-full md:w-3/4">
            <p>
              Two important legal and human rights principles for protecting
              asylum seekers include:
            </p>
            <ul>
              <li>
                Asylum seekers should not be punished for seeking refuge in
                another country(1951U.N. Convention on Refugees and U.N. 1967
                Protocol on the Status of Refugees).
              </li>
              <li>
                Asylum seekers should not be returned to their home country
                without determining if they have a valid asylum claim.(1951U.N.
                Convention on Refugees; U.N. 1967 Protocol on the Status of
                Refugees; U.S. Refugee Act of 1980).
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="section-container">
          <h2>Reports Published by Other Organizations</h2>

          <ul>
            <li>
              Indefensible: A Decade of Mass Incarceration of Migrants
              Prosecuted for Crossing the Border.{' '}
              <a
                href="https://grassrootsleadership.org/reports/indefensible-decade-mass-incarceration-migrants-prosecuted-crossing-border"
                target="_blank"
              >
                https://grassrootsleadership.org/reports/indefensible-decade-mass-incarceration-migrants-prosecuted-crossing-border
              </a>
            </li>
            <li>
              Streamline: Measuring its Effect on Illegal Border Crossing{' '}
              <a
                href="https://www.oig.dhs.gov/sites/default/files/assets/Mgmt/2015/OIG_15-95_May15.pdf"
                target="_blank"
              >
                https://www.oig.dhs.gov/sites/default/files/assets/Mgmt/2015/OIG_15-95_May15.pdf
              </a>
            </li>
            <li>
              In Harm’s Way: Family Separation, Immigration Enforcement Programs
              and Security on the U.S.-Mexico Border{' '}
              <a
                href="https://las.arizona.edu/sites/las.arizona.edu/files/SW%20Journal%20of%20Migration%20and%20Human%20Security%20Article%202015.pdf"
                target="_blank"
              >
                https://las.arizona.edu/sites/las.arizona.edu/files/SW%20Journal%20of%20Migration%20and%20Human%20Security%20Article%202015.pdf
              </a>
            </li>
            <li>
              Asylum in the United States{' '}
              <a
                href="https://americanimmigrationcouncil.org/research/asylum-united-states"
                target="_blank"
              >
                https://americanimmigrationcouncil.org/research/asylum-united-states
              </a>
            </li>
            <li>
              Sealing the Border: The Criminalization of Asylum Seekers in the
              Trump Era{' '}
              <a
                href="https://www.hopeborder.org/sealing-the-border"
                target="_blank"
              >
                https://www.hopeborder.org/sealing-the-border
              </a>
            </li>
            <li>
              Barriers to Protection: The Treatment of Asylum Seekers in
              Expedited Removal{' '}
              <a
                href="http://www.uscirf.gov/sites/default/files/Barriers%20To%20Protection.pdf"
                target="_blank"
              >
                http://www.uscirf.gov/sites/default/files/Barriers%20To%20Protection.pdf
              </a>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatIsOperationStreamline;
