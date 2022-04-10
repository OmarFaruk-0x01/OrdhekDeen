<div id="top"></div>
<!-- PROJECT LOGO -->
<br />

<div align="center">
  <a href="https://github.com/OmarFaruk-0x01/Dictator" > 
    <img src="Logo.png" alt="Logo" width="120" height="120">
  </a>

<div>

## **Ordhek Deen**

  <p align="center">
    Dictator is a dictionary app made for IELTS students with multi-search ability.<br> It's one kind of Word-Search-engine
    <br />
    <br />
    <a href="https://github.com/OmarFaruk-0x01/Dictator/issues">Report Bug</a>
    ·
    <a href="https://github.com/OmarFaruk-0x01/Dictator/issues">Request Feature</a>
  </p>
</div>
</div>



<!-- TABLE OF CONTENTS -->
<details open >
  <summary style="cursor: pointer;">Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features-with-snapshots">Features with Snapshots</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
        <li><a href="#prerequisites">Prerequisites</a></li>
    <li>
      <a href="#installation">Installation</a>
      <ul>
        <li><a href="#frontend">Frontend</a></li>
        <li><a href="#backend">Backend</a></li>
      </ul>
    </li>
    <li>
      <a href="#setup_run">Setup & Run</a>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
   
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
<div align="center">
<img src="Screenshots/OD%20Cover.png">
</div><br>
Dictator is a word-search-engine made for students spacially for IELTS students with awesome features e.g. <b>Clean UI</b>, <b>Synonyms</b>, <b>Antonyms</b>, <b>Examples</b>, <b>Grammars</b>, <b>Translation</b>, <b>Saving Offline</b>, <b>Generating PDF</b>, etc. The app was made with React Native as a Frontend Technology and Python Flask as a Backend Technology. The app will help students a lot. Students can easily get Word Information and make a note by generating a PDF with one click.  

<p align="right">(<a href="#top">back to top</a>)</p>

## Features with Snapshots
1. **Multi-Search ability** 
   students can search 5 words at a time.
   <details style="cursor: pointer;" ><summary>snapshot</summary>

   <img src="Screenshots/Screenshot_1614395593.png" width="300"/>

   </details>
2. **Search Result will cached in server** 
   
3. **All Information of each searched words.**
   Word's defination, examples, synonyms, antonyms, etc. 
   <details style="cursor: pointer;" ><summary>snapshot</summary>

   <img src="Screenshots/Screenshot_1614395612.png" width="300"/>

   </details>
4. **Each Word has upto 15 extra examples.**
   <details style="cursor: pointer;"><summary>snapshot</summary>

   <img  src="Screenshots/Screenshot_1614395821.png" width="300"/>
   

   </details>
5. **Students can save search results in offline**
   <details ><summary>snapshot</summary>

   <img  src="Screenshots/Screenshot_1649398165.png" width="300"/> 
   

   </details>
6. **Students can take note as a PDF**
   
7. **Separate error screen**
   notify all kind of crashes here.
   <details ><summary>snapshot</summary>

   <img  src="Screenshots/Screenshot_1614395831.png" width="300"/> 
   

   </details>
## Built With 
#### Frontend Technology  
* [React Native](https://reactnative.dev/)
* [React Context API](https://reactnative.dev/)


#### Backend Technology  
* [Python Flask](https://svelte.dev/) 
* [BeautifulSoup4](https://pypi.org/project/beautifulsoup4/)
* [HTML to PDF]()
* [Mongo_Client]()

<p align="right">(<a href="#top">back to top</a>)</p>


## Prerequisites
There are some prerequisites to run this app and server

* **NPM**
  
  Follow the instruction to install [node-js & npm](https://nodejs.org/de/download/package-manager/)
######
* **Python3**
  <details>
  <summary>Linux</summary>
  
  ```sh
  sudo apt-get install python3
  sudo apt-get instsll python3-pip
  ```
  </details>
  <details>
  <summary >MacOS</summary>
  
  ```sh
  brew instsll python3 python3-pip
  ```
  </details>
  <details>
  <summary>Windows</summary>
  Download Python Binary by <a href="https://www.python.org/ftp/python/3.10.4/python-3.10.4-amd64.exe" download>clicking here</a> 
  </details>
##### 
* **React Native**

  React native has a greate [documentation](https://reactnative.dev/docs/environment-setup) for enviroment setup 


## Installation
### Frontend
1. Clone the repo
     ```sh
   git clone https://github.com/OmarFaruk-0x01/Dictator
   ```
2. Goto to the Frontend Folder
    ```sh
    cd Frontend
    ```
4. Install NPM packages
   ```sh
   npm install
   ```


### Backend
1. Goto to the Backend Folder
    ```sh
    cd Backend
    ```
2. Install dependencies 
   ```sh
   pip3 install -r requirements.txt
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- Setup Projects -->
<div id="setup_run"></div>

## Setup & Run
Now you have to run some commands to start the app.
### Frontend
1. To run the application
   ```sh
   cd Frontend
   npx react-native run-android # 'run-ios' if you are in macOS
   ```
2. To start the developement server
   ```sh
   npx react-native start
   ```
3. To make a Release Build follow [the article][release_build_article].
   
### Backend
Use those commands to run the backend server.
1. Configure Email and MongoClient. 
   goto this path `Backend/config.py` and make change with your information
   ```py
   # When students send a feedback your ADMIN_EMAIL will recive a mail from DICTATOR_EMAIL;
   # Make sure Your DICTATOR_EMAIL's Less Security Option is enabled if not? then follow this url https://myaccount.google.com/lesssecureapps;
   DICTATOR_EMAIL: str = "<sender_gmail>"
   DICTATOR_PASSWORD: str = "<sender_gmail_pass>"
   ADMIN_EMAIL: str = "<reciver_gmail>"
   # mongoClient Url
   MONGO_CLIENT_URL = "<mongoclient_url>"
   ```
2.  Now run the Backend server
    ```sh
    cd Backend
    python3 main.py
    ```
**Any Issue?**
If there are any connection issue with localhost server then use [Ngrok][ngrok_url] or any other porxy.
You can change server host url from `Frontend/src/helpers/environment.js` this file.
 
```js
const Env = {
  p: {
    // in production mode backend host url
    BaseURL: '',
    APIKEY: '123321',
  },
  d: {
    // in developement mode backend host url
    BaseURL: '<Your Ngrok/Proxy url>',
    APIKEY: '123321',
  },
  mode: 'dev',
};

 ```

<p align="right">(<a href="#top">back to top</a>)</p>




[release_build_article]: https://instamobile.io/android-development/generate-react-native-release-build-android/
[ngrok_url]: https://ngrok.com/