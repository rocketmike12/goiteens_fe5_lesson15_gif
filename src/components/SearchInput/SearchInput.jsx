import { Component } from "react";

import styles from "./SearchInput.module.scss";

export class SearchInput extends Component {
	render() {
		return (
			<>
				<input type="text" value={this.props.search} onChange={this.props.onSearch} className={styles["search-input"]} />
			</>
		);
	}
}
