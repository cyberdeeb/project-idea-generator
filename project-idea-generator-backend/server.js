/* eslint-disable space-before-function-paren */
/* eslint-disable comma-dangle */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/generate', async (req, res) => {
  const { skills, interests, time, experienceLevel } = req.body;
  const prompt = `
I am a ${experienceLevel} level developer with skills in ${skills}, interested in ${interests}, and I have about ${time}. 
Suggest 3 to 5 unique, buildable project ideas. For each idea, include and strictly follow this format:

1. **Project Title**
- Description: Short description here
- Stack: Suggested tech stack here
- Difficulty: Easy, Medium, or Hard

2. **Another Project Title**
- Description: Short description here
- Stack: Suggested tech stack here
- Difficulty: Easy, Medium, or Hard

Make sure each project is separated by a blank line and follows this exact format with numbered titles in bold markdown.`;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const result = response.data.choices[0].message.content;
    res.json({ content: result });
  } catch (err) {
    console.error('OpenAI error:', err.message);
    res.status(500).json({ error: 'Failed to generate ideas.' });
  }
});

app.listen(3001, () => {
  console.log('Backend running on http://localhost:3001');
});
