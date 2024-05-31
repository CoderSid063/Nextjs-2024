import fs from "fs";
import path from "path";

export function buildFeedbackPath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

export function extractFeedback(filePath) {
  try {
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    return data;
  } catch (error) {
    console.error("Failed to read or parse feedback file:", error);
    return [];
  }
}

function handler(req, res) {
  if (req.method === "POST") {
    if (req.headers["content-type"] !== "application/json") {
      return res.status(400).json({ message: "Invalid Content-Type" });
    }
    console.log(req.body);

    const { email, text } = req.body;

    if (!email || !text) {
      return res.status(422).json({ message: "Email and text are required" });
    }

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      text,
    };

    const filePath = buildFeedbackPath();
    let data = extractFeedback(filePath);

    data.push(newFeedback);

    try {
      fs.writeFileSync(filePath, JSON.stringify(data));
      res.status(201).json({ message: "Success!", feedback: newFeedback });
    } catch (error) {
      console.error("Failed to write feedback file:", error);
      res.status(500).json({ message: "Failed to store feedback" });
    }
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({ feedback: data });
  }
}

export default handler;
