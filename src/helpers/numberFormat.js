export default function numberFormat(value) {
    return new Intl.NumberFormat("ru", {
    maximumSignificantDigits: 2}).format(value);
  }
  