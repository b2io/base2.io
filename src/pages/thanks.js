import React from 'react';
import { mapProps } from 'recompose';
import {
  GlobalNavigation,
  H2,
  Main,
  P,
  Section,
  TeamList,
} from '../components';
import { toNodesWithImage } from '../util/graphql';

class ThanksPage extends React.Component {
  render() {
    const { team } = this.props;

    return (
      <Main>
        <GlobalNavigation />
        <Section>
          <H2>Thanks!</H2>
          <P lead>We're excited you're interested in working together.</P>
          <P lead>
            We'll review the information you sent and get back to you shortly.
          </P>
          <P lead>
            Thanks again,<br />
            Base Two
          </P>
        </Section>
        <Section>
          <TeamList>
            {team.map(member => <TeamList.Item {...member} key={member.id} />)}
          </TeamList>
        </Section>
      </Main>
    );
  }
}

function mapPropsToProps({ data }) {
  return {
    team: toNodesWithImage(data.team),
  };
}

export default mapProps(mapPropsToProps)(ThanksPage);

export const pageQuery = graphql`
  query ThanksPageQuery {
    team: allTeamJson(filter: { active: { eq: true } }) {
      edges {
        node {
          id
          image {
            childImageSharp {
              resolutions(width: 260, quality: 80) {
                ...GatsbyImageSharpResolutions_withWebp_tracedSVG
              }
            }
          }
          name
          title
        }
      }
    }
  }
`;
