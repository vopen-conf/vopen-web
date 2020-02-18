import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { Props } from "./types";
import { LanguageSelector, VOpenLogo } from "..";

import styles from "./Header.module.scss";

export default class Header extends React.PureComponent<any, any> {
  public state: any = {
    isNavMenuOpen: false
  };

  componentWillMount() {
    window.addEventListener("scroll", this.handleWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleWindowScroll);
  }

  handleWindowScroll = () => {
    if (this.state.isNavMenuOpen && window && window.pageYOffset > 300) {
      this.setState({ isNavMenuOpen: false });
    }
  };

  handleNavMenuClick = () => {
    const { isNavMenuOpen } = this.state;
    this.setState({ isNavMenuOpen: !isNavMenuOpen });
  };

  static defaultProps: Partial<Props> = {
    className: undefined,
    type: "even"
  };

  render() {
    const { children, className, type } = this.props;
    const cssClasses = classNames(
      type === "even" && styles.evenSection,
      type === "odd" && styles.oddSection,
      className
    );
    const { isNavMenuOpen } = this.state;
    const navMenuCssIcon = classNames(styles.navMenu, isNavMenuOpen && styles.isNavMenuOpen);
    const iconCssClasses = classNames(styles.navMenuIcon, "fas fa-bars");

    return (
      <div className={cssClasses}>
        <div className={styles.header}>
        <nav className={styles.nav}>
          <div className="flex items-center">
          <NavLink className={styles.home} to="/">
            <VOpenLogo className={styles.logo} />
          </NavLink>
          <LanguageSelector />
          </div>
          <div className={styles.navOptions}>{children}</div>
          <div className={navMenuCssIcon}>
            <i className={iconCssClasses} role="presentation" tabIndex={0} onClick={this.handleNavMenuClick} />
            {isNavMenuOpen && <div className={styles.navOptions}>{children}</div>}
          </div>
        </nav>
        </div>
      </div>
    );
  }
}
