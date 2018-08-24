/**
 * Shortens a book's long list of authors
 * @param {Object[]} authors - Full list of authors
 * @param {number} num - How many authors to display at most
 * @returns {string}
 */
export const etAl = (authors, num = 1) =>
  authors.length > num
    ? `${authors.slice(0, num).join(', ')}, et al.`
    : authors.join(', ');
