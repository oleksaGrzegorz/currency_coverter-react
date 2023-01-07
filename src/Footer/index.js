import { MainFooter, Link, Container } from "./styled";

const Footer = () => (
  <MainFooter>
    <Container>
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://icons8.com/icon/42279/money"
      >
        "Money" icon from:{" "}
      </Link>

      <Link target="_blank" rel="noreferrer" href="https://icons8.com">
        Icons8.com
      </Link>
    </Container>
  </MainFooter>
);

export default Footer;
