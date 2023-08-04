import './App.css';
import React, {useState} from 'react';

function App() {
  const initialData = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 28 },
    { name: 'Eva', age: 32 },
    { name: 'David', age: 27 },
    { name: 'Sarah', age: 29 },
    { name: 'Michael', age: 31 },
    { name: 'Emma', age: 26 },
    { name: 'Peter', age: 33 },
    { name: 'Olivia', age: 24 },
];
const [data, setData] = useState(initialData);
const [sortOrder, setSortOrder] = useState('ascending');

const handleSort = () => {
    const sortedData = [...data].sort((a, b) => {
        if (sortOrder === 'ascending') {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });

    setData(sortedData);
    setSortOrder(sortOrder === 'ascending' ? 'descending' : 'ascending');
};

  return (
    <div className='container'>
    <h3>React Js Sort Array by Alphabet </h3>
    <button onClick={handleSort}>Sort {sortOrder === 'ascending' ? 'Descending' : 'Ascending'}</button>
    <ul>
        {data.map((item, index) => (
            <li key={index}>{item.name} {item.age}</li>
        ))}
    </ul>
</div>
  );
}

export default App;
