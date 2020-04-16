# [lucasflores.com](https://lucasflores.com)

This repo gives life to  my personal website  [lucasflores.com](https://lucasflores.com).
It to as a resume/CV and a place to write about my interests, write and be subject of my side (often web based) projects, and to just generally show off :)

The sites template is heavily based on darren britton's personal [website](https://github.com/darrenbritton/darrenbritton.github.io) and is fully responsive, built with [Gatsby](https://gatsbyjs.org) and deployed using [Travis CI](https://travis-ci.com/)  
It uses the following cool bits (libraries):

- [**KaTeX**](https://katex.org) for typesetting math
- [**react-google-maps**](https://tomchentw.github.io/react-google-maps/) for google maps compenent
- [**gatsby-remark-prismjs**](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/) for syntax highlighting
- [**Disqus**](https://disqus.com) for blog post comments

To get this website up and running on your local machine do the folowing:
```
git clone https://github.com/lucasflores/lucas.github.io.git
cd lucas.github.io
```
Then to install dependencies, 
```
npm install
```
And then simply run 
```
gatsby develop
```
Notes:
* You will need to generate you own google maps API key in order for the google maps compenent to work. 
* You will also need to create a Travis CI account and link that to you github repo.
* I still can't get disqus to work but you will need to make an account there too to generate your own `shortname`. 
