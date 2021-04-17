import { useFirebaseStorage } from 'config/useFirebase';
import React from 'react';
import styled from 'styled-components';

export const Container = styled.div``;

export const LinkComponent = styled.span`
  font-size: 1.2em;
  text-decoration: none;
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.palette.white[1]};
  margin-left: 2em;
  letter-spacing: 0.6px;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    display: ${props => props.keep || 'none'};
  }
  &:hover {
    opacity: 0.6;
  }
`;

const RightSideNavBar = () => {
  const url = useFirebaseStorage('Resume.pdf');

  const navigateToAboutMe = () => {
    const element = document.querySelector('#AboutMeSection');
    element.scrollIntoView();
  };

  const downloadResume = async () => {
    window.open(url);
  };

  return (
    <Container data-testid="rightSideNavBarContainer">
      <LinkComponent keep="true" data-testid="workButton" to="/" onClick={downloadResume}>
        Resume
      </LinkComponent>
      <LinkComponent to="/" onClick={navigateToAboutMe}>
        About
      </LinkComponent>
    </Container>
  );
};

export default RightSideNavBar;