# Working steps Todo Summary Assistant.


---

# Todo Summary Assistant

This is a full-stack project where users can manage their personal to-do list, get a summary of their pending tasks using AI (OpenAI GPT), and send that summary to a Slack channel.

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

------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
