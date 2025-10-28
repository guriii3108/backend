require('dotenv').config()
const express = require("express");

const app = express();
const port = 4000;

const githubData={
"login": "guriii3108",
"id": 114786738,
"node_id": "U_kgDOBteBsg",
"avatar_url": "https://avatars.githubusercontent.com/u/114786738?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/guriii3108",
"html_url": "https://github.com/guriii3108",
"followers_url": "https://api.github.com/users/guriii3108/followers",
"following_url": "https://api.github.com/users/guriii3108/following{/other_user}",
"gists_url": "https://api.github.com/users/guriii3108/gists{/gist_id}",
"starred_url": "https://api.github.com/users/guriii3108/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/guriii3108/subscriptions",
"organizations_url": "https://api.github.com/users/guriii3108/orgs",
"repos_url": "https://api.github.com/users/guriii3108/repos",
"events_url": "https://api.github.com/users/guriii3108/events{/privacy}",
"received_events_url": "https://api.github.com/users/guriii3108/received_events",
"type": "User",
"user_view_type": "public",
"site_admin": false,
"name": "Gurveer Singh",
"company": null,
"blog": "",
"location": null,
"email": null,
"hireable": null,
"bio": "AI & ML Graduate | Learning Web Development | #100DaysOfWebDev | Open to collaborations",
"twitter_username": "guriii3108",
"public_repos": 10,
"public_gists": 0,
"followers": 1,
"following": 4,
"created_at": "2022-10-01T00:53:59Z",
"updated_at": "2025-09-25T01:13:04Z"
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/twitter',(req,res)=>{
  res.send('GURIII@3105')
})

app.get('/login',(req,res)=>{
  res.send('<h1>Login Page</h1>')
})

app.get('/github',(req,res)=>{
  res.json(githubData);
})

app.listen(process.env.PORT, () => {
  console.log( `Running on: ${port}`);
});
