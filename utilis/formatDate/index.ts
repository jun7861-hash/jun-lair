/**
 * Formats a date string.
 *
 * @param {string} inputDate - The input date string in ISO format.
 * @returns {string} The formatted date string in the format 'DD MONTH YYYY'.
 */
export const formatDate = (inputDate: string) => {
  const makeDate = new Date(inputDate);
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  };
  const formattedDate = new Date(makeDate).toLocaleDateString('en-US', options);

  const [day, month, year] = formattedDate.split(' ');
  const uppercaseMonth = month.toUpperCase();

  return `${day} ${uppercaseMonth} ${year}`;
};
