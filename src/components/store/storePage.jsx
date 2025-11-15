import styled from "@emotion/styled";

const StorePage = () => {
  return (
    <Container>
      <BackgroundImage src="/background.png" />
      <div style={{ position: "absolute" }}>store</div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #ceb6c0;
`;

const BackgroundImage = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
`;

export default StorePage;
