import { css } from '@emotion/react';
import type { FC } from 'react';

import {
  CaseStudyHeaderPane,
  CaseStudySummaryPane,
  Heading,
  Layout,
  Text,
} from '~/components';
import { atMinDesktop, atMinTablet, spacing } from '~/theme';

export const NetJetsPartnershipPage: FC = () => {
  return (
    <Layout
      description="Case study about our Partnership with NetJets"
      title="Netjets"
    >
      <CaseStudyHeaderPane
        alt="NetJets"
        name="NetJets Partnership"
        src={require('./images/netjets-hero.jpg')}
      />
      <section
        css={css`
          ${atMinDesktop} {
            margin-left: ${spacing.xxl1};
            margin-right: ${spacing.xxl1};
          }
        `}
      >
        <Heading
          as="h2"
          variant="h2"
          css={css`
            margin-bottom: ${spacing.marginXl};
            margin-top: ${spacing.xxl2};

            ${atMinTablet} {
              margin-top: ${spacing.xxl3};
            }
          `}
        >
          NetJets is a distinguished leader in the aviation industry, so when
          they reached out to Base Two for a consultation on their existing
          framework we were excited for the opportunity. Little did we know that
          this initial interaction would pave the way for a durational and
          significant collaboration spanning over a decade.
        </Heading>
      </section>
      <Text as="article">
        Our initial focus on enhancing NetJets&apos; Enterprise Trip Management
        (ETM) system, a pivotal tool for their call center operations, evolved
        into an insightful discovery process. Through candid conversations with
        NetJets staff, we identified the potential for reusable design
        components that could streamline efficiency and interdepartmental
        collaboration. This vision materialized into the development of a
        comprehensive Style Toolkit.
      </Text>
      <br />
      <br />
      <Text as="article">
        This toolkit included reusable components built in layers of pure CSS
        and HTML and published as a package, along with some react
        implementation of each component. Ultimately, this toolkit was used
        across a variety of departments, and in several different contexts,
        providing style unification for the brand. At least 3 different
        large-scale projects launched much sooner than expected because this
        toolkit provided a complete UI. The tool and its adoption provided a
        significant change in how their in-house developers built their apps
        internally. Apps of any size could scale due to how this toolkit was
        composed.
      </Text>
      <Text as="article">
        As the collaboration progressed, we extended our impact to include the
        development of a mobile app, showcased here as a compelling case study.
        However, challenges surfaced when NetJets expressed a desire to revamp
        the entire ETM system. Despite a promising start, the project
        encountered a stall during the UX phase.We pivoted our efforts to
        NetJets&apos; dotcom platform.
      </Text>
      <Text>
        Bonfire Red, a design firm, took the helm of design, partnering with
        developers under their contract. The challenge? A customized Drupal CMS
        that posed unique hurdles due to its modular and complex nature. The
        site&apos;s performance suffered, jeopardizing NetJets&apos; online
        presence, and we faced the task of rectifying the situation within
        existing IT constraints.
      </Text>
      <Text>
        We meticulously addressed the intricacies of seven page template types,
        sixty block types with variants, translations in seven languages, and
        complex design elements. Performance issues were resolved, broken search
        functionalities fixed, and GDPR and CCPA integrations seamlessly
        implemented. All white replatforming to a more efficient stack.
      </Text>
      <section>
        <ul>
          <Heading as="h4" variant="body">
            Highlights of our success on this project include:
          </Heading>
          <li>
            Resolving ongoing issues with Search optimization and performance
          </li>
          <li>Implementing compliant GDPR and CCPA integrations</li>
          <li>
            Creating an integration solution with their Salesforce stack to do
            lead funneling
          </li>
          <li>Uptime monitoring</li>
          <li>Synthetic and real user metrics</li>
          <li>Better image optimization</li>
          <li>Creation of a deployment pipeline</li>
        </ul>
      </section>
      <Text>
        Our commitment extended beyond technical problem-solving. We became
        integral members seated on NetJets&apos; councils, offering insights on
        architecture, web technology, and design. We hosted training sessions on
        internal tools, the Style Toolkit, and general engineering skills to
        their in-house staff. Mentorship and training initiatives ushered
        NetJets&apos; internal teams into a new era of innovation.
      </Text>
      <Text>
        When we collaborate with a valued partner, no task is too large or
        small. NetJets&apos; marketing team needed a way to translate their web
        banner designs into code, maintaining attention grabbing design
        components and animations while optimizing performance and fitting into
        extremely small file size requirements. Base Two has delivered hundreds
        of web banners on deadline, translated to 7 different languages, all
        while solving animation, as well as font and image file size hurdles.
      </Text>
      <Text>
        Anytime an emergent technical situation arose, NetJets staff knew they
        could rely on us to adapt to different tech stacks, problem solving, and
        efficient solutions.
      </Text>
      <Text>
        Our collaboration with NetJets is not just one of technical prowess but
        also of building trust, adapting to changing needs, and creating lasting
        business value. The digital landscape is ever-evolving, and we are proud
        to have played a pivotal role in propelling momentum for future
        projects, and being a trusted, reliable partner.
      </Text>
      <Text></Text>
      <Text></Text>

      <CaseStudySummaryPane
        summaryText="A reliable partner will be able to work with your current team to take a project over the finish line. We’re proud to have been that partner for NetJets, and we’re ready to be that partner for you."
        src={require('./images/dotcom-hero.png')}
        alt="screenshot"
      />
    </Layout>
  );
};
