const { createClient } = require('@supabase/supabase-js');
const axios = require('axios');
const { Configuration, OpenAIApi } = require('openai');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

exports.getTodos = async (req, res) => {
  const { data, error } = await supabase.from('todos').select('*');
  if (error) return res.status(500).json({ error });
  res.json(data);
};

exports.addTodo = async (req, res) => {
  const { text } = req.body;
  const { data, error } = await supabase.from('todos').insert([{ text }]);
  if (error) return res.status(500).json({ error });
  res.json(data);
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from('todos').delete().eq('id', id);
  if (error) return res.status(500).json({ error });
  res.json({ success: true });
};

exports.summarizeAndSend = async (req, res) => {
  const { data: todos } = await supabase.from('todos').select('*');
  const pending = todos.map(todo => `- ${todo.text}`).join('\n');

  const gptPrompt = `Summarize the following todos:\n${pending}`;
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: gptPrompt }]
  });

  const summary = response.data.choices[0].message.content;

  await axios.post(process.env.SLACK_WEBHOOK_URL, { text: `📝 Todo Summary:\n${summary}` });

  res.json({ message: 'Summary sent to Slack!' });
};
