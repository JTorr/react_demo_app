React Teaching App
======

This app is a walkthrough for creating your first React app.

Pre-Setup Instructions: Installing NPM
------

You must have NPM (Node Package Manager) installed prior to this workshop.

To check if node is installed:

```
npm -v
```

If it is not installed you will see a message like:
"env: node: No such file or directory""
If it is installed, the version will be shown.

To update npm to the latest version:

```
npm install npm@latest -g
```

If you do not have NPM installed, the easiest way on a Mac is with Homebrew:

```
brew install node
```

If you don't have Homebrew, run this command to install it first:
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

For installation on other systems, see https://nodejs.org.

App Setup Instructions
------

1. First, install the npm package `create-react-app`:

 Install this globally with:

 ```
 sudo npm install -g create-react-app
 ```

2. Clone the app:

 ```
 git clone https://github.com/JTorr/react_demo_app.git
 ```

3. CD into the directory you cloned the app into.

 ```
 cd react_demo_app
 ```

4. Install the node packages the app depends on

 ```
 npm install
 ```
