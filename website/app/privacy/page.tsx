import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";

const title = "Privacy Notice | Tennant & Co Accountancy";
const description =
  "How Tennant & Co Accountancy Limited collects, uses and protects your personal data.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: "/privacy" },
  twitter: { title, description },
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 font-serif text-h3 font-semibold text-ink first:mt-0">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-body text-ink-muted">{children}</p>;
}

function SubHead({ children }: { children: React.ReactNode }) {
  return <p className="mt-6 font-semibold text-ink">{children}</p>;
}

function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-body text-ink-muted">
      {children}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main>
        <Section>
          <SectionHeading as="h1" eyebrow="Legal" title="Privacy Notice" />

          <div className="mt-10 max-w-[68ch]">
            <H2>1. About us and the purpose of this notice</H2>
            <P>
              Tennant &amp; Co Accountancy Limited is an accountancy firm. We
              are registered in England and Wales as a company under number
              17002564, and our registered office is at 4 Grovelands,
              Boundary Way, Hemel Hempstead, Hertfordshire, HP2 7TE.
            </P>
            <P>
              This notice will tell you how we look after your personal
              data, about your privacy rights, and about our compliance
              with and your protections under Data Protection Legislation.
            </P>
            <P>
              In this notice &quot;Data Protection Legislation&quot; means
              any applicable law relating to the processing, privacy, and
              use of Personal Data, including the Data Protection Act 2018
              and the Privacy and Electronic Communications (EC Directive)
              Regulations 2003, as amended by The Data Protection, Privacy
              and Electronic Communications (Amendments etc) (EU Exit)
              Regulations 2020.
            </P>
            <P>
              For the purpose of the Data Protection Legislation and this
              notice, we are the &quot;data controller&quot;. This means
              that we are responsible for deciding how we hold and use
              personal data about you. We are required under the Data
              Protection Legislation to notify you of the information
              contained in this privacy notice.
            </P>
            <P>
              We have appointed a Data Protection Officer. Our Data
              Protection Officer is our Data Protection Point of Contact
              and is responsible for assisting with enquiries in relation
              to this privacy notice or our treatment of your personal
              data. Should you wish to contact our Data Protection Point
              of Contact you can do so using the contact details noted at
              section 11 below.
            </P>

            <H2>2. The kind of information we hold about you</H2>
            <P>The information we hold about you may include the following:</P>
            <UL>
              <li>your personal details (such as your name and/or address);</li>
              <li>
                details of contact we have had with you in relation to the
                provision, or the proposed provision, of our services;
              </li>
              <li>details of any services you have received from us;</li>
              <li>our correspondence and communications with you;</li>
              <li>information about any complaints and enquiries you make to us;</li>
            </UL>

            <H2>3. How we may collect your personal data</H2>
            <P>We obtain your personal data directly from you when:</P>
            <UL>
              <li>you request a proposal from us in respect of the services we provide;</li>
              <li>
                you engage us to provide our services and also during the
                provision of those services;
              </li>
              <li>
                you contact us by email, telephone, post or social media
                (for example when you have a query about our services);
              </li>
            </UL>
            <P>We may also obtain your personal data indirectly:</P>
            <UL>
              <li>
                from our client when it engages us to provide services and
                also during the provision of those services;
              </li>
              <li>
                from third parties and/or publicly available resources (for
                example, from your employer or from Companies House).
              </li>
            </UL>

            <H2>4. How we use personal data we hold about you</H2>
            <P>
              We may process your personal data for purposes necessary for
              the performance of our contract with you and to comply with
              our legal obligations. This may include processing your
              personal data where you are an employee, subcontractor,
              supplier or customer of our client.
            </P>
            <P>
              We may also process your personal data for the purposes of
              our own legitimate interests provided that those interests
              do not override any of your own interests, rights and
              freedoms which require the protection of personal data. This
              includes processing for marketing, business development,
              statistical and management purposes.
            </P>
            <P>
              Please note that we may process your personal data for more
              than one lawful basis depending on the specific purpose for
              which we are using your data.
            </P>
            <SubHead>
              Situations in which we will use your personal data
            </SubHead>
            <P>We may use your personal data in order to:</P>
            <UL>
              <li>
                carry out our obligations arising from any agreements
                entered into between you and us (which will most usually
                be for the provision of our services);
              </li>
              <li>
                carry out our obligations arising from any agreements
                entered into between our clients and us (which will most
                usually be for the provision of our services) where you
                may be a subcontractor, supplier or customer of our
                client;
              </li>
              <li>
                provide you with information related to our services and
                our events or seek your thoughts and opinions on the
                services we provide; and
              </li>
              <li>notify you about any changes to our services.</li>
            </UL>
            <P>
              In some circumstances we may anonymise or pseudonymise the
              personal data so that it can no longer be associated with
              you, in which case we may use it without further notice to
              you.
            </P>
            <P>
              We may also process your personal data without your
              knowledge or consent, in accordance with this notice, where
              we are legally required or permitted to do so.
            </P>
            <SubHead>Data retention</SubHead>
            <P>
              We will only retain your personal data for as long as is
              necessary to fulfil the purposes for which it is collected.
            </P>
            <P>
              When assessing what retention period is appropriate for your
              personal data, we take into consideration the requirements
              of our business and the services provided, any statutory or
              legal obligations and the purposes for which we originally
              collected the personal data.
            </P>
            <SubHead>Change of purpose</SubHead>
            <P>
              Where we need to use your personal data for a reason, other
              than the purpose for which we originally collected it, we
              will only use your personal data where that reason is
              compatible with the original purpose. If we need to use your
              data for a new purpose, we will notify you and communicate
              our legal basis for this new processing.
            </P>

            <H2>5. Data sharing</H2>
            <P>
              We will share your personal data with third parties where we
              are required by law, where it is necessary to administer the
              relationship between us, or where we have another legitimate
              interest in doing so. This may include sharing your personal
              data with a regulator or to otherwise comply with the law.
            </P>
            <P>
              &quot;Third parties&quot; includes third-party service
              providers and the members of our firm&apos;s network. The
              following activities are carried out by third-party service
              providers: IT and cloud services, professional advisory
              services, administration services, marketing services and
              banking services. We only permit our third-party service
              providers to process your personal data for specified
              purposes and in accordance with our instructions.
            </P>
            <SubHead>Our website contact form</SubHead>
            <P>
              When you submit an enquiry through the contact form on our
              website, the information you provide is sent using a
              third-party form processing service, Web3Forms (operated by
              Web3Creative), which delivers it to us by email. Web3Forms
              may also share the IP address and email address of anyone
              submitting the form with its spam-prevention sub-processors,
              CleanTalk and Akismet, for the sole purpose of detecting and
              blocking spam and abusive submissions.
            </P>
            <SubHead>Website analytics</SubHead>
            <P>
              With your consent, we use Google Analytics to understand how
              visitors use our website, such as which pages are viewed and
              how visitors found the site. Google Analytics sets cookies
              (including <code>_ga</code> and <code>_ga_*</code>) that
              expire after up to 13 months. You can choose not to accept
              these cookies, and can change your choice at any time using
              the &quot;Cookie settings&quot; link in the website footer.
              Declining does not affect your ability to use the website or
              contact us.
            </P>
            <P>
              We may share your personal data with other third parties,
              for example in the context of the possible sale or
              restructuring of the business. We may also need to share
              your personal data with a regulator or to otherwise comply
              with the law.
            </P>

            <H2>6. Transferring personal data outside the United Kingdom</H2>
            <P>
              We do not otherwise transfer the personal data we collect
              about you outside of the UK, with two exceptions. Data
              submitted through the contact form on our website is
              processed by Web3Forms, whose infrastructure may process
              data in multiple regions, including outside the UK. Where
              you consent to analytics cookies, Google Analytics data is
              processed by Google LLC, based in the United States. Any
              such transfers are made under appropriate safeguards,
              including Standard Contractual Clauses, as set out in
              Web3Forms&apos; Data Processing Agreement and Google&apos;s
              data protection terms respectively.
            </P>

            <H2>7. Data security</H2>
            <P>
              We have put in place commercially reasonable and appropriate
              security measures to prevent your personal data from being
              accidentally lost, used or accessed in an unauthorised way,
              altered or disclosed. In addition, we limit access to your
              personal data to those employees, agents, contractors and
              other third parties who have a business need to know. They
              will only process your personal data on our instructions and
              they are subject to a duty of confidentiality.
            </P>
            <P>
              We have put in place procedures to deal with any suspected
              data security breach and will notify you and any applicable
              regulator of a suspected breach where we are legally
              required to do so.
            </P>

            <H2>8. Rights of access, correction, erasure, and restriction</H2>
            <SubHead>Your duty to inform us of changes</SubHead>
            <P>
              It is important that the personal data we hold about you is
              accurate and current. Should your personal information
              change, please notify us of any changes of which we need to
              be made aware by contacting us, using the contact details
              below.
            </P>
            <SubHead>Your rights in connection with personal data</SubHead>
            <P>Under certain circumstances, by law you have the right to:</P>
            <UL>
              <li>
                Request access to your personal data. This enables you to
                receive details of the personal data we hold about you and
                to check that we are processing it lawfully.
              </li>
              <li>Request correction of the personal data that we hold about you.</li>
              <li>
                Request erasure of your personal data. This enables you to
                ask us to delete or remove personal data where there is no
                good reason for us continuing to process it. You also have
                the right to ask us to delete or remove your personal data
                where you have exercised your right to object to
                processing (see below).
              </li>
              <li>
                Object to processing of your personal data where we are
                relying on a legitimate interest (or those of a third
                party) and there is something about your particular
                situation which makes you want to object to processing on
                this basis. You also have the right to object where we are
                processing your personal information for direct marketing
                purposes.
              </li>
              <li>
                Request the restriction of processing of your personal
                data. This enables you to ask us to suspend the processing
                of personal data about you, for example if you want us to
                establish its accuracy or the reason for processing it.
              </li>
              <li>
                Request the transfer of your personal data to you or
                another data controller if the processing is based on
                consent, carried out by automated means and this is
                technically feasible.
              </li>
            </UL>
            <P>
              If you want to exercise any of the above rights, please
              email our Data Protection Point of Contact:{" "}
              <a href="mailto:tiffany@tennantandco.co.uk" className="text-green-900 hover:underline">
                tiffany@tennantandco.co.uk
              </a>
            </P>
            <P>
              You will not have to pay a fee to access your personal data
              (or to exercise any of the other rights). However, we may
              charge a reasonable fee for the administrative costs of
              complying with the request if your request for access is
              manifestly unfounded or excessive. Alternatively, we may
              refuse to comply with the request in such circumstances.
            </P>
            <P>
              We may need to request specific information from you to help
              us confirm your identity and ensure your right to access the
              information (or to exercise any of your other rights). This
              is another appropriate security measure to ensure that
              personal information is not disclosed to any person who has
              no right to receive it.
            </P>

            <H2>9. Right to withdraw consent</H2>
            <P>
              In the limited circumstances where you may have provided
              your consent to the collection, processing and transfer of
              your personal data for a specific purpose (for example, in
              relation to direct marketing that you have indicated you
              would like to receive from us), you have the right to
              withdraw your consent for that specific processing at any
              time. To withdraw your consent, please email our Data
              Protection Point of Contact:{" "}
              <a href="mailto:tiffany@tennantandco.co.uk" className="text-green-900 hover:underline">
                tiffany@tennantandco.co.uk
              </a>
            </P>
            <P>
              Once we have received notification that you have withdrawn
              your consent, we will no longer process your personal
              information (personal data) for the purpose or purposes you
              originally agreed to, unless we have another legitimate
              basis for doing so in law.
            </P>

            <H2>10. Changes to this notice</H2>
            <P>
              Any changes we may make to our privacy notice in the future
              will be updated on our website at:{" "}
              <a href="https://www.tennantandco.co.uk" className="text-green-900 hover:underline">
                www.tennantandco.co.uk
              </a>
            </P>
            <P>This privacy notice was last updated on 29 August 2026.</P>

            <H2>11. Contact us</H2>
            <P>
              If you have any questions regarding this notice or if you
              would like to speak to us about the manner in which we
              process your personal data, please email our Data Protection
              Point of Contact:{" "}
              <a href="mailto:tiffany@tennantandco.co.uk" className="text-green-900 hover:underline">
                tiffany@tennantandco.co.uk
              </a>{" "}
              or telephone our Data Protection Point of Contact on{" "}
              <a href="tel:01296821478" className="text-green-900 hover:underline">
                01296 821478
              </a>
              .
            </P>
            <P>
              You also have the right to make a complaint to the
              Information Commissioner&apos;s Office (ICO), the UK
              supervisory authority for data protection issues, at any
              time. The ICO&apos;s contact details are as follows:
            </P>
            <P>
              Information Commissioner&apos;s Office
              <br />
              Wycliffe House
              <br />
              Water Lane
              <br />
              Wilmslow
              <br />
              Cheshire
              <br />
              SK9 5AF
              <br />
              Telephone — 0303 123 1113 (local rate) or 01625 545 745
              <br />
              Website —{" "}
              <a
                href="https://ico.org.uk/concerns"
                className="text-green-900 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                ico.org.uk/concerns
              </a>
            </P>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
