import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

let Entries = emojipedia.map(emoji => {
  return <Entry 
          key={emoji.id}
          emojiId={emoji.id}
          name={emoji.name}
          meaning={emoji.meaning}
          emoji={emoji.emoji}
          />
});



function App() {
  return (
    <React.Fragment>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {Entries}
      </dl>
    </React.Fragment>
  );
}

export default App;
