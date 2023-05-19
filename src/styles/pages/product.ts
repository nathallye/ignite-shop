import { styled } from "..";

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch",
  gap: "4rem",

  maxWidth: 1180,
  margin: "0 auto"
});

export const ImageContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  
  width: "100%",
  height: 656,
  maxWidth: 576,
  padding: "0.25rem",

  img: {
    objectFit: "cover",
  }
});

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

  h1: {
    color: "$gray300",
    fontSize: "$2xl",
  },

  span: {
    display: "block",

    marginTop: "1rem",

    color: "$green300",
    fontSize: "$2xl",
  },

  p: {
    marginTop: "2.5rem",

    color: "$gray300",
    fontSize: "$md",
    lineHeight: 1.6,
  },

  button: {
    backgroundColor: "$green500",
    borderRadius: 8,
    border: 0,

    marginTop: "auto",
    padding: "1.25rem",

    color: "$white",
    fontSize: "$md",
    fontWeight: "bold",
    
    cursor: "pointer",

    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.6,
    },

    "&:not(:disabled):hover": {
      backgroundColor: "$green300"
    }
  }
});