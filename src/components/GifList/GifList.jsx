import { Component } from "react";

import { GifListItem } from "./GifListItem";

import styles from "./GifList.module.scss";

export class GifList extends Component {
	render() {
		console.log(this.props.gifs);
		return (
			<>
				<ul className={styles["gif-list"]}>
					{this.props.gifs.map((gif) => (
						<GifListItem url={gif.itemurl} src={gif.media_formats.gif.url} key={gif.id} />
					))}
				</ul>
			</>
		);
	}
}
