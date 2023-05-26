import { styled } from "..";

export const ShoppingCartContainer = styled("div", {
  width: "30rem",
  height: "100%",
  backgroundColor: "$gray800",

  position: "fixed",
  right: 0,
  top: 0,
  zIndex: 1000,
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

  div: {
    display: "flex",
    flexDirection: "column"
  }
});