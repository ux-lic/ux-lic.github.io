# LIC UI framework

## Getting started
`npm install`

## Bulma
Bulma.io is a free, open source CSS framework based on *Flexbox* and used by more than *150,000* developers.

* It is 100% responsive and made mobile first.
* It uses a simple Flexbox grid for common layouts
* Easy to learn
* Quick to customise using SASS variables
* No JS required CSS only, so it integrates in any JS environment

### To update and create the CSS do this
Make any changes required to `sass/mytheme.scss`variables then run

`npm run css-build`

This will produce the compiled CSS `mystyles.css`
You can also use  the following command build on-the-fly

`npm run css-watch`

## Storybook

We use storybook to display our UI elements and componentry for use with ReactJS.

Run your storybook with 

`yarn storybook`