import React from 'react';
import styled from 'styled-components';
import {
  BreakoutSection,
  ContactForm,
  DescriptiveList,
  Header,
  H1,
  H2,
  Img,
  InlineList,
  Main,
  P,
  Section,
  TeamList,
} from '../components';
import { toNodesWithImage } from '../util/graphql';

const LogoImg = styled(Img)`opacity: 0.66;`;

class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const clients = toNodesWithImage(data.clients);
    const team = toNodesWithImage(data.team);
    const technologies = toNodesWithImage(data.technologies);

    return (
      <Main>
        <Header>
          <H1>Base Two</H1>
          <P lead>We turn ideas into beautiful, functional software.</P>
        </Header>
        <Section>
          <H2>Services</H2>
          <P lead>
            Whether you are looking to start a new project or finish an existing
            one, we have the experience to get it done.
          </P>
          <DescriptiveList>
            <DescriptiveList.Item iconName="computer" title="Web">
              <P>
                We create rich user experiences and the back-end services to
                support them. Our expertise in full-stack web development means
                we can realize your vision from start to finish. Our work
                includes enterprise software, e-commerce solutions, websites,
                and web applications.
              </P>
            </DescriptiveList.Item>
            <DescriptiveList.Item iconName="iphone" title="Mobile">
              <P>
                Which mobile operating system are you going to target - iOS?
                Android? Windows? We use PhoneGap to eliminate that dilemma for
                you. We write the code once and deploy to every major mobile OS.
                If your end-user has a mobile device, you’ve got an app for it.
              </P>
            </DescriptiveList.Item>
            <DescriptiveList.Item iconName="wallpaper" title="Design">
              <P>
                We do user-centric, interaction-driven design. We assess your
                targeted user base and determine the most effective way to
                structure your content. We iterate using wireframes and
                click-through prototypes until it works just right, and then we
                make it look great.
              </P>
            </DescriptiveList.Item>
          </DescriptiveList>
        </Section>
        <BreakoutSection>
          <H2>Technologies</H2>
          <InlineList centered>
            {technologies.map(technology => (
              <InlineList.Item key={technology.id}>
                <LogoImg {...technology.image} alt={technology.name} />
              </InlineList.Item>
            ))}
          </InlineList>
        </BreakoutSection>
        <Section>
          <H2>Services</H2>
          <P lead>
            Our process is designed to provide direction and flexibility to your
            project through open communication and trust. We guide you through
            the development process by providing weekly touchpoints, status
            updates, and passive awareness so that you can determine how
            involved you’d like to be on a day-to-day basis.
          </P>
          <DescriptiveList>
            <DescriptiveList.Item iconName="assignment" title="Define">
              <P>
                Whether your idea is to improve an internal business process or
                create the next big mobile app, we want to fully understand your
                vision. We’ll sit down with you, a dry erase board, and some
                coffee to discuss the problem you plan to solve. We want to
                understand not just the what but also the why of your idea so
                that we can offer you the best possible direction.
              </P>
              <P>
                Once the idea is fully understood, we’ll define an iterative
                plan consisting of small milestones - prioritized in a way to
                deliver the most valuable features first so that you can begin
                to recognize returns quickly.
              </P>
            </DescriptiveList.Item>
            <DescriptiveList.Item iconName="code" title="Build">
              <P>
                We begin the Build phase by first breaking the current milestone
                into detailed development tasks. These tasks are entered into a
                project management tool that provides you visibility to the
                progress of each feature.
              </P>
              <P>
                For each feature in the application we create tests to ensure
                that the requirements have been fully met. This ensures that the
                feature has been properly implemented, and it allows future
                enhancements to be added with a low risk of introducing bugs.
              </P>
            </DescriptiveList.Item>
            <DescriptiveList.Item iconName="refresh" title="Iterate">
              <P>
                Every project is different. That is why we don’t pretend like
                the same process will work for everyone. We work in an iterative
                fashion so that lessons learned can be incorporated into the
                project early and often, which results in a better overall
                application and relationship.
              </P>
              <P>
                At the end of each milestone we demo the application and ask for
                your feedback. The original vision and milestones that we
                defined are then adjusted to reflect your latest feedback and
                needs.
              </P>
            </DescriptiveList.Item>
          </DescriptiveList>
        </Section>
        <BreakoutSection>
          <H2>Clients</H2>
          <InlineList centered>
            {clients.map(client => (
              <InlineList.Item key={client.id}>
                <LogoImg {...client.image} alt={client.name} />
              </InlineList.Item>
            ))}
          </InlineList>
        </BreakoutSection>
        <Section>
          <H2>Team</H2>
          <TeamList>
            {team.map(member => (
              <TeamList.Item {...member} key={member.id} />
            ))}
          </TeamList>
        </Section>
        <Section>
          <H2>Contact Us</H2>
          <P lead>
            Let’s work together! Fill out the form below with some info about
            your project.
          </P>
          <ContactForm />
        </Section>
      </Main>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageQuery {
    clients: allClientsJson {
      edges {
        node {
          id
          image {
            childImageSharp {
              resolutions(quality: 80) {
                ...GatsbyImageSharpResolutions_withWebp_noBase64
              }
            }
          }
          name
        }
      }
    }
    team: allTeamJson {
      edges {
        node {
          id
          image {
            childImageSharp {
              resolutions(width: 260, quality: 80) {
                ...GatsbyImageSharpResolutions_withWebp_noBase64
              }
            }
          }
          name
          title
        }
      }
    }
    technologies: allTechnologiesJson {
      edges {
        node {
          id
          image {
            childImageSharp {
              resolutions(quality: 80) {
                ...GatsbyImageSharpResolutions_withWebp_noBase64
              }
            }
          }
          name
        }
      }
    }
  }
`;
