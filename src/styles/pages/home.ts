import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  
  // gap: "3rem",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))", // largura intera da tela(100vw) - (a largura intera da tela(100vw) - tamanho das margens do container(1180px) dividido por 2)
  marginLeft: "auto",
  minHeight: 656
});

export const Product = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,

  position: "relative",
  // padding: "0.25rem",
  
  cursor: "pointer",
  overflow: "hidden",

  img: {
    objectFit: "cover" // para a imagem caber no container sem distorcer
  },

  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 6,
    
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    strong: {
      fontSize: "$lg",
      color: '$gray100',
    },

    span: {
      color: "$green300",
      fontSize: "$xl",
      fontWeight: "bold"
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1
    }
  }
});
