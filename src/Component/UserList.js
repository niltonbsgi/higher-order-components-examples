import React from 'react';

import TableRow from './TableRow'

class UserList extends React.Component{
    constructor(props){
        super(props);
    }

    tabRow(){
        if(this.props.data instanceof Array){
            return this.props.data.map((object,i)=>{
                return <TableRow obj={ object } key={i}/>
            })
        }
    }

    render(){
        return(
            <div className="conteiner">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>NAME</td>
                        </tr>
                    </thead>
                    <tbody>
                        { this.tabRow() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserList