import React from 'react';
import style from './preview.module.css';
import marked from  'marked';

export default function Preview(props) {
    return (
        <div>
            <h1 className={style.titleBar}>Previewer</h1>
            <div className={style.previewer} dangerouslySetInnerHTML={{__html: marked(props.value)}}></div>
        </div>
    )
}
