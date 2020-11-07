# SimpStart
<img src='https://share.wildbook.me/yV6XJjnbuPkdyD4w.png'>
A simple and hopefully nice looking and easily customizable start page.

## Features
* Categorize your links and folders easily
* Search with google (default) "dog", duckduckgo "-d dog", youtube "-y dog"
* Easily customize

## Prequisites
 * Have node & npm installed on your machine
 * Have basic Javascript knowledge, not really though
 * Create a Github Account

## How to use
Might be a bit hard to follow if you aren't used to this kind of thing... Sorry

1. Fork this repo, and download your forked version onto your pc.
2. Go into the cloned/downloaded repo directory
3. Run ```npm install```
4. Run ```npm run serve``` to see your changes in real time
5. Open and Edit ``App.vue`` in the src folder 

<img src='https://share.wildbook.me/4X74vpEZtFcCRoUb.png'>

<img src='https://share.wildbook.me/iW504LfGueltk4ck.png'>

You can easily find and edit these lines.

6. Change/Add/Delete Link, Open ``Header.vue`` in the components folder
<img src='https://share.wildbook.me/3NXfO5sABtuFP5pO.png'>
Now I realize this might look scary, but just follow the structure, make sure to not forget the ',' and use mine as a reference. 

7. Finally! Once you're all done with that you can run the commands while in the ``SimpStart`` directory. 
* git add -A
* git commit -m 'My finished version' 
* git push

8. Deployment, and the rest is your browser settings. 
* Head over to <a href='https://www.netlify.com/'> Netlify </a> login with github, and create a new site. Click on github, go to your forked repo, and for the build command include. ``npm run build`` and for the directory type ``dist`` 
### Goodluck
