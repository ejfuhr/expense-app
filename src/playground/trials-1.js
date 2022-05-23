import React from 'react';

function searchMe(term){

    const word = term + ' wow'

    return word
}

const searchMeAgain = (www) => (
    {
    wow: "pop" + www
    }
);

const searchMe3 = (www) => (
    <div>
    wow: "pop3-thats3 -" + www
    </div>
);

console.log('::', searchMeAgain('dull'))
console.log('::', searchMe('dull-twice'))
console.log('::', searchMe3('pirate'))