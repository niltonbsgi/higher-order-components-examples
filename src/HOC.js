import React from 'react'

export default function Hoc(WrappedComponent, data){
    return class extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                data: data
            };
        }
        render(){
            return(
                <div>
                    <WrappedComponent data={this.state.data} {...this.props}/>
                </div>
            )
        }
    }
}