import React, {Component} from 'react';

class Header extends Component{
    render(){
        return(
            
            <nav className="navbar navbar-inverse">
                <a className="navbar-brand" href="index.html">Title</a>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="index.html">Link</a>
                    </li>
                </ul>
            </nav>
                 
            

        );
    }
}

export default Header;