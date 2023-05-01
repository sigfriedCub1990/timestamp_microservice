import DateParser from "../../src/lib/dateParser";

describe("DateValidator tests", () => {
  describe("when dates are valid", () => {
    describe("given a valid date", () => {
      it("should return true", () => {
        const date = "04-27-2023";
        const actual = DateParser.validate(date);

        expect(actual).toBeTruthy();
      });
    });

    describe("given a valid unix timestamp", () => {
      it("should return true", () => {
        const unix = "1682575200000";
        const actual = DateParser.validate(unix);

        expect(actual).toBeTruthy();
      });
    });
  });

  describe("when dates are invalid", () => {
    describe("given an invalid date", () => {
      it("should return false", () => {
        const date = "gibberish";
        const actual = DateParser.validate(date);

        expect(actual).toBeFalsy();
      });
    });

    describe("given an invalid unix timestamp", () => {
      it("should return false", () => {
        const date = "1234";
        const actual = DateParser.validate(date);

        expect(actual).toBeFalsy();
      });

      it("should return false", () => {
        const date = "-1234567890123";
        const actual = DateParser.validate(date);

        expect(actual).toBeFalsy();
      });
    });
  });
});
