import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Jumbotron } from "../components/Jumbotron";

const WhatIsOperationStreamline: NextPage = () => {
  return (
    <div>
      <Head>
        <title>What is Operation Streamline? | End Streamline</title>
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

      <section className="section-white">
        <div className="container mx-auto">
          <h2>How Much Does This Cost the U.S Taxpayers?</h2>
          <p>Total costs are unknown.</p>
          <p>
            Streamline courts have existed in multiple border communities since
            2005, but after 14 years of this policy, no one knows what it costs.
          </p>
          <ul>
            <li>
              The Office of Inspector General for the Department of Homeland
              Security faulted the DHS Office of Customs and Border Protection
              (CBP) in 2015 for not tracking the full costs of Streamline.{" "}
              <a href="https://www.oig.dhs.gov/sites/default/files/assets/Mgmt/2015/OIG_15-95_May15.pdf">
                https://www.oig.dhs.gov/sites/default/files/assets/Mgmt/2015/OIG_15-95_May15.pdf
              </a>
            </li>
            <li>
              The U.S. Government Accountability Office also criticized CBP for
              not accounting for all the costs of Streamline implementation,
              focusing only on CBP’s own costs.{" "}
              <a href="https://www.gao.gov/assets/690/682074.pdf">
                https://www.gao.gov/assets/690/682074.pdf
              </a>
            </li>
          </ul>
          <p>Partial Estimates</p>
          <ul>
            <li>
              In 2016, to mark ten years of Streamline, Grassroots Leadership
              and Justice Strategies published a comprehensive report on the
              history and impact of Streamline in all border areas. The report
              estimated that the cost of incarceration over ten years totaled at
              least $7 billion, but the authors did not attempt to calculate all
              the other costs associated with Streamline prosecutions, such as
              attorneys and other courtroom personnel.
              <a href="https://grassrootsleadership.org/reports/indefensible-decade-mass-incarceration-migrants-prosecuted-crossing-border">
                https://grassrootsleadership.org/reports/indefensible-decade-mass-incarceration-migrants-prosecuted-crossing-border
              </a>
            </li>
            <li>
              In 2019 the End Streamline Coalition researched the full costs of
              conducting the daily Tucson, Arizona Streamline court, and
              estimated a total of $62.4 million per year for Tucson alone.
              <a href="https://endstreamline.org/wp-content/uploads/2020/02/Tucson-Operation-Streamline-Cost-Study-2-4-20.pdf">
                https://endstreamline.org/wp-content/uploads/2020/02/Tucson-Operation-Streamline-Cost-Study-2-4-20.pdf
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-gray">
        <div className="container mx-auto flex gap-10">
          <div className="w-1/3">
            <h2>Are There Other Costs?</h2>
            <img src="/images/what-3.jpg" />
          </div>
          <div className="w-2/3">
            <p> Criminal conviction</p>
            <p>
              Acriminal conviction is a bar to future legal immigration for at
              least 10 years; it also contributes to perceptions of immigrants
              as“criminals.”
            </p>
            <p>Incarceration</p>
            <p>
              Incarceration results in lost income, separation from family,
              trauma, and exposure to abuse while in immigration detention
              centers.
            </p>
            <p>Clogged Courts</p>
            <p>
              U.S. federal courts are overwhelmed by immigrant prosecutions. In
              2016 and 2017 immigration prosecutions made up almost half of all
              federal prosecutions.
            </p>
            <p>Increased Migrant Deaths</p>
            <p>
              Migrants choose more remote locations to avoid apprehension and
              are at greater risk of injury or death.
            </p>
            <p>Reduced circularity of migration</p>
            <p>
              Like all border enforcement efforts, Operation Streamline has
              resulted in a decrease in the historically circular pattern of
              Mexico-U.S. migration. As the risk of prosecution and imprisonment
              increases, migrants are more likely to settle permanently in the
              U.S. rather than risk returning periodically to their country of
              origin.
            </p>
            <p>Enabling cartels</p>
            <p>
              U.S. strategies of border militarization and criminal prosecution
              have spurred the growth of the human smuggling industry and
              encouraged cartels to enter and control this business.
            </p>
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="container mx-auto">
          <h2>Who Profits?</h2>
          <p>
            Many Streamlined immigrants serve time in private prisons run for
            profit by well-connected corporations such as Core Civic and GEO
            Group. Lobbyists for these corporations donate large sums of money
            to federal election campaigns with the expectation of receiving
            contracts for housing people criminalized by the federal government.
          </p>

          <ul>
            <li>
              According to ICE, in 2016 three quarters of immigration prisoners
              were detained in private prisons.
            </li>
            <li>
              According to the Migration Policy Institute, between 2007 and
              2014, CoreCivic’s overall annual profits increased by 47% to $195
              million. In the same time period, GEO Group’s annual profits grew
              from about $42 million to $144 million – an increase of 243%.
            </li>
          </ul>
        </div>
      </section>

      <section className="section-gray">
        <div className="container mx-auto flex gap-10">
          <div className="w-1/3">
            <h2>Is Immigrant Criminal Prosecution an Effective Deterrent?</h2>
            <img src="/images/what-4.jpg" />
          </div>
          <div className="w-2/3">
            <p>
              No large-scale studies have proved that criminal prosecution
              deters unauthorized immigrants. Yet the Justice Department,
              Department of Homeland Security, and many members of Congress
              claim that Streamline“works.”The Office of Inspector General for
              the Department of Homeland Security studied the Border Patrol
              metrics for evaluating a deterrent effect and in 2015 found them
              to be insufficient.{" "}
              <a href="https://www.oig.dhs.gov/sites/default/files/assets/Mgmt/2015/OIG_15-95_May15.pdf">
                https://www.oig.dhs.gov/sites/default/files/assets/Mgmt/2015/OIG_15-95_May15.pdf
              </a>
            </p>
            <p>
              Scholars agree that decisions to migrate are motivated by number
              of factors, including economic need, threats of violence, natural
              disasters, and family ties. Researchers from the U.S. and Mexico
              interviewed a random sample of 1,100 recently-deported migrants in
              six cities in Mexico between 2009 and 2012. Their analysis
              differentiated respondents by whether they considered the U.S. to
              be their permanent home, and by whether they intended to cross
              into the U.S. again immediately(withina week) or at some time in
              the future. Of those who considered the U.S. to be their home, 70%
              intended to cross again at some point in the future.{" "}
              <a href="https://las.arizona.edu/sites/las.arizona.edu/files/SW%20Journal%20of%20Migration%20and%20Human%20Security%20Article%202015.pdf">
                https://las.arizona.edu/sites/las.arizona.edu/files/SW%20Journal%20of%20Migration%20and%20Human%20Security%20Article%202015.pdf
              </a>
            </p>
            <p>
              A 2018 report from the Vera Institute of Justice presented a time
              series analysis of 22 years of immigrant apprehensions from
              1992-2014 to assess how multiple factors might influence
              fluctuations in border crossings over time. They used statistical
              modeling to look at monthly data in each border sector and found
              no evidence that the introduction of Streamline had a deterrent
              effect in any of the border sectors.{" "}
              <a href="https://www.vera.org/publications/operation-streamline">
                https://www.vera.org/publications/operation-streamline
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatIsOperationStreamline;
