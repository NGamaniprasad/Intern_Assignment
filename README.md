# Working steps to do Todo Summary Assistant.
# I have done with open key but git hub not accepting so, i removed from the code.
---

# Todo Summary Assistant

This is a full-stack project where users can manage their personal to-do list, get a 
summary of their pending tasks using AI (OpenAI GPT), and send that summary to a Slack channel.

---

## Features

- Add new to-do items
- View all current to-dos
- Delete to-dos
- Click a button to generate a summary of all pending tasks
- Send the summary to Slack automatically

---

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js with Express
- **Database**: Supabase (PostgreSQL)
- **LLM**: OpenAI API (for summarizing todos)
- **Slack**: Incoming Webhooks (to send the summary)

---

## How to Run the Project

### 1. Clone the repo


git clone https://github.com/yourusername/todo-summary-assistant.git
cd todo-summary-assistant


---

## Backend Setup


cd backend
npm install


### Create a `.env` file (copy from `.env.example`) and fill in your keys:

# Below are .env.example data we have chage as per crendtials
PORT=5000
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_key
SLACK_WEBHOOK_URL=your_slack_webhook_url




node index.js
# Or
npx nodemon index.js

---

## Frontend Setup


cd frontend
npm install
npm start


The app will run at `http://localhost:3000`

---

## Setting up Supabase

1. Go to [https://supabase.com](https://supabase.com) and create a new project.

2. Create a table called `todos` with two columns:

   * `id` (Integer, Primary Key, Auto Increment)
   * `text` (Text)

3. Get your `SUPABASE_URL` and `SUPABASE_KEY` from the project settings.

---

## OpenAI Setup

1. Go to [https://platform.openai.com](https://platform.openai.com)
2. Create an API key
3. Add it to your `.env` file under `OPENAI_API_KEY`

---

## Slack Setup

1. Go to [Slack Webhooks](https://api.slack.com/messaging/webhooks)
2. Create a webhook for the Slack channel you want to post in
3. Copy the webhook URL and add it to `.env` as `SLACK_WEBHOOK_URL`

---

## Endpoints (Backend)

  Method       Route               Description                  

  GET        `/api/todos`         Get all to-do items          
  POST       `/api/todos`         Add a new to-do              
  DELETE     `/api/todos/:id`     Delete a to-do by its ID     
  POST       `/api/summarize`     Generate summary and send it 

---

## .env.example

.env
PORT=5000
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_key
SLACK_WEBHOOK_URL=your_slack_webhook_url


---

## Author

Made for internship assignment by-- N Gamini Prasad
