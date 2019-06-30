import React from "react";
import { SocialIcon } from "../../components";

import styles from "./Footer.module.scss";

export default class Footer extends React.PureComponent<any, any> {
  render() {
    const { children } = this.props;

    return (
      <footer className={styles.footer}>
        <SocialIcon iconType="twitter" url="https://twitter.com/vopentech" />
        <SocialIcon iconType="linkedin" url="https://linkedin.com/vopentech" />
        <SocialIcon iconType="facebook" url="https://facebook.com/vopentech" />
        <SocialIcon iconType="instagram" url="https://instagram.com/vopentech" />
        <SocialIcon iconType="youtube" url="https://youtube.com/vopentech" />
        <div className={styles.separator} />
        {children}
      </footer>
    );
  }
}
