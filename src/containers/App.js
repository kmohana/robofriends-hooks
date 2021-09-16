import React , {useState , useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import '../containers/App.css';


function App() {
   
    const [robots , setRobots] = useState([]);
    const [searchField,setSearchField] = useState('')

    
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => {setRobots(users)}); 
    },[])

    const onSearchChange = (event) =>{
        setSearchField(event.target.value)        
    }

    const filterRobot = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    console.log(robots,searchField);
    
    return (
        !robots.length ?
        <h1>Loading...</h1> :
        <div className = 'tc'>
            <h1 className = 'f1 font-link'>RoboFriends</h1>
            <SearchBox searchChange ={onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots = {filterRobot}/>
                </ErrorBoundary>
            </Scroll> 
        </div> 
        )
}

export default App;
