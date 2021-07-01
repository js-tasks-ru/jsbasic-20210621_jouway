function checkSpam(str) {
  const lowercased = str.toLowerCase();
  return lowercased.includes(('1xBet').toLowerCase()) || lowercased.includes(('XXX').toLowerCase());
}
