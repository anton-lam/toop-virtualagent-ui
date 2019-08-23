# Toop-virtualagent-ui

Ui component of the toop-virtualagent for an interview. Needs to be run in conjunction with the [toop-virtualagent server](https://github.com/anton-lam/toop-virtualagent).

Quick set up would be to run the following commands: 
1. navigate to this directory
1. npm i
2. make sure the api is running on localhost:3000
4. ng serve in this directory
5. navigate to the website at http://localhost:4200 

# Features

So far I have completed: 
* login feature
* register + email verification feature with password and email validations 
* partial content and full content display 
* page not found landing page 
* bonus content can be found when logging in, button top-right of the header, and shows a list of verified and unverified emails

# Testing

I only had time to do testing on the API side. Thankfully it's end to end testing! Refer to the other repo to run it. 

# Troubleshooting

There is already a default user with the 
```
email: abc@gmail.com, password: password
``` 


