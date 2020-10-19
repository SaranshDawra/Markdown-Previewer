import React from "react";
import style from "./preview.module.css";
import marked from "marked";

export default function Preview(props) {
    return (
        <div
            className={style.Previewer}
            dangerouslySetInnerHTML={{ __html: marked(props.value) }}
        ></div>
    );
}
