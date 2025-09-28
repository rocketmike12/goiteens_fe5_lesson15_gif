import { Component } from "react";

import axios from "axios";

import { debounce } from "lodash";

import { GifList } from "./components/GifList/GifList";
import { SearchInput } from "./components/SearchInput/SearchInput";

import styles from "./App.module.scss";

const API_KEY = "AIzaSyB6cv2Pu-i4rnCivzv1NpdPnecZBxixyTU";
axios.defaults.baseURL = "https://tenor.googleapis.com/v2/";

class App extends Component {
	constructor() {
		super();
		this.state = { gifs: [], search: "" };
	}

	getGifs = debounce(async () => {
		if (this.state.search === "") {
			this.setState({ gifs: [] });
			return;
		}

		let res = await axios.get(`/search?q=${this.state.search}&key=${API_KEY}&limit=16`);
		this.setState({ gifs: res.data.results });
	}, 500);

	onSearch = (e) => {
		this.setState({ search: e.currentTarget.value });

		this.getGifs();
	};

	render() {
		return (
			<>
				<div className={styles["container"]}>
					<SearchInput search={this.state.search} onSearch={this.onSearch} />
					<GifList gifs={this.state.gifs} />
				</div>
			</>
		);
	}
}

export default App;
