import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

/**          => (User Story Steps) <=
 1. Create Entry Component
 2. Create Props to repleace hardcoded data.
 3(a) Import the emojipedia const.
 4(b) Map through the emojipedia array and render Entry components.
 */

/**                => (1) <=
 * 1 => Successfully extracted our "entry component" from "App Component.
 * 2 => Three components are not changeing adding props to them.
 * 3 =>  Map through an array using the map funciton.
 */

/**                 => (2) <=
 * Creating a function called createEntry and this function
 * going to take a single entry(emojiTerm) from emojipedia
 * example: ONE OBJECT AT A TIME: id:1,id:2,id:3
 */
function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
