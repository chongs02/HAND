import React, {Component} from 'react'

class Nav extends Component{
    render(){
        return(
            <div className="nav">
                <input className="search" type='text' placeholder="검색하시오"></input>
                {/* <button>클릭!</button> */}
            </div>

        )
    }
}

export default Nav