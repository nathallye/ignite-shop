import { styled } from "..";

export const ShoppingCartContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "1.5rem",
  
  width: "30rem",
  height: "100%",
  padding: "3rem",

  backgroundColor: "$gray800",

  position: "fixed",
  right: 0,
  top: 0,
  zIndex: 1000,

  button: {
    alignSelf: "flex-end",

    background: "none",
    border: 0,

    cursor: "pointer",

    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.6,
    }
  }
});

export const CartItems = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem"
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

export const InfosItemContainer = styled("div", {
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
    alignSelf: "flex-start !important",

    color: "$green500",
    fontSize: "$sm",
    fontWeight: "bold",

    "&:not(:disabled):hover": {
      color: "$green300"
    }
  },
});

export const QuantityValue = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  div: {
    display: "flex",
    justifyContent: "space-between",

    color: "$gray100"
  },

  "div:first-child": {
    h4: {
      fontSize: "$sm",
      fontWeight: 400
    },

    span: {
      fontSize: "$sm",
      fontWeight: 400
    }
  },

  "div:nth-child(2)": {
    h3: {
      fontSize: "$xl",
      fontWeight: "bold"
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold"
    },
  },

  button: {
    backgroundColor: "$green500 !important",
    borderRadius: "8px",
    
    width: "100%",
    marginTop: "1rem",
    padding: "1.25rem",

    color: "$white",
    fontSize: "$md",
    fontWeight: "bold",

    "&:not(:disabled):hover": {
      backgroundColor: "$green300 !important"
    }
  }
});