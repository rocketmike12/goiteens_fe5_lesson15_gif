import { Component } from "react";

import styles from "./GifList.module.scss";

export class GifListItem extends Component {
	render() {
		return (
			<>
				<li className={styles["gif-list__item"]}>
					<a href={this.props.url} target="_blank">
						<img src={this.props.src} alt="" className={styles["gif-list__image"]} />
					</a>
				</li>
			</>
		);
	}
}
