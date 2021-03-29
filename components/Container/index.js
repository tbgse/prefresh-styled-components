import * as Styles from './styles';

export default function Container (props) {
  const {
    children
  } = props;

  return (
    <Styles.Wrapper>
      <Styles.Content>
        {children}
      </Styles.Content>
    </Styles.Wrapper>
  )
}