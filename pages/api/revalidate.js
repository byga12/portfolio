export default async function handler(req, res) {
  console.log("REQUEST:", req);

  const secret = process.env.ZAPIER_WEBHOOK_SECRET;
  if (req.query.secret !== secret) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    await res.unstable_revalidate("/projects");
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
