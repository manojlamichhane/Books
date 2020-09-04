import React, {useState,useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import {GETBOOK,EDITBOOK} from './Redux/Book/bookactions'

function Editbook() {

    let history = useHistory();
    let {editId} = useParams();
    let dispatch = useDispatch();
    const editbook = useSelector((state)=>state.book);

    const [id,setId] = useState("");
    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");

    useEffect( () => {
        
        if(editbook != null){

            setId(editbook.id)
            setTitle(editbook.title);
            setAuthor(editbook.author);
        }
        dispatch(GETBOOK(editId));
        },[editbook]);

        const updateBook = (e) => {
            e.preventDefault();
            let book = {
                title:title,
                author:author,
            }
            console.log(book);
            const editedbook = Object.assign(editbook,book);
            console.log(editedbook);
            dispatch(EDITBOOK(editedbook));
            history.push("/");
        }

    return (
            <div className="wrapper">
                <div className="formwrapper">
                    <h3>Edit books</h3>
                    <form onSubmit={(e)=>updateBook(e)}>   
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
                    <button type="submit">Save</button>
                    </div>
                </form>   
            </div>
         </div>
    );
}

export default Editbook;