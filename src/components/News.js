import React from "react";
import NewsList from "./NewList";
import './News.css';
import { BrowserRouter, Routes , Route, NavLink } from "react-router-dom";
import { NewsItem } from "./NewItem";

const News = () =>  {
    
    return(
        <BrowserRouter>
            <div className="container">
                <div className="header">
                    <div className="news">
                        <h1>NEWS</h1>
                        <div className="containerTwo nav-link-all">
                            <NavLink className="navLink" to="/"><b>News</b></NavLink>
                        </div>
                    </div>
                </div>   
                <Routes>
                    <Route exact path="/" element={<NewsList />}/>
                    <Route exact path="/news/:title" element={<NewsItem />}/>
                </Routes> 
                <footer className="container footer">
                    <h3>Copyright</h3>
                </footer>        
            </div>
        </BrowserRouter>
        
    )
    
}

export default News;