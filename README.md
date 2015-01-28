T4-userscripts
===============

Userscripts to make using the TERMINALFOUR content management system a faster process for power users.

These scripts can only emulate actions that an end user could perform, so should present no security risk, but are provided 'as is' and are used at your own risk. The cautious are encouraged to inspect the source of any script that they use.

## How to install

### Using greasemonkey or tampermonkey

* Install [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) (Chrome) or [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) (Firefox)
* When one of these extensions has been installed the scripts can be installed via [userscripts.org](http://userscripts.org/tags/t4userscripts). 

#### Alternative Chrome installation instructions

Visit chrome://chrome/extensions and drag a script into the window. The scripts can be downloaded as a .zip from [https://github.com/pwolstenholme/T4-userscripts/archive/master.zip](https://github.com/pwolstenholme/T4-userscripts/archive/master.zip).

Scripts available
-----------------


### Update and approve changes with one click or with `Ctrl` + `S`

Stop using that fiddly dropdown menu to Save and Approve changes! This script adds a big, wide button to the top of your modify content screen that will Save and Approve your work with just one click. Even better, as long as you're not inside the TinyMCE rich text editor, then you can use the `Ctrl` + `S` shortcut to save and approve your work without even using the mouse.

### Auto populate content output URIs as you type

When creating a new section in T4, your output URI will be created automatically as you type. Spaces will be converted to hyphens. Any existing URIs will not be affected. This probably isn't needed in cases where T4 does a spaces -> hyphens conversion for you, but our installation doesn't have that option enabled.

### Save your changes without leaving the page

Working on a page and need to save your changes but want to keep on editing the page afterwards? This adds an option to your Save and Approve dropdown menu to '*Save to a new window*' (or you can press `Ctrl` + `E`). Selecting these options submits your changes to T4 but in a new window, so your modify content screen is not affected.

### 'Proper' modify content links

Rather than use a T4 specific function fired by an onClick event to take you to an modify content page, this creates a link with a regular href value. The advantage is that these can be opened in new tabs whereas links with the onClick="T4_ChangePage(...)" method can't.

### Use the ACE editor to make editing raw HTML, CSS, JS or PHP nicer

This relies on some form field IDs that are specific to our installation so might need some tinkering with. I think the default SiteManager installation uses ACE or some other code editor for some fields, but this uses an up to date version and has a lot more features.

Uses the [ACE](http://ace.c9.io) editor to make editing or reviewing code in T4 much nicer with:
* Syntax highlighting for JS, HTML, CSS and PHP
* Function collapsing
* Bracket and quote automatic closing
* Automatic indentation/outdenting
* Search and replace with regular expressions
* Highlight matching brackets
* Highlights matching variables, function names etc
* Multiple cursors

### Browse content with next/previous buttons

Just created a load of new content items and now have to work through them one by one making changes?

This script adds `<` (previous) and `>` (next) buttons to your modify content screen allowing you to skip forward and back. **It works using content IDs not the order of a section within T4, so this only works for moving between batches of content items that were created within seconds of each other**.

### Make all T4 tables zebra striped

Make scanning across lists in T4 easier by giving odd and even rows a slightly different colour.

### Bulk approve content

The script affects the T4 approve content screen (URL ending in 'SiteManager?ctfn=status'). It allows the bulk selection of a large number of content items at once, which is useful when you have duplicated lots of content from one part of a site to another and need to move them from a pending status to an approved status.

Usage

1. Select the checkbox for the first item of content you would like to approve
1. Select the checkbox for the last item of content you would like to approve.
2. Click the `Select all between two checked items`
3. Review the selected items to make sure they are OK to be approved
1. When you are ready you can click the standard `Approve` button to submit your changes
