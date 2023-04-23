import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import React from "react";
import {About} from "./components/About/About";
import {Contacts} from "./components/Contacts/Contacts";
import {Blog} from "./components/Blog/Blog";
import {Home} from "./components/Home/Home";

export let App = () => {
    return (
        <div className={'d-block'}>
            <Header/>
            <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/contacts" element={<Contacts />}/>
            </Routes>
        </div>
    )
}
