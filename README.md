### my portfolio website

Visit the site at http://mwhatt.com/

This is a portfolio site I built in about 4-5 days using [gatsby.js](https://www.gatsbyjs.org/)! It was primarily a de-rusting exercise but also an exploration of using the gatsby framework for the first time. Overall the framework is super enjoyable to work with. It features some information about myself, a lot of the projects that i've worked on, and links to other places where my work is featured. As I complete more projects I'll continue to add them to this website.

This site was made in a pretty hasty manner as I wanted to build something quickly that worked, and there was definitely things I want to improve about the site. One of the big things is how page transitions are handled -- currently everything is re-rendered when a new page is loaded, but ideally the navbar would be able to persist its state between page transitions. I have a handle on [how I would go about fixing it](https://transitionlink.tylerbarnes.ca/docs/installation/) so at some point I might do that.

All of the assets were made by myself in photoshop. Most of the project art was also made by myself. 

### deployment

This site uses [travisci](https://www.travis-ci.com) to auto deploy any changes to a [linode server](https://www.linode.com/) when i merge pull requests into master.

### TODO

- Set up SSL for mwhatt.com
- Do some copy editing and review
- cleanup some code / potentially wonky css issues on mobile
- improve accessibility features
