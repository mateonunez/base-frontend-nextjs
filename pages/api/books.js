export default function books(req, res) {
  res.setStatusCode = 200;
  res.setHeader("Content-Type", "application/json");

  return res.json([
    {
      id: 1,
      book: "The Firm",
      author: "John Grisham",
    },
    {
      id: 2,
      book: "Cracking the PM interview",
      author: "Jackie Bavaro",
    },
    {
      id: 3,
      book: "Fools Die",
      author: "Mario Puzo",
    },
  ]);
}
