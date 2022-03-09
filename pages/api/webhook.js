export default async function handleWebhook(req, res) {
  console.log("WORKS!!!!!", req.headers);

  const secret = process.env.ZAPIER_WEBHOOK_SECRET;

  if (req.headers["x-secret"] === secret) {
    await res.unstable_revalidate("/projects");
    return res.json({ revalidate: true });
  }

  return res.status(401).end();
}
