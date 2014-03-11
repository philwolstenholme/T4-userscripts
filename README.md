T4-userscripts
===============

Bookmarklets and userscripts to make using the TERMINALFOUR content management system more pleasant.

Install using [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) (Chrome) or [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) (Firefox). These scripts can only emulate actions that an end user could perform, so should present no security risk, but are provided 'as is' and are used at your own risk.

Scripts available
-----------------


### Update and approve changes with one click or with `Ctrl` + `S`

Stop using that fiddly dropdown menu to Save and Approve changes! This script adds a big, wide button to the top of your modify content screen that will Save and Approve your work with just one click. Even better, as long as you're not inside the TinyMCE rich text editor, then you can use the `Ctrl` + `S` shortcut to save and approve your work without even using the mouse.

### Auto populate content output URIs as you type

When creating a new section in T4, your output URI will be created automatically as you type. Spaces will be converted to hyphens and eny existing URIs will not be affected.


### Save your changes without leaving the page

Working on a page and need to save your changes but want to keep on editing the page afterwards? This adds an option to your Save and Approve dropdown menu to '*Save to a new window*' (or you can press `Ctrl` + `E`). Selecting these options submits your changes to T4 but in a new window, so your modify content screen is not affected.

### Browse content with next/previous buttons

Just created a load of new content items and now have to work through them one by one making changes?

This script adds `<` (previous) and `>` (next) buttons to your modify content screen allowing you to skip forward and back. It works using content IDs not the order of a section within T4, so this only works for moving between batches of content items that were created within seconds of each other.


### Make all T4 tables zebra striped

Make scanning across lists in T4 easier by giving odd and even rows a slightly different colour.
