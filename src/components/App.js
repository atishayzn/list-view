import React,{useState,useEffect} from 'react'
import axios from '../axios'
import Header from './Header';
import ListItem from './ListItem';

function App() {
    const [data,setdata]=useState([]);
    useEffect(() => {
        async function fetchData(){
            const request =await axios.get('/testdata');
            setdata(request.data);
            return request;
        }
        fetchData();
    }, []);

    const renderList=data.map((item)=>{
        return <ListItem key ={item.id} createdAt={item.createdAt} name={item.name} avatar={item.avatar}/>
    });

    return (
        <div className='App'>
        <div className='ui container'>
            <Header/>
            <div className='ui relaxed divided list'>
                {renderList}
            </div>
        </div>
        </div>
    )
}

export default App
