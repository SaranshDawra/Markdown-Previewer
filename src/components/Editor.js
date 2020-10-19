import React from 'react';
import style from './editor.module.css';

export default function Editor(props) {
    return (
            <textarea className={style.Editor} value={props.value} onChange={(e) => props.changed(e.target.value)}>
            </textarea>
    )
}
