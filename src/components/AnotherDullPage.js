import React, { useEffect } from "react";


  const AnotherDullPage = (props) => {
      let choice = choice + 'a' + 1
      useEffect(() => {
          const timeoutID = setTimeout(() => {
              document.title = `you clicked `;
              //document.getElementById('para1') = 'you clicked something';
          }, 5000);
          return () => {
              clearTimeout(timeoutID);
          };
      }, );

      return [1,2,3,4].map(choice => (
          <div>
          <p id='para1'>This is from my AnotherDullPage</p>
      <p>from reactjs.org/docs/testing-recipes.htm
      l</p>
      <p>this is a useEffect from React </p>
            
            <button 
            key={choice + 1}
            data-testid={choice}
            onClick={() => this.onSelect(choice)}
            >
            choice should show as {choice}
            </button>

        </div>
      )
      );//closes map(choice)
}

export default AnotherDullPage;

/*
        <div>
      This is from my AnotherDullPage
      <p>from reactjs.org/docs/testing-recipes.htm
      l</p>
      <p>this is a useEffect from React </p>
      
    </div>
    */