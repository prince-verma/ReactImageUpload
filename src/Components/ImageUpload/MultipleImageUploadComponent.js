import React, {Component} from 'react';

export default class MultipleImageUploadComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			filesObjectUrl: [],
			filesArray: [],
		};
	}

	uploadMultipleFiles = (e) => {
		const files = e.target.files;
		const filesArray = Object.values(files).map(item => item);
		const filesObjectUrl = filesArray.map(item => URL.createObjectURL(item));
		this.setState({filesArray, filesObjectUrl})
	};

	uploadFiles = (e) => {
		e.preventDefault();
		console.log(this.state.file)
	};

	render() {
		const {filesObjectUrl} = this.state;

		return (
			<form>
				<div className="form-group multi-preview">
					{(filesObjectUrl || []).map(url => (
						<img
							key={url}
							src={url}
							style={{height: 100, width: 100}}
						/>
					))}
				</div>

				<div className="form-group">
					<input type="file" className="form-control" onChange={this.uploadMultipleFiles} multiple/>
				</div>
				<button type="button" className="btn btn-danger btn-block" onClick={this.uploadFiles}>Upload</button>
			</form>
		)
	}
}
