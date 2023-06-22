# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Neutral

- Almost White: hsl(0, 0%, 98%)
- Medium Gray: hsl(0, 0%, 41%)
- Almost Black: hsl(0, 0%, 8%)

## Typography

### Body Copy

- Font size (paragraph): 18px

### Font

- Family: [Epilogue](https://fonts.google.com/specimen/Epilogue)
- Weights: 500, 700
/* {
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

header {
    display: flex;
    gap: 15px;
    padding: 7px 10px;
}

.left {
    display: flex;
   justify-content: space-between;
    gap: 30px;
    margin-left: 30px;
    padding-top: 15px;
    position: relative;
    display: inline-block;
}

button {
    background-color: #030000;
    color: white;
    font-size: 16px;
    border: none;
    width: 80px;
    border-radius: 7px;
    padding-right: 3px;
    height: 20px;
}



  .dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  margin-top: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 7px;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {background-color: #ddd;}

  .left:hover .dropdown-content {display: block;}

  .left:hover button {background-color: #5525c5;}

.right {
    margin-left: 36%;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    padding-top: 15px;
}

.there {
    margin-left: 5%;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    padding-top: 15px;
}

a {
    color: #333;
    text-decoration: none;
}

.h {
    font-size: 70px;
    font-family: sans-serif;
    margin-top: 120px;
    margin-left: 120px;
}

.name {
    font-family: sans-serif;
    margin-left: 20px;
}

main {
    display: flex;
    gap: 70px;
}

img {
    width: 420px;
    height: 430px;
    margin-top: 30px;
    padding-left: 120px;
}

.p {
    margin-left: 120px;
    margin-top: 50px;
    font-size: 18px;
    color: #5b5b5b;
}

p {
    padding-left: 150px;
    color: black;
    font-size: 17px;
    padding-top: 60px;
    border: 2px black;
}



.d:hover {
    color: rgb(146, 144, 144);
    transition: 5s;
}

footer {
    padding-top: 40px;
    text-align: center;

}

img:hover {
    width: 500px;
    height: 460px;
    transition: 3s;
}
 
a {
    text-decoration: none;
}


a:hover {
    background: #333;
    color: white;
    padding-left: 15px;
    padding-top: 2px;
    width: 80px;
    border-radius: 7px;
    transition: 2s;
}
*/ <!--<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">  displays site properly based on user's device

  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
  <link rel="stylesheet" href="style.css">
  <title>Frontend Mentor | Intro section with dropdown navigation</title>

  Feel free to remove these styles or customise in your own stylesheet 👍
  <style>
    .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
  </style>
</head>
<body>
  <header> <h1 class="name">Snap</h1>
     <nav class="left">
      <button class="dropbtn">Features</button>
   <div class="dropdown-content">
    <a href="#">Todo List</a></li>
    <a href="#">Calendar</a></li>
    <a href="#">Reminders</a></li>
    <a href="#">Planning</a></li>
   </div>  
  </nav>
  <nav class="left">
    <button class="dropbtn"> Company</button>
    <div class="dropdown-content">
      <a href="#">History</a>
      <a href="#">Team</a>
      <a href="#">Blog</a>
    </div>
  </nav>
  <nav class="there">
    <a href="#" target="_blank"> Careers</a>
     <a href="#">About</a>
  </nav>
  
   <nav class="right">
    <a href="#"> Login</a>
    <a href="#">Register</a>
  </nav>
  </header>
<main>
  <div class="main"><h1 class="h">Make <br> remote work</h1>

    <h5 class="p">Get your team in sync, no matter your location. <br> Streamline processes, 
      create team rituals, and <br> watch productivity soar.</h5>
  
   <p class="d"> Learn more</p></div>
   <img src="image-hero-desktop.png" alt="image-hero-desktop">
  </main>
 <footer><small>OA2302 • © 2023</small> </footer>
</body>
<script src="script.js"></script>
</html> -->