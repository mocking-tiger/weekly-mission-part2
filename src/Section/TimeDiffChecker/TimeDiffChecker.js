function timeDiffChecker(num) {
  const seconds = 1;
  const minute = seconds * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const mon = day * 30;
  if (num < minute * 2) {
    return `1 minute ago`;
  } else if (num < minute * 59) {
    return `${Math.trunc(num / 60)} minutes ago`;
  } else if (num > minute * 60 && num < day) {
    return `${Math.trunc(num / 60 / 60)} hours ago`;
  } else if (num > day && num < day * 2) {
    return `1 day ago`;
  } else if (num < day * 30) {
    return `${Math.trunc(num / 60 / 60 / 24)} days ago`;
  } else if (num >= day * 30 && num < day * 60) {
    return `1 month ago`;
  } else if (num < mon * 12) {
    return `${Math.trunc(num / 60 / 60 / 24 / 30)} months ago`;
  } else if (num >= mon * 12 && num < mon * 24) {
    return `1 year ago`;
  } else if (num >= mon * 24) {
    return `${Math.trunc(num / 60 / 60 / 24 / 30 / 12)} years ago`;
  }
}

export default timeDiffChecker;
