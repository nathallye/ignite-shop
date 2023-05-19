import { NextApiRequest, NextApiResponse } from "next";

import { stripe } from "../../lib/stripe";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // const priceId = "price_1N75RnJVOkp1nN5WFQYlkQd9"; // priceId retornado no console.log de product.defaultPriceId ao clicar em comprar agora na page product
  const { priceId } = req.body; // pega o priceId do corpo da requisição

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  if (!priceId) {
    return res.status(400).json({ error: "Price not found." });
  }

  const successUrl = `${process.env.NEXT_URL}/success`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl, // url que irá redicionar a página quando a compra for concluída com sucesso
    cancel_url: cancelUrl, // url que irá redicionar a página quando clicar em cancelar a compra
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1, // como não vai ter carrinho, não vai ser possivel adicionar mais de uma quantidade para a mesma compra 
      }
    ]
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  });
};

export default handler;
