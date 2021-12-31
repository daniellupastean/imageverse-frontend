import styled from 'styled-components';

export default function Logo() {
  return (
    <div>
      <ColoredWord color="#359aef">IMAGE</ColoredWord>
      <ColoredWord color="#ffffff">VERSE</ColoredWord>
    </div>
  );
}

export const ColoredWord = styled.span`
  font-weight: 900;
  font-size: 48px;
  line-height: 59px;
  color: #359aef;
  color: ${(p) => p.color};
  @media (max-width: 450px) {
    font-size: 32px;
  }
`;
