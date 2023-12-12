class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, "")
  }

  static titleize(string) {
    const excludeWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    const newArr = [];
    const wordArray = string.split(' ');
    for (let i = 0; i < wordArray.length; i++) {
      if (!excludeWords.includes(wordArray[i])) {
        newArr.push(this.capitalize(wordArray[i]))
      } else {
        newArr.push(wordArray[i])
      }
    }
  return Formatter.capitalize(newArr.join(' '))
}
}