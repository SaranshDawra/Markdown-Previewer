import React from 'react';
import style from './editor.module.css';

export default function Editor(props) {
    return (
        <div>
            <h1 className={style.titleBar}>Editor</h1>
            <textarea className={style.editor} value={props.value} onChange={(e) => props.changed(e.target.value)}>
            </textarea>
        </div>
    )
}
