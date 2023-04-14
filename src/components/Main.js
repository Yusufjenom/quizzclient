import React, {useRef} from "react";
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUserId } from '../redux/result_reducer'
import '../style/Main.css'


export default function Main(){
    const inputRef = useRef(null)
    const dispatch = useDispatch()

    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    }

    return ( 
        <div className="container">
            <h1 className="title text-light">Quiz Application</h1>
            <h3 className="title text-light">We All Love Goreeva</h3>
            <ol>
                <li>You are expected to attempt all  questions</li>
                <li>With any correct answer you earn 10 points</li>
                <li>You are to select the best answer from three options in each question</li>
                <li>You are at liberty to review and change your answers</li>
                <li>You have just five minutes to answer all these questions</li>
                <li>Your earned points will be displayed to you at the end of the Quiz</li>
            </ol>

            <form id="form">
                <input ref={inputRef} type="text" placeholder="username here"></input>
            </form>
            
            <div className="start">
                <Link className="btn" to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
            </div>
        </div>
     );
}
 
 