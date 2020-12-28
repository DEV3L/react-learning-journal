# react-learning-journal
React front end to visualize learning journal events.

## Prerequisites
- Nodejs
- yarn || npm


## Environment Variables (.env)

**Firebase**
```
REACT_APP_FIREBASE_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN
REACT_APP_FIREBASE_DATABASE_URL
REACT_APP_FIREBASE_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID
```
![firebase](https://image.ibb.co/maGOnS/image.png)


**Google Analytics**
```
REACT_APP_GA_TRACKING_NUMBER  # Google Analytics tracking number
```

**Hotjar**
```
REACT_APP_HJID  # Hotjar ID
REACT_APP_HJSV  # Hotjar Snippet Version
```


## Setup

```bash
yarn install
yarn start
```


## Milestones
01. **20180522**: Project Inception 
02. **20180526**: Hosted on Netlify
    - [Brain Bit - Ledger](https://brain-bit-ledger.netlify.com/)
03. **20180527**: Login page with logo added
04. **20180921**: Kick the dust off the project and push up previously prending changes
05. **20181014**: Setup authentication with Google using react-auth-firebase


## References
- [CoderJourney Learn React Video Tutorials](https://www.youtube.com/playlist?list=PLbG4OyfwIxjFKJE_ZVZxsSt1ESc9S7kFb)
- [Add React to a New Application](https://reactjs.org/docs/add-react-to-a-new-app.html)
- [Netlify Continuous Deployment](https://www.netlify.com/docs/continuous-deployment/)
![netlify deployment configuration](https://image.ibb.co/iXWbVo/Screen_Shot_2018_05_26_at_3_46_04_PM.png)
- [Bootstrap Login Template](https://bootsnipp.com/snippets/dldxB)


## Interesting Components
- [React Circular Progressbar](https://www.npmjs.com/package/react-circular-progressbar)
- [AnimakitRotator](https://animakit.github.io/#/)
- [react-auth-firebase](https://www.npmjs.com/package/react-auth-firebase_)
  - [react-auth-firebase sandbox](https://codesandbox.io/s/v6w6r6521y)


## Recommended Dev Tools
- [Visual Studio Code](https://code.visualstudio.com/)
- [WebStorm](https://www.jetbrains.com/webstorm/)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- ... [Vim](https://www.youtube.com/watch?v=dQw4w9WgXcQ)


## Using Visual Studio Code
### Interactive Debugging React JavaScript
The launch configuration for the project is checked in!

## Using WebStorm
### Interactive Debugging React JavaScript
![javascript_react_configuration](https://image.ibb.co/grjXGn/Screen_Shot_2018_04_17_at_5_23_12_PM.png)

### Interactive Debugging Jest Tests
![jest_configuration](https://image.ibb.co/gnY5XS/Screen_Shot_2018_04_16_at_5_20_22_PM.png)


## TODO
- Add `CircleCI`
- Add `Monitoring Framework (Rollbar?)`
- Add `Acceptance Tests Framework`
- Add `Feature Toggles`
