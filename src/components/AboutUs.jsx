import React, { Component } from 'react'
import '../componentsCSS/AboutUsStyle.css'

class AboutUs extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                   <div className="container">
        <main className="article">
          <p><span className="first-letter">W</span>eb Typography obsessed me. As many others,
            I fell in the trap of optimizing legibility. Definitly not an easy task.<br />Among all the contenders for the best reading experience on the Web, a name is
            always present and noteworthy: <strong>Medium.com</strong> .</p>
          <p>Looking for the arcane secrets that regulates good legibility, I immediately realized
            that I needed to follow in the footsteps of the masters. So I started dissecting the rules that
            makes <strong>Medium</strong> typography, well, great.</p>
          <p>There were long hours of <strong>tremendous effort</strong>, days and days of <strong>prolonged pains</strong>...</p>
          <blockquote>Now I want to share with you the results of those long hours 🦋</blockquote>
          <h2>An unexpected journey</h2>
          <p><span className="first-letter">C</span>omes out that nothing is better than a big first letter to super-charge your style.
            Rules are simples. A big letter that spans exactly two rows. Play with <code>line-height</code> to get it right.</p>
          <h2>The hero</h2>
          <p>We all know who the leader is.<br />When designing a website you have to take into account fonts for three sectors: the <strong>content</strong>, the <strong>UI</strong>, the <strong>brand</strong>.<br />Specifically I found that the best free alternatives <i>(Google Fonts)</i> to the handcrafted fonts that <strong>Medium</strong> uses are respectively <span className="highlighted">Lora</span>,
            <span className="highlighted">Montserrat</span> and <span className="highlighted">Playfair Display</span>.<br />I discovered with delight that the last one mimics almost perfectly the effect created especially for <code>blockquote</code>.
          </p>
          <h2>Content font</h2>
          <p> The content font should be a serif one, to gently bring your eyes from one letter to the other with
            the lowest amount of effort.<br /><code>line-height</code> and <code>letter-spacing</code> are vital here. Play with those parameters to make the most out of your
            font of choice. However at <strong>Medium</strong> you'll find almost an empty line of space in the middle of two lines of text (<code>line-height: 1.58;</code>).
            While the space between the charachters is kept a little bit on the negative side (<code>letter-spacing: -0.03;</code>) to make words feel more compacts.</p>
          <h2>Brand font</h2>
          <p> The purpose of this font is to enforce the presence of our brand during the navigation experience.
            We can use it for titles and, here and there, for some minutiae.</p>
          <blockquote>Blockquotes, for example 🤫</blockquote>
          <h2>UI font</h2>
          <p> The font used for all the UI elements is preferably a sans-serif one. It should create contrast with the content font.
            Its color could be a little bit lighter than the one used for the main content.<br />It needs to be readable given the background-color of your page
            but not distracting from the main purpose of the page. <span className="highlighted">Reading!</span><br />You can use it also for <code>h2</code> making the titles for your paragraphs. Here the color should be the same as the one used for the main title.</p>
          <h2><span className="highlighted">The highlight</span></h2>
          <p>To highlight a word or phrase you can wrap them in a <code>span</code> element and <span className="highlighted">set the background to a color that reminds of your brand color identity</span>.</p>
          <h1>Every Title</h1>
          <p className="subtitle">`Needs a subtitle`</p>
          <p>Here we find <code>rgba(0, 0, 0, 0.54)</code> to give meaningful informations without grabbing the attention that the title, main charachter, deserves.</p>
          <h2>The color</h2>
          <p> The text color should be <code>rgba(0, 0, 0, 0.84)</code> on a <code>rgba(255, 255, 255, 1)</code> background to ensure the best contrast possible.</p>
        </main>
      </div>
            </React.Fragment>
         );
    }
}
 
export default AboutUs;