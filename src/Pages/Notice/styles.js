import styled, { css } from "styled-components";

export const BackText = styled.p`
  padding-bottom: .75rem;
  font-size: 1rem;
  color: var(--color_lightGray);
  font-family: FiraSans;
  line-height: 1.8;
  text-align: justify;
`;

export const NoticeTitle = styled.h1`
  padding-top: 1rem;
  padding-bottom: ${props => !props.noSpace && '.75rem'};
  font-size: 1rem;
  color: var(--color_black);
  font-family: FallingSky;
  line-height: ${props => props.noSpace ? '1.5' : '1.8'};
  text-align: justify;
`;

export const NoticeText = styled.p`
  padding-top: ${props => props.noSpace || '.75rem'};
  padding-bottom: ${props => props.paddingBottom && '1rem'};
  font-size: 1rem;
  color: var(--color_black);
  font-family: FiraSans;
  line-height:  1.8rem;
  text-align: justify;
`;

export const UnderlineText = styled.span`
  border-bottom: 2px solid black;
  text-align: justify;
  line-height: ${props => props.margin && '2rem'};
`;

export const UL = styled.ul`
  list-style: none;

  li {
    padding-bottom: .5rem;
    font-size: 1rem;
    color: var(--color_black);
    font-family: FiraSans;
  }
`;
