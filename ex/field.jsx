import React, { Component } from 'react'
import { connect } from 'react-redux'


class Field extends Component {

	render() {
		return (
			<div>
				<label> {this.props.value}</label><br/>
				<input onChange={this.handleChange} value={this.props.value} />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		//state é o parâmetro, field e value está presente no index.jsx 
		value: state.field.value
	}
}

export default connect(mapStateToProps)(Field)