import React from "react";
import classNames from "classnames";
import { Props } from "./types";
import styles from "./SocialIcon.module.scss";
import { types } from "util";

export default class SocialIcon extends React.PureComponent<Props> {
  render() {
    const { iconType, type, url } = this.props;
    const cssClasses = classNames(styles.socialIcon, styles[iconType], type === "odd" && styles.odd);

    return <a className={cssClasses} href={url} target="_blank" />;
  }
}
