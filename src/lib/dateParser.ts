const UNIX_EPOCH_REGEX = /^\d{13}$/;
const DATE_FORMAT_REGEX = /\d{2}-\d{2}-\d{4}/;
const DATE_REGEX = /\d{4}-\d{2}-\d{2}/;
const GMT_REGEX =
  /\d{2}\s(January|February|March|April|May|June|July|August|September|October|November|December|)\s\d{4},\sGMT/;

class DateParser {
  static validate(maybeDate: string) {
    let date;
    if (UNIX_EPOCH_REGEX.test(maybeDate)) {
      date = new Date(Number.parseInt(maybeDate));
    } else if (DATE_FORMAT_REGEX.test(maybeDate)) {
      date = new Date(maybeDate);
    } else if (DATE_REGEX.test(maybeDate)) {
      date = new Date(maybeDate);
    } else if (GMT_REGEX.test(maybeDate)) {
      date = new Date(maybeDate);
    } else {
      return false;
    }

    return date.toString() !== "Invalid Date";
  }

  static parse(maybeDate: string) {
    if (UNIX_EPOCH_REGEX.test(maybeDate)) {
      return new Date(Number.parseInt(maybeDate));
    } else {
      return new Date(maybeDate);
    }
  }
}

export default DateParser;
