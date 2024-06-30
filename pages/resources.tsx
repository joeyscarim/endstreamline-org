import type { NextPage } from "next";
import Head from "next/head";

// components
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Jumbotron } from "../components/Jumbotron";

const WhatIsOperationStreamline: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Resources | End Streamline</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Jumbotron
        title="Resources"
        backgroundImage="/images/resources-jumbotron.jpg"
      />

      <section className="section-white">
        <div className="section-container">
          <h2>Request a presentation</h2>
          <p>
            End Streamline members are available for presentations to groups if
            scheduling permits. Please contact us at{" "}
            <a className="link" href="mailto:endstreamline@gmail.com">
              endstreamline@gmail.com
            </a>
          </p>
        </div>
      </section>

      <section className="section-gray">
        <div className="section-container">
          <h2>Links to other organizations</h2>
          <div className="font-bold italic">Southern Arizona</div>
          <ul>
            <li>
              Coalición Derechos Humanos{" "}
              <a
                href="https://derechoshumanosaz.net/"
                target="_blank"
                rel="noreferrer"
              >
                https://derechoshumanosaz.net/
              </a>
            </li>
            <li>
              No More Deaths{" "}
              <a
                href="http://forms.nomoredeaths.org/en/"
                target="_blank"
                rel="noreferrer"
              >
                http://forms.nomoredeaths.org/en/
              </a>
            </li>
            <li>
              Keep Tucson Together{" "}
              <a
                href="http://forms.nomoredeaths.org/about-no-more-deaths/keep-tucson-together/"
                target="_blank"
                rel="noreferrer"
              >
                http://forms.nomoredeaths.org/about-no-more-deaths/keep-tucson-together/
              </a>
            </li>
            <li>
              Florence Immigrant and Refugee Rights Project{" "}
              <a href="https://firrp.org/" target="_blank" rel="noreferrer">
                https://firrp.org/
              </a>
            </li>
            <li>
              Kino Border Initiative{" "}
              <a
                href="https://www.kinoborderinitiative.org/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.kinoborderinitiative.org/
              </a>
            </li>
          </ul>
          <div className="font-bold italic">Regional/National</div>

          <ul>
            <li>
              Mijente{" "}
              <a href="https://mijente.net/" target="_blank" rel="noreferrer">
                https://mijente.net/
              </a>
            </li>
            <li>
              Raices{" "}
              <a
                href="https://www.raicestexas.org/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.raicestexas.org/
              </a>
            </li>
            <li>
              Grassroots Leadership{" "}
              <a
                href="https://grassrootsleadership.org/"
                target="_blank"
                rel="noreferrer"
              >
                https://grassrootsleadership.org/
              </a>
            </li>
            <li>
              American Civil Liberties Union{" "}
              <a href="https://www.aclu.org/" target="_blank" rel="noreferrer">
                https://www.aclu.org/
              </a>
            </li>
            <li>
              American Immigration Council{" "}
              <a
                href="https://americanimmigrationcouncil.org/"
                target="_blank"
                rel="noreferrer"
              >
                https://americanimmigrationcouncil.org/
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-white">
        <div className="section-container">
          <h2>Reports Published by Other Organizations</h2>

          <ul>
            <li>
              Indefensible: A Decade of Mass Incarceration of Migrants
              Prosecuted for Crossing the Border.{" "}
              <a
                href="https://grassrootsleadership.org/reports/indefensible-decade-mass-incarceration-migrants-prosecuted-crossing-border"
                target="_blank"
                rel="noreferrer"
              >
                https://grassrootsleadership.org/reports/indefensible-decade-mass-incarceration-migrants-prosecuted-crossing-border
              </a>
            </li>
            <li>
              Streamline: Measuring its Effect on Illegal Border Crossing{" "}
              <a
                href="https://www.oig.dhs.gov/sites/default/files/assets/Mgmt/2015/OIG_15-95_May15.pdf"
                target="_blank"
                rel="noreferrer"
              >
                https://www.oig.dhs.gov/sites/default/files/assets/Mgmt/2015/OIG_15-95_May15.pdf
              </a>
            </li>
            <li>
              In Harm’s Way: Family Separation, Immigration Enforcement Programs
              and Security on the U.S.-Mexico Border{" "}
              <a
                href="https://las.arizona.edu/sites/las.arizona.edu/files/SW%20Journal%20of%20Migration%20and%20Human%20Security%20Article%202015.pdf"
                target="_blank"
                rel="noreferrer"
              >
                https://las.arizona.edu/sites/las.arizona.edu/files/SW%20Journal%20of%20Migration%20and%20Human%20Security%20Article%202015.pdf
              </a>
            </li>
            <li>
              Asylum in the United States{" "}
              <a
                href="https://americanimmigrationcouncil.org/research/asylum-united-states"
                target="_blank"
                rel="noreferrer"
              >
                https://americanimmigrationcouncil.org/research/asylum-united-states
              </a>
            </li>
            <li>
              Sealing the Border: The Criminalization of Asylum Seekers in the
              Trump Era{" "}
              <a
                href="https://www.hopeborder.org/sealing-the-border"
                target="_blank"
                rel="noreferrer"
              >
                https://www.hopeborder.org/sealing-the-border
              </a>
            </li>
            <li>
              Barriers to Protection: The Treatment of Asylum Seekers in
              Expedited Removal{" "}
              <a
                href="http://www.uscirf.gov/sites/default/files/Barriers%20To%20Protection.pdf"
                target="_blank"
                rel="noreferrer"
              >
                http://www.uscirf.gov/sites/default/files/Barriers%20To%20Protection.pdf
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-gray">
        <div className="section-container">
          <h2>Resources for attorneys</h2>
          <ul>
            <li>Petition for credible fear interview</li>
            <li>Sample email to ICE</li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatIsOperationStreamline;
