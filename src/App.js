import React, {useState, useEffect} from 'react';
import TerminatorList from './components/terminator-list/terminator-list.component';
import SearchBox from './components/searchbox/seachbox.component';

import './App.css' ; 

function App(){

    const [models, setModels] = useState([]);
    const [searchfield, setSearchfield] = useState("");
    const [szamlalo, setSzamlalo] = useState(0);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    };

   

    useEffect(
        () =>{   
        console.log(szamlalo);
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => setModels(users))},
        [szamlalo]
    );
   
    
    const filteredModels = models.filter((model) => {
        return model.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    if(models.length === 0){
        return(
            <div>
                <h1>betöltés folyamatban...</h1>
            </div>
        );
    }

    return(
        <div className='tc'>
            <h1 className="f1">Terminator modellek</h1>
            <button onClick={() => setSzamlalo(szamlalo+1)}>Kattints ide</button>
            <SearchBox searchChange={onSearchChange}/>
            <TerminatorList models={filteredModels} />
        </div>
    );
}


export default App;