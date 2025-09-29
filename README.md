## CS-214 Prettifier

I'm taking the CS-214 (Software Construction) course this fall and the teachers made a website to have all the course material and information in one place. However, I felt like it needed a little _makeover_ (and I visibly have too much time on my hands (no)). So I coded this script to add a few useful tweaks. I hope you'll find it funny or even useful! If you have any ideas, do not hesitate to contact me :) 

## Features

### Checkboxes and ToC
Each title or subtitle gets a checkbox next to it. You can simply click it when you've done that task and it will be displayed in the table of contents, where the link gets green and semibold.

The data created (aka what is checked or not) will be saved locally between sessions, meaning you can reload the page and reopen it without losing your progess. I'm working on adding a button to clear all of that.

### Dark theme
I was gonna do this, until [Sidonie Bouthors](https://github.com/SidonieBouthors) added it to the course website itself ^^ Thanks to them.

## Installation

### GreasyFork

For now, the script only works through the TamperMonkey extension. I'm working on making a bundle file to upload directly.

1. Install [Tampermonkey](https://www.tampermonkey.net/) (it's not that difficult, trust)
2. Head over to [the GreasyFork page](https://greasyfork.org/en/scripts/550061-cs-214-prettifier) andd click "`Install this script`"
3. A TamperMonkey tab opens up, hit "`Install`" again
4. You should be done! Now you can go to the class website and make use of it ^^

### Manual

If you are feeling barbaric, you can choose to install the script manually. You will not be getting the updates, though. For that, just copy the code from the `main.js` file, create a new script in TamperMonkey and just paste it there. But what has life done to you?
