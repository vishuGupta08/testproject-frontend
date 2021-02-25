import React, { Component } from 'react'
import Children from '../../component/Children/Children'
import axios from 'axios'
class children extends Component {

    state = {
        children: [],
        loading: true
    }

    componentDidMount() {
        let fetchedChildren = []
        axios.get('http://localhost:8080/children')
            .then(response => {
                response.data.forEach((el) => {
                    fetchedChildren.push(el)

                })
                this.setState({ loading: false, children: fetchedChildren })
            })
            .catch(error => {
                this.setState({ loading: false })
            })
    }


    render() {
        return (
            <div>
                {         this.state.children.map(child =>
                    <Children details={child} />
                )}

            </div>
        )
    }
}

export default children