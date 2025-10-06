export const validate = (schema) => (req, res, next) => {
  const data = { body: req.body, params: req.params, query: req.query };
  const parsed = schema.safeParse(data);
  if (!parsed.success)
    return res.status(400).json({ error: parsed.error.flatten() });
  Object.assign(req, parsed.data);
  next();
};