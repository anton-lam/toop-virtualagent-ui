# Toop-virtualagent-ui

Ui component of the toop-virtualagent for an interview. Needs to be run in conjunction with the [toop-virtualagent server](https://github.com/anton-lam/toop-virtualagent).

Requirements: Current node.js which can be downloaded [here](https://nodejs.org/en/download/current/).

Quick set up would be to run the following commands: 
1. navigate to this directory
2. npm i
3. npm install -g @angular/cli@latest
4. make sure the api is running on localhost:3000
5. ng serve 
6. navigate to the website at http://localhost:4200 or http://localhost:4200/home

# Features

So far I have completed: 
* login feature
* register + email verification feature with password and email validations 
* partial content and full content display 
* page not found landing page 
* bonus content can be found when logging in, button top-right of the header, and shows a list of verified and unverified emails
* proper url routing 

# Testing

Test suites written in the other [repo](https://github.com/anton-lam/toop-virtualagent). 

# Troubleshooting

No logout API endpoint yet, so if you want to logout remove the JWT token from your browser. 

If needed, there is already a default user with the 
```
email: abc@gmail.com, password: password
``` 


