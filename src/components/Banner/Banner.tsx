import React from "react";
import { ActionButton, VOpenLogo, ArrowBottom } from "..";
import constants from "../../constants";

import { IProps, IState } from "./types";
import styles from "./Banner.module.scss";

export default class Banner extends React.PureComponent<IProps, IState> {
  render() {
    const { title, to, children } = this.props;
    return (
      <div className={styles.banner}>
        <span className={styles.title}>
          <VOpenLogo className={styles.logo} />
          <span className={styles.year}>{title}</span>
        </span>
        <div className={styles.actions}>
          <ActionButton text="Quiero ser sponsor" url={constants.sponsorsCallUrl} />
          <ActionButton type="secondary" text="Quiero ser speaker" url={constants.speakerCallUrl} />
        </div>
        {children && <div className={styles.children}>{children}</div>}
        {to && (
          <a href="#about" className={styles.goDown}>
            <ArrowBottom className={styles.arrowDown} />
          </a>
        )}
      </div>
    );
  }
}
