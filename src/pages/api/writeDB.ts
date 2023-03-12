import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // // send to api
    const data = req.body;
    console.log(data);
    const send = await fetch(
      "https://codehack-2023-server.christopherhuk1.repl.co/dummy/1/updateNotes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }
    );
    // const json = await send.json();
    res.status(200).json({ message: "Success" });
  } else {
    res.status(404).json({ message: "Not found" });
  }
}
