const OpenAI = require("openai");

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function generatePlan(portfolio, message) {
    const prompt = `
You are Vaultra, an autonomous treasury AI.

Portfolio:
${JSON.stringify(portfolio)}

User request:
${message}

Respond with:
- issue
- plan
- expected result
`;

    const res = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
    });

    return res.choices[0].message.content;
}

module.exports = { generatePlan };