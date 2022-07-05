# Password Generator

This is a solution to [Scrimba's Password Generator solo project](https://scrimba.com/learn/frontend/module-34-solo-project-password-generator-coa6a4d1595f9f905934f09f5). This solo project helps to improve coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Requirements](#requirements)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

This solo project is a solution to Scrimba's password Generator app. 

It is an app that generates four different passwords

 of a specified length, giving users the ability to choose which passwords is their best fit.

The generated passwords are combinations of letters, numbers, and symbols thereby making them safe and suitable.

### Requirements

The following requirements are needed to complete the project:

- Array to hold all possible characters
- Button to generate 4 random password options.
- Display password options

Stretch requirements:
- Ability to set the password length
- 1-click copy password to the clipboard

### Screenshot

![Password generator](./passwordgen1.png?raw=true)
![Password generator Active State](./passwordgen2.png?raw=true)


## My process

### Built with

- Semantic HTML5 markup
- Plain CSS
- Flexbox
- Javascript


### What I learned

I learnt to use the substring() Javascript method to extracts characters, between two indices (positions), from a string, and returns the substring.

Example is as used in the function below:


```javascript
  function randomPasswordThree() {
        let password = ""
        for (let i = 0; i <= passwordLength - 1; i++) {
          let randomThree = Math.floor(Math.random() * characters.length);
          password += characters.substring(randomThree, randomThree + 1);
        }
        document.getElementById("password-three").value = password; 
      }
```
Also, I applied my knowledge of making a div centered in CSS using:

```css
 div {
  margin: 0 auto;
}
```
### Continued development
I plan to make this App responsive by adding some Responsive Design principles like:
- Media Queries.
- CSS Units like rem amd em.

I also hope to complete the second stretch requirement which is 1-click copy password to the clipboard.


### Useful resources

- [Scrimba](https://www.scrimba.com) - This helped me to know better about CSS, particularly in centering a div vertically and horizontally. I really liked this pattern and will use it going forward.
- [Freecodecamp](https://www.freedcodecamp.com) - This is   where I learned basics of HTML, CSS, and javascript before undertaking Scrimba's Front End Career path. I'd recommend it to anyone still learning this concepts.

- [View Project](https://ilivenoble.github.io/password-generator/)

## Author

- [Twitter](https://www.twitter.com/ilive_noble)
- [LinkedIn](https://www.linkedin.com/in/enyinnaya-noble)
