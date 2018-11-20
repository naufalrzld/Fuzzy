const ff = require('./fuzzification')

let a = 0
let b = 0

module.exports = {
  SK: function(x) {
    if (x > 0 && x <= 12.125) {
      return 1
    } else if (x > 12.125 && x < 20.50) {
      return ff.turun(12.125, 20.50, x)
    } else {
      return 0
    }
  },
  K: function(x) {
    if (x == 20.50) {
      return 1
    } else if (x > 12.125 && x <= 20.50) {
      return ff.naik(12.125, 20.50, x)
    } else if (x > 20.50 && x <= 36.125) {
      return ff.turun(20.50, 36.125, x)
    } else {
      return 0
    }
  },
  M: function(x) {
    if (x >= 36.125 && x <= 62.512) {
      return 1
    } else if (x > 20.50 && x < 36.125) {
      return ff.naik(20.50, 36.125, x)
    } else if (x > 62.512 && x < 75.50) {
      return ff.turun(62.512, b, 75.50)
    } else {
      return 0
    }
  },
  B: function(x) {
    if (x == 75.50) {
      return 1
    } else if (x > 62.512 && x < 75.50) {
      return ff.naik(62.512, 75.50, x)
    } else if (x > 75.50 && x < 85.125) {
      return ff.turun(75.50, 85.125, x)
    } else {
      return 0
    }
  },
  SB: function(x) {
    if (x >= 85.125) {
      return 1
    } else if (x > 75.50 && x < 85.125) {
      return ff.naik(75.50, 85.125, x)
    } else {
      return 0
    }
  }
}
