# PomoZen ⏰
Pomodoro is a focus technique used to improve  focus. User's focus section (pomodoro) has 25 minutes, and they can use it to focus on learning, reading or any deep work, after that the user has 5 minutes break (short break). It also allows user to customize the length of sessions and breaks.


![Screenshot_20221228_195444](https://user-images.githubusercontent.com/79744258/209830931-531638a9-1915-40e9-ba4b-b30d3a4b2551.png)


# Setup ⚙️

Before starting, please make sure you have installed [NodeJs](https://nodejs.org/en/download/) on your machine.

- Clone this repository into your local machine  and cd into the project directory and then into the client directory
```sh
git clone https://github.com/Avi-88/pomozen.git
cd pomozen/client
```
 - Install all the required dependencies for this project.
```sh
npm install 
```
 - Run the development server using the below command and navigate to `localhost:3000` in your web browser to access the website.
```sh
npm run dev 
```

# About project ℹ️

This project was made while I was learning and exploring NextJS. It is a productivity tool that I had quite a lot of fun while building and also learned quite a lot from this. I had used redux previously but this time was the first for using redux persist for persisting the session settings and user login.

# Problem it Solves 🎯

In recent times it has become very hard to be productive due to increase in the number of distractions that rob you of your precious time. There are several techniques that have been scientifically proven to increase productivity and focus , the Pomodoro technique is one of them. Along with time management techniques it has also been proven that listening to ambient sounds also helps the mind to increase focus. Pomozen combines these two claims to provide the user with an environment which will help them increase their productivity and also keep track of their progress by providing previous session statistics. It also provides option to maintain a todolist which will help the user to maintain a clear goal during the sessions and avoid distractions.

# Features 💣

+ Customizable countdown timer - provides option to personalize your session and break lengths
+ Switch between themes - Offers three themes that the user can switch between according to their preference
+ Ambient sound - Option to play ambient sounds relative to selected theme
+ Todolist - A simple todolist to add and manage tasks dedicated to the sessions.
+ Session statistics - A dashboard displaying statistics of previous sessions (login required)

# Technologies 🚀

+ NextJS
+ MaterialUI
+ Firebase
+ Redux
+ Redux Persist
+ TailwindCSS

# Insights into the project 🔎

This project was built to demonstrate use of NextJs with Firebase along with Redux for state management. It supports user authentication with the help of Firebase. The User can login/register using their email, it also has google and github Oauth support. Once logged In, all of the user's sessions will be registered into the Firestore database which is linked to their userId generated during registration. The history tab displays statistics of the previous sessions linked to the user along with list of sessions and their timestamps. This project will provide user with a platform supporting multiple productivity boosting strategies inorder to avoid distractions and achieve their goals.

# Future Improvements ✨

- [ ] Changeable sequence of tasks in todolist according to priority
- [ ] Detailed graph of session statistics
- [ ] More themes
- [ ] Support to connect users spotify playlist 
- [ ] And some UI improvements

# Contact

If you need any help, feel free to find me [here](https://linkfree.eddiehub.io/Avi-88)
