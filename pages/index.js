import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import dynamic from 'next/dynamic';
import Button from '../components/Button';
import EmojiButton from '../components/EmojiButton';
import Emoji from '../components/Emoji';
import GridContainer from '../components/GridContainer';
import GridItem from '../components/GridItem';
import FullScreenSection from '../components/FullScreenSection';
import Logo from '../components/Logo';
import Text from '../components/Text';
import Title from '../components/Title';

const Index = styled.div`
  --color-blue: #00aeef;
  --color-fg: white;
  --color-bg: black;
  --font: 'Roboto';
  max-width: 100%;
  overflow: hidden;
`;

const Color = {
  blue: 'var(--color-blue)',
  white: '#fff',
  tan: '#eacda3',
  purple: '#a044ff',
  yelloworange: '#F0CB35',
  limecicle: '#c2e59c',
  hotpink: '#fc00ff',
  aqua: '#267871',
  leaf: '#00bf8f',
};

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Index>
        <FullScreenSection color={Color.blue}>
          <Logo />
        </FullScreenSection>

        <FullScreenSection image="/static/full-screen.png">
          <Button transparentText onClick={this.handleOpenModal}>Open a modal</Button>
          <Modal contentLabel="Example Modal" isOpen={this.state.showModal}>
            <Title>I am a modal (Title)</Title>
            <Text>
              And this is paragraph text, but that shouldn't stop
              you from adding <Button>A Button</Button> or nontext things.
              A lot of text or not that much I don't know what...
              Some amount of text, various amounts of texts,
              in various contexts. Filling space with text,
              and wrapping lines, making rows. :smile: Oh,
              and you can use all sorts of logical shortcuts for emojiOne
              emojis like :robot:
            </Text>
            <EmojiButton onClick={this.handleCloseModal}>Close the modal :x:</EmojiButton>
          </Modal>
        </FullScreenSection>

        <FullScreenSection gradient="dusk">
          <Title>We turn ideas into beautiful software.</Title>
          <Button>Practice</Button>
        </FullScreenSection>

        <FullScreenSection gradient="firewatch" image="/static/b2-team-work.png">
          <Title>I'm a gradient and image section</Title>
        </FullScreenSection>
        <GridContainer>
          <GridItem gradient="dusk" image="/static/dmiller.jpg" />
          <GridItem color={Color.yelloworange} image="/static/tborres.jpg" />
          <GridItem color={Color.tan} image="/static/jridenbaugh.jpg" />
          <GridItem color={Color.leaf} image="/static/chawkins.jpg" />
          <GridItem color={Color.hotpink} image="/static/csteinert.jpg" />
          <GridItem color={Color.limecicle} image="/static/sludemann.jpg" />
          <GridItem color={Color.purple} image="/static/khamper.jpg" />
          <GridItem color={Color.aqua} image="/static/rdunkle.jpg" />
          <GridItem color={Color.blue} image="/static/mkendall.jpg" />
        </GridContainer>

        <FullScreenSection gradient="sulphur">
          <EmojiButton>Some things are hard to read :strawberry:</EmojiButton>
        </FullScreenSection>
      </Index>
    )
  }
}
