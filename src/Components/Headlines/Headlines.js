import React from 'react';
import "./Headlines.css";

export default class Headlines extends React.Component {
  render() {
    return (
        <div className="transBack rounded color-blue">
          <br/>
          <h1 className="text-black text-center headFont">HEADLINES</h1>
          <div className="typewriter">
            <h1><i>Coming Soon! Summer Singles</i></h1>
            <p className="text-center">Summer Singles is the best thing to happen to the world!</p>
            <br/><br/>
          </div>
          <br/>
          <div className="typewriter">
            <h1><i>Winter Doubles, The Conclusion!</i></h1>
            <p className="text-center">The passage experienced a surge in popularity during the 1960s when Letraset used it on their 
            dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen 
            all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the 
            authoritative history of lorem ipsum.</p>
            <br/><br/>
          </div>
          <br/>
          <div className="typewriter">
            <h1><i>Start Restart Tennis!</i></h1>
            <p className="text-center">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, 
            graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have
            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
            </p>
            <br/><br/>
          </div>
          <br/>            
        </div>
    );
  }
}