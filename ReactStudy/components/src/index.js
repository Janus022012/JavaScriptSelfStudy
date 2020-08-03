import React from 'react';
import ReactDOM from 'react-dom';
import {CommentDetail} from "./CommentDetail";
import faker from "faker";

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="A"
                comment="Hi There!"
                date="Today at 6:00PM"
                img={faker.image.avatar()}/>
            <CommentDetail
                author="B"
                comment="Hi There!"
                date="Today at 6:00PM"
                img={faker.image.avatar()}/>
            <CommentDetail
                author="C"
                comment="Hi There!"
                date="Today at 6:00PM"
                img={faker.image.avatar()}/>
        </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'));