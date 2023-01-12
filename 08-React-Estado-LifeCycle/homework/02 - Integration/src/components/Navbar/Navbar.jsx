import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Navbar.module.css"

export default function Navbar(props){
    return(
        <div className={style.container}>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}