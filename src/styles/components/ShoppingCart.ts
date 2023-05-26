import { styled } from "..";

export const ShoppingCartContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",

  width: "30rem",
  height: "100%",
  backgroundColor: "$gray800",

  position: "fixed",
  right: 0,
  top: 0,
  zIndex: 1000,

  button: {
    alignSelf: "flex-end"
  }
});

export const ImageContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  
  width: "100%",
  height: 93,
  maxWidth: 101,
  padding: "0.25rem",

  img: {
    objectFit: "cover",
  }
});

export const ItemContainer = styled("div", {
  display: "flex",
  gap: "1.25rem",

  div: {
    display: "flex",
    flexDirection: "column"
  }
});

export const InfosItem = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: "0.5rem",

  h3: {
    color: "$gray300",
    fontSize: "$md",
    fontWeight: 400
  },

  span: {
    color: "$gray100",
    fontSize: "$md",
    fontWeight: "bold"
  },
  
  button: {
    display: "flex",
    alignSelf: "flex-start",
    background: "none",
    border: 0,

    color: "$green500",
    fontSize: "$sm",
    fontWeight: 700
  }
});