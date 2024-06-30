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
          <div className="w-full md:w-1/4">
            <img src="/images/asylum-1.jpg" />
          </div>
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
            <p className="underline"> International Law</p>
            <p>
              Following World War II, the United Nations created the Universal
              Declaration of Human Rights that recognized the right to seek
              asylum from persecution in other countries. The U.N. incorporated
              this principle into the United Nations Convention Relating to the
              Status of Refugees in 1951 which was later amended as the 1967
              U.N. Protocol. The United States was a signatory to the 1967 U.N.
              Protocol and thus is bound by its provisions.
            </p>
            <p className="underline">U.S. Law</p>
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

          <div className="w-full md:w-1/4">
            <img src="/images/asylum-2.jpg" />
          </div>
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
          {/* <div className="w-full md:w-3/4"> */}
          <h2> How Is the U.S. Asylum Process Supposed to Work?</h2>
          <p>
            When immigrants enter the U.S. at a port of entry or in other ways,
            they can tell a Border Patrol agent or other official that they are
            seeking asylum in the U.S. The U.S. official should document this
            and follow procedures to ensure that the immigrant’s asylum request
            is evaluated fairly. The process is complex but includes these
            steps:
          </p>
          <ol className="list-decimal">
            <li>
              An initial screening known as a Credible Fear or Reasonable Fear
              interview conducted by an immigration official. If individuals
              fail this screening, they may be deported. They may also appeal
              the ruling.
            </li>

            <li>
              Immigrants who pass the initial screening may present their asylum
              case before an immigration judge. There may be a long wait because
              immigration courts have lengthy backlogs.
            </li>
          </ol>

          <p>
            Asylum-seekers must be able to present convincing evidence that they
            have a“well-foundedfear of persecution” in their home country due to
            race, religion, nationality, political opinion, or membership in a
            particular social group.
          </p>
          {/* </div> */}
        </div>
      </section>

      <section className="section-gray">
        <div className="container mx-auto flex gap-10">
          <div className="w-1/3">
            <h2>
              What Really Happens to Immigrants Seeking Asylum in the U.S.
            </h2>
            <img src="/images/asylum-3.jpg" />
          </div>
          <div className="w-2/3">
            <p>
              Customs and Border Protection officials at ports of entry
              sometimes turn away asylum seekers, falsely claiming that the U.S.
              will not accept them. Border Patrol agents who apprehend border
              crossers sometimes ignore or dismiss immigrants’ requests for
              asylum and fail to document it. Agents may use the threat of
              family separation as means to deter asylum seekers traveling with
              children.(Link–
              https://www.hopeborder.org/sealing-the-borderAnother link:
              http://www.uscirf.gov/sites/default/files/Barriers%20To%20Protection.pdf
            </p>
            <p>
              Individuals who attempt to enter the U.S. without authorization
              are regarded as law-breakers and are prosecuted as criminals, even
              if they have come to the U.S. to seek asylum. This violates
              international prohibitions against punishing asylum-seekers.
            </p>
            <p>
              During the prosecution process, the immigrant’s request for asylum
              and right to a credible fear screening interview may be ignored or
              lost in the maze of detention and prosecution.
            </p>
            <p>
              The U.S. often incarcerates asylum seekers during the asylum
              process, even those who presented at a port of entry and are not
              being criminally prosecuted. This means that asylum seekers who
              passed initial screening interviews and are waiting to present
              their case to an immigration judge may be in an immigration
              detention center for as long as two years or more.
            </p>
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="section-container">
          {/* <div className="w-full md:w-3/4"> */}
          <h2>
            {" "}
            What Happens to Asylum Seekers Who are Prosecuted in Streamline?
          </h2>
          <p>Border Patrol</p>
          <p>
            When Border Patrol agents apprehend migrants, they are supposed to
            ask whether the border-crosser entered the U.S. to seek asylum, but
            this happens inconsistently. Immigrant rights groups have documented
            numerous occasions when Border Patrol agents ignore or disparage
            migrants who say they are fleeing violence and oppression in their
            home countries. Link:
            http://www.uscirf.gov/sites/default/files/Barriers%20To%20Protection.pdf
          </p>
          <p>Defense Attorneys</p>
          <p>
            Apprehended migrants, including asylum-seekers, who are selected for
            prosecution via Streamline will be bussed to the courthouse on their
            court date, and will meet with an assigned defense attorney in the
            morning for about 30 minutes. In this limited time, the attorney
            should proactively ask defendants about their reasons for entering
            the U.S., explain the process, and offer counsel. The attorney
            should document the asylum request and take steps to ensure that the
            defendant will get a credible fear interview.
          </p>
          <p>Rapid Deportation</p>
          <p>
            First-time border-crossers in Streamline usually get a sentence of
            time served, and will be deported quickly back to their home
            country. The migrant’s status as an asylum-seeker may be missed or
            ignored, with no credible fear interview.
          </p>

          <ol>
            <li>
              An initial screening known as a Credible Fear or Reasonable Fear
              interview conducted by an immigration official. If individuals
              fail this screening, they may be deported. They may also appeal
              the ruling.
            </li>

            <li>
              Immigrants who pass the initial screening may present their asylum
              case before an immigration judge. There may be a long wait because
              immigration courts have lengthy backlogs.
            </li>
          </ol>

          <p>
            Asylum-seekers must be able to present convincing evidence that they
            have a“well-foundedfear of persecution” in their home country due to
            race, religion, nationality, political opinion, or membership in a
            particular social group.
          </p>
          {/* </div> */}
        </div>
      </section>

      <section className="section-gray">
        <div className="section-container flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/4">
            <h2>How Many Immigrants Who Apply for Asylum are Successful?</h2>
          </div>

          <div className="w-full md:w-3/4">
            <ul>
              <li>
                Success rates for passing credible or reasonable fear interviews
                vary by region and by the immigration official who does the
                interview.{" "}
              </li>
              <li>
                Those who pass their screening interview will wait one-to-two
                years before their case is heard by an immigration judge. During
                this time, asylum-seekers and their family members may be
                detained in an immigration detention center.{" "}
              </li>
              <li>
                Success rates vary by country of origin and the region of the
                U.S. where the case is heard. For example, in 2016, 30% of
                Chinese applicants were successful, compared with 10% from
                Guatemala and 7% from Honduras.
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
