import { Container } from '../components';
import styled from 'styled-components';

const LocalStyledElement = styled.div`
  width: 200px;
  height: 200px;
  background: rebeccapurple;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: arial;
  text-align: center;
`;

export default function Home() {
  return (
    <>
      <Container>
        My styles are imported and won't update!
      </Container>
      <LocalStyledElement>I am a local style and will update live!</LocalStyledElement>
    </>
  )
}
