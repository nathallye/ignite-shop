import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))", // largura intera da tela(100vw) - (a largura intera da tela(100vw) - tamanho das margens do container(1180px) dividido por 2)
  marginLeft: "auto",
  minHeight: 656
});

export const Product = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,

  position: "relative",
  
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
    
    div: {
      display: "flex",
      flexDirection: "column",

      gap: "0.25rem",

      strong: {
        fontSize: "$lg",
        color: "$gray100",
      },
  
      span: {
        color: "$green300",
        fontSize: "$xl",
        fontWeight: "bold"
      },
    },

    button: {
      display: "flex",
      alignItems: "center",
      
      backgroundColor: "$green500",
      border: 0,
      borderRadius: 6,

      padding: "0.75rem",
    }
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1
    }
  }
});
