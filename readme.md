# Getting started

## running a standalone version (not storybook)

Navigate to your repo
``` cd ux-lic ```

Run command
``` npm install ```
then
``` npm start ```

Then open http://localhost:3000/ to see your app.

## SASS & CSS

`css-build` takes `sass/mystyles.scss` as an input, and outputs `src/mystyles.css`

`css-watch` builds the CSS and watches for changes.

To test it out, go in your terminal and run the following command:
`npm run css-build`

If set up correctly, you will see the following message:
` Rendering Complete, saving .css file...
Wrote CSS to /path/to/mybulma/css/mystyles.css `

### Updating the UI styles

Variables are stored here `sass/mystyles.scss` also in this files you'll see it points to the original Bulma styles. If you would like to make a modification to a style for example add a new kind of button. copy the Bulma version of button to the `sass/` folder and point mystyles.scss to your new file.  

## Writing stories for storybook
