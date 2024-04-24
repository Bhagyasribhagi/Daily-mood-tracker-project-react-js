import React from "react";

const MoodContext = React.createContext({
  calenderList: [],
  onChangeCalenderList: () => {},
  emojisListNew: [],
  daysList: [],
  onEmojiClick: () => {},
  onEmojiNameChange: () => {},
  nameDayCount: "",
  activeEmoji: "",
  activeEmojiName: "",
  activeDay: "",
  month: "",
  homeActive: "",
  reportActive: "",
  onHomeClick: () => {},
  onReportClick: () => {},
  reportCalenderMonth: "",
  
  onReportCalenderChange: () => {},
 
  calenderReportList: [],
  onDayChange: () => {},
  getNameDayCount: () => {},
  onChangeMonth: () => {},
  onLeftArrowClick: () => {},
  onRightArrowClick: () => {},
});

export default MoodContext;
