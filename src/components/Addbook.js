
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {ADDBOOK} from './Redux/Book/bookactions'
import {useHistory} from 'react-router-dom'


function Addbook(props) {

    const [id,setId] = useState();
    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const createContact = (e) =>{
        e.preventDefault();
        
        let book = {
            id:id,
            title:title,
            author:author,
        }
        dispatch(ADDBOOK(book));
        history.push("/");
    }
    return (
            <div className="wrapper">
                <div className="formwrapper">
                    <h3>Add books</h3>
                    <form onSubmit={(e)=>createContact(e)}>
                    <div>
                        <label> ID</label>
                        <div className="field">
                        <input type="number" value={id} onChange={(e)=>setId(e.target.value)}/>
                        </div>
                    </div>   
                    <div>
                        <label> Title </label>
                        <div>   
                        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                        </div>
                    </div>    
                    <div>
                        <label> Author </label>   
                        <div>
                        <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
                        </div>
                    </div>    
                    <div className="submit">
                    <button type="submit">Add book</button>
                    </div>
                </form>   
            </div>
         </div>
    );
}

export default Addbook;