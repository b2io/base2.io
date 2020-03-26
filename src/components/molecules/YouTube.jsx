import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const YouTubeWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`;

const YoutubeFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const YouTube = ({ title, url }) => (
  <YouTubeWrapper>
    <YoutubeFrame
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      frameBorder="0"
      src={url}
      title={title}
    />
  </YouTubeWrapper>
);

YouTube.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default YouTube;
