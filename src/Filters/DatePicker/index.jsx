import React from "react";
import DayPicker from "react-day-picker";
import { compareAsc, isDate } from "date-fns";

import localeUtils from "./localization";
import "./style.css";

export const DATE_PICKER_TYPE = {
  startDate: 0,
  endDate: 1
};

export const DATE_PICKER_LOCALE = {
  ru: "ru",
  en: "en"
};

class DatePicker extends React.Component {
  state = {
    selectedDay: null
  };

  handleDayMouseEnter = day => {
    this.setState({ selectedDay: day });
  };

  handleDayMouseLeave = day => {
    this.setState({ selectedDay: null });
  };

  handleDayClick = day => {
    this.props.setDay(day);
  };

  getStartDays() {
    const { from, to, type } = this.props;
    const selectedDay = this.state.selectedDay;

    if (type === DATE_PICKER_TYPE.startDate) {
      if (!to) return [from, selectedDay];
      if (!selectedDay) return [from];
      return [selectedDay];
    }

    return [from];
  }

  getEndDays() {
    const { from, to, type } = this.props;
    const selectedDay = this.state.selectedDay;

    if (type === DATE_PICKER_TYPE.endDate) {
      if (!from) return [to, selectedDay];
      if (!selectedDay) return [to];
      if (compareAsc(selectedDay, from) !== 0) return [selectedDay];
      return [];
    }

    if (compareAsc(selectedDay, to) == 0) return [];
    return [to];
  }

  getSelectedDays(start, end) {
    if (start.length > 1 && end.length > 1) return [];

    const startDate = start[0];
    const endDate = end[0];
    if (
      isDate(startDate) &&
      isDate(endDate) &&
      compareAsc(startDate, endDate) === -1
    )
      return [{ from: startDate, to: endDate }];
  }

  getDisabledDays() {
    const { from, to, type } = this.props;

    if (type === DATE_PICKER_TYPE.endDate) {
      return [{ before: from }];
    }

    return [];
  }

  getModifiersDays() {
    const start = this.getStartDays();
    const end = this.getEndDays();
    const selected = this.getSelectedDays(start, end);
    const disabled = this.getDisabledDays();

    return {
      start: start,
      end: end,
      selected: selected,
      disabled: disabled
    };
  }

  render() {
    return (
      <div>
        <DayPicker
          locale={this.props.locale}
          localeUtils={localeUtils}
          modifiers={this.getModifiersDays()}
          onDayMouseEnter={this.handleDayMouseEnter}
          onDayMouseLeave={this.handleDayMouseLeave}
          onDayClick={this.handleDayClick}
        />
      </div>
    );
  }
}

export default DatePicker;
