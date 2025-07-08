const { Claude } = require('@anthropic-ai/claude-code');

const claude = new Claude({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

async function main() {
  try {
    const response = await claude.complete({
      prompt: "Say hello to the world!",
      model: "claude-3-opus-20240229",
      max_tokens: 100,
    });
    console.log(response.completion);
  } catch (error) {
    console.error('Error from Claude:', error);
  }
}

main(); 