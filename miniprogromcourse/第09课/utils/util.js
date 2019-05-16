const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + "  " + [hour, minute].map(formatNumber).join(':') ;
}

const formatSimpleTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [year, month, day].map(formatNumber).join('/')
}


const getTimeYear = date => {
  const year = date.getFullYear()
  return year;
}

const getMonth = date => {
  const month = date.getMonth() + 1
  return month;
}


const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


const formatTimeWeek = date => {
  var l = ["日", "一", "二", "三", "四", "五", "六"];
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const week = date.getDay()
  return [year, month, day].map(formatNumber).join('/') + "(星期" + l[week] + ")";
}


const formatTimeHour = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const week = date.getDay()
  return [hour, minute].map(formatNumber).join(':');;
}

const formatTimeYear = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const week = date.getDay()
  return [year, month, day].map(formatNumber).join('/');
}



module.exports = {
    formatTime: formatTime,
      formatTimeWeek: formatTimeWeek,
      
}

module.exports = {
  formatTime: formatTime,
  formatTimeWeek: formatTimeWeek,
  getTimeYear: getTimeYear,
  getMonth: getMonth,
  formatTimeYear: formatTimeYear,
  formatTimeHour: formatTimeHour,
  formatSimpleTime: formatSimpleTime
}


