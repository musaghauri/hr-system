import styled from 'styled-components';
import { Segment, Container } from 'semantic-ui-react';

const StyledContainer = styled(Container)`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  height: 100vh !important;
`;
const StyledSegment = styled(Segment)`
  padding: 3em !important;
`;
const CenteredHeading = styled.h1`
  text-align: center;
`;
const StyledAnchor = styled.a`
  display: inline-block;
  margin-bottom: 7px;
  cursor: pointer;
`;

export { StyledContainer, StyledSegment, StyledAnchor, CenteredHeading };
