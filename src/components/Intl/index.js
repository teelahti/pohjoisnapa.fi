import React from "react";
import PropTypes from "prop-types";
import { LocaleContext } from "../Layout";
import locales from "../../locales/config.js";

export const FormattedDate = ({ value }) => (
  <LocaleContext.Consumer>
    {language => (
      <time>
        {locales
          .find(l => l.code === language)
          .formats.date.format(new Date(value))}
      </time>
    )}
  </LocaleContext.Consumer>
);

FormattedDate.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]).isRequired,
};

export const FormattedTime = ({ value }) => (
  <LocaleContext.Consumer>
    {language => (
      <time>
        {locales
          .find(l => l.code === language)
          .formats.time.format(new Date(value))}
      </time>
    )}
  </LocaleContext.Consumer>
);

FormattedTime.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]).isRequired,
};

export const FormattedDateTime = ({ value }) => (
  <LocaleContext.Consumer>
    {language => (
      <time>
        {locales
          .find(l => l.code === language)
          .formats.full.format(new Date(value))}
      </time>
    )}
  </LocaleContext.Consumer>
);

FormattedDateTime.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]).isRequired,
};

export const FormattedRelative = ({ value }) => {
  if (!Intl.RelativeTimeFormat) {
    // fallback
    return <FormattedDateTime value={value} />;
  }

  // Calculate what units we want
  let target = new Date(value);
  let now = new Date();

  let msDiff = target - now;
  let ms = Math.abs(msDiff);
  let showDiff = 0;
  let unit = "";

  // Possible values are: "year", "quarter", "month", "week", "day", "hour", "minute", "second"
  if (ms / 1000 < 60) {
    unit = "second";
    showDiff = msDiff / 1000;
  } else if (ms / 1000 / 60 < 60) {
    unit = "minute";
    showDiff = msDiff / 1000 / 60;
  } else if (ms / 1000 / 60 / 60 < 24) {
    unit = "hour";
    showDiff = msDiff / 1000 / 60 / 60;
  } else if (ms / 1000 / 60 / 60 / 24 < 31) {
    unit = "day";
    showDiff = msDiff / 1000 / 60 / 60 / 24;
  } else {
    unit = "month";
    showDiff = msDiff / 1000 / 60 / 60 / 24 / 31;
  }

  return (
    <LocaleContext.Consumer>
      {language => (
        <time>
          {locales
            .find(l => l.code === language)
            .formats.relative.format(Math.floor(showDiff), unit)}
        </time>
      )}
    </LocaleContext.Consumer>
  );
};

FormattedRelative.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.number,
  ]).isRequired,
};
