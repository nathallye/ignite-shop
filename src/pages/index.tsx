import { styled } from "../styles";

const Button = styled("button", {
  display: "flex",
  
  backgroundColor: "$green300",
  borderRadius: 4,
  border: 0,

  gap: "1rem",
  padding: "4px 8px",

  span: {
    fontWeight: "bold"
  },

  "&:hover": {
    filter: "brightness(0.8)"
  }
});

const Home = () => {
  return (
    <Button>
      <span>Teste</span>
      Enviar
    </Button>
  );
}

export default Home;
