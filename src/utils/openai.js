import axios from 'axios';

export async function generateProjects({
  skills,
  interests,
  time,
  experienceLevel,
}) {
  const prompt = `
  I am a ${experienceLevel} level developer with skills in ${skills}, interested in ${interests}, and I have about ${time}. 
Suggest 3 to 5 unique, buildable project ideas. For each idea, include:

- Title
- Short description
- Suggested tech stack
- Difficulty (Easy, Medium, Hard)
- Why it's appropriate for a ${experienceLevel} level developer
    `;

  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    },
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data.choices[0].message.content;
}
