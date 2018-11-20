const ff = require('./fuzzification')

let a = 0
let b = 0

module.exports = {
  SR: function(x) {
    if (x > 0 && x <= 0.25) {
      return 1
    } else if (x > 0.25 && x < 0.5) {
      return ff.turun(0.25, 0.5, x)
    } else {
      return 0
    }
  },

  R: function(x) {
    if (x == 0.5) {
      return 1
    } else if (x > 0.25 && x < 0.5) {
      return ff.naik(0.25, 0.5, x)
    } else if (x > 0.5 && x <= 1.0) {
      return ff.turun(0.5, 1.0, x)
    } else {
      return 0
    }
  },

  M: function(x) {
    if (x == 1.0) {
      return 1
    } else if (x > 0.5 && x < 1.0) {
      return ff.naik(0.5, 1.0, x)
    } else if (x > 1.0 && x < 1.25) {
      return ff.turun(1.0, 1.25, x)
    } else {
      return 0
    }
  },

  T: function(x) {
    if (x == 1.25) {
      return 1
    } else if (x > 1.0 && x < 1.25) {
      return ff.naik(1.0, 1.25, x)
    } else if (x > 1.25 && x < 1.75) {
      return ff.turun(1.25, 1.75, x)
    } else {
      return 0
    }
  },

  ST: function(x) {
    if (x >= 1.75) {
      return 1
    } else if (x > 1.25 && x < 1.75) {
      return ff.naik(1.25, 1.75, x)
    } else {
      return 0
    }
  }
}
