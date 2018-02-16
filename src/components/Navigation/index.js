import React, { Component } from "react";
import { translate } from "react-i18next";

class Navigation extends Component {
  render() {
    const { t } = this.props;

    return (
      <nav>
        <strong>Nav:</strong><span>{t("firsttest")}</span>
      </nav>
    );
  }
}

export default translate("Navigation")(Navigation);
