import { getDatabase, ref, set, onValue, update, remove, off, push, 
    onChildRemoved, onChildChanged, onChildAdded, child, get } from "firebase/database"; 
import regeneratorRuntime from "regenerator-runtime";    

import {
    app,
    db
} from '../firebase/firebase';

//this is how yoy should store list based data. The keys are the unqiue ids and its value is the item you would put in an array
/* const notes = {
    notes: {
        note1: {
            title: 'first note',
            body: 'This is my note'
        },
        note2: {
            title: 'Another note',
            body: 'This is my note'
        }
    }
}; */

/* set(ref(db, 'notes'), notes)
    .then(() => {
        console.log('Data notes is saved!');
    })
    .catch((e) => {
        console.log('This failed!!:', e);
    }); */

//write into dataset:
// use set() 
const writeUserData = (userId, name, email, age, isSingle, city, country) => {
    //const db = getDatabase();
    set(ref(db, 'users/' + userId), {
        username: name,
        email,
        age,
        isSingle,
        location: {
            city,
            country
        }
    }).then(() => {
        console.log('Data is saved!');
    }).catch((e) => {
        console.log('This failed!!:', e);
    });
};

const doWrite = async () => {

    writeUserData('23542354234', 'Ilan', 'ilanlieberman@hotmail.com', 28, true, 'Hong Kong', 'Hong Hong SAR'); // this is how you write data to firebase
    writeUserData('23542354235', 'bob', 'bobjs@hotmail.com', 27, false, 'New York', 'USA');
    writeUserData('10101', 'snorkybob', 'snorky@email.com', 27, false, 'ABQ', 'USA');

}

console.log('start with dowritesss')

doWrite()

const updates = {
    isSingle: false,
    age: null,
    job: 'Software Developer',
    'location/city': 'Chicago', // to update a nested attributes in this ex city need '' for attrubute location city attribute is in location attribute of the dataset
    attritubes: {
        height: 73,
        age: 101
    }
};

const addAttributes = (userId) => {
    const reference = ref(db, 'users/' + userId);
    update(reference, updates).then((update) => {
        console.log('Update successful!: ', update)
    }).catch((e) => {
        console.log('Update unsuccessful!: ', e)
    }); // takes in the ref first then the object that needs updating 
}

addAttributes(10101)

//add new user

writeUserData('10109', 'bob9', 'snorky@email.com', 97, false, 'ABQ', 'USA');

let refer = ref(db, 'users/' + '10109');
let update2 = {
    attritubes: {
        height: 73,
        age: 102
    }
}


const doUpdate = async (refer, update2) => {
    update(refer, update2).then((update) => {
        console.log('Update successful!: ', update)
    }).catch((e) => {
        console.log('Update unsuccessful!: ', e)
    }); // takes in the ref first then the object that needs updating 
};

doUpdate(refer, update2);

const fetchData = (id) => {
    const userId = id;
    const reference = ref(db, 'users/' + userId);
    onValue(reference, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
    });
}

fetchData(10109)

setTimeout(() => {
    onValue(ref(db, 'users'), (snapshot) => {
        const data = snapshot.val();
        console.log('users data', data);
    });
}, 500) 

console.log('onvalue next')
onValue(ref(db, 'users'), (snapshot) => {
    const idPlus = snapshot.val()
    console.log('users data id+', idPlus);
})


const notes = {
        title: 'left out fancy title2',
        note: 'just a note again but better'
}

push(ref(db, 'notes'), notes) 

push(ref(db, 'notes') ,{
    title: 'To Do',
    body: 'Go on a run'
}).then(() => {
    console.log('Data notes is saved!');
}).catch((e) => {
    console.log('This failed!!:', e);
});

/* set(ref(db, 'notes'), notes)
.then(() => {
    console.log('Data notes is saved!');
})
.catch((e) => {
    console.log('This failed!!:', e);
}); */

const expenses = [{
    description: 'Item One',
    note: 'This is the first item',
    amount: 4500,
    createdAt: 0
}, {
    description: 'Item Two',
    note: 'This is the second item',
    amount: 8000,
    createdAt: 0
}, {
    description: 'Item Three',
    note: 'This is the third item',
    amount: 10500,
    createdAt: 0
}]
 
/* expenses.forEach((expense) => {
    push(ref(db, 'expenses'),expense).then((data) => {
        console.log('Post successful, key is:', data.key) //
    }).catch((e) => {
        console.log('Something went wrong', e)
    })
}) */

onValue(ref(db, 'expenses'), (snapshot) => {
    const expenses = [];
  snapshot.forEach((childSnapshot)=>{
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    });
  });
  console.log(expenses);
});
