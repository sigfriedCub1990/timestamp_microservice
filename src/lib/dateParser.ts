const UNIX_EPOCH_REGEX = /^\d{13}$/;
const DATE_FORMAT_REGEX = /\d{2}-\d{2}-\d{4}/;

class DateParser {
  static validate(maybeDate: string) {
    let date;
    if (UNIX_EPOCH_REGEX.test(maybeDate)) {
      date = new Date(Number.parseInt(maybeDate));
    } else if (DATE_FORMAT_REGEX.test(maybeDate)) {
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
