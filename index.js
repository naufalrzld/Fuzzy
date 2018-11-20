'use strict';

const json2csv = require('json2csv').parse;
const fields = ['No', 'Pendapatan', 'Hutang', 'wa'];
const fs = require('fs')
const p = require('./pendapatan')
const h = require('./hutang')

let rawdata = fs.readFileSync('data.json');
let data = JSON.parse(rawdata).data;

var a = []
var hasil = []

data.forEach(function(d) {
  var P1 = Math.min(p.SR(d.Pendapatan), h.SK(d.Hutang))
  var P2 = Math.min(p.SR(d.Pendapatan), h.K(d.Hutang))
  var P3 = Math.min(p.R(d.Pendapatan), h.K(d.Hutang))
  var P4 = Math.min(p.R(d.Pendapatan), h.M(d.Hutang))
  var P5 = Math.min(p.M(d.Pendapatan), h.M(d.Hutang))
  var P6 = Math.min(p.M(d.Pendapatan), h.B(d.Hutang))
  var P7 = Math.min(p.T(d.Pendapatan), h.B(d.Hutang))
  var P8 = Math.min(p.T(d.Pendapatan), h.SB(d.Hutang))
  var P9 = Math.min(p.ST(d.Pendapatan), h.SB(d.Hutang))

  var L1 = Math.min(p.SR(d.Pendapatan), h.M(d.Hutang))
  var L2 = Math.min(p.SR(d.Pendapatan), h.B(d.Hutang))
  var L3 = Math.min(p.SR(d.Pendapatan), h.SB(d.Hutang))
  var L4 = Math.min(p.R(d.Pendapatan), h.B(d.Hutang))
  var L5 = Math.min(p.R(d.Pendapatan), h.SB(d.Hutang))
  var L6 = Math.min(p.M(d.Pendapatan), h.SB(d.Hutang))

  var TL1 = Math.min(p.R(d.Pendapatan), h.SK(d.Hutang))
  var TL2 = Math.min(p.M(d.Pendapatan), h.SK(d.Hutang))
  var TL3 = Math.min(p.M(d.Pendapatan), h.K(d.Hutang))
  var TL4 = Math.min(p.T(d.Pendapatan), h.SK(d.Hutang))
  var TL5 = Math.min(p.T(d.Pendapatan), h.K(d.Hutang))
  var TL6 = Math.min(p.T(d.Pendapatan), h.M(d.Hutang))
  var TL7 = Math.min(p.ST(d.Pendapatan), h.SK(d.Hutang))
  var TL8 = Math.min(p.ST(d.Pendapatan), h.K(d.Hutang))
  var TL9 = Math.min(p.ST(d.Pendapatan), h.M(d.Hutang))
  var TL10 = Math.min(p.ST(d.Pendapatan), h.B(d.Hutang))

  var P_MAX = Math.max(P1, P2, P3, P4, P5, P6, P7, P8, P9)
  var L_MAX = Math.max(L1, L2, L3, L4, L5, L6)
  var TL_MAX = Math.max(TL1, TL2, TL3, TL4, TL5, TL6, TL7, TL8, TL9, TL10)

  var sugeno = (((TL_MAX * 25) + (P_MAX * 50) + (L_MAX * 85))/(TL_MAX + P_MAX + L_MAX))

  var wa = {
    'No': d.No,
    'Pendapatan': d.Pendapatan,
    'Hutang': d.Hutang,
    'wa': sugeno
  }

  a.push(wa)
})

a.sort(function(b, c) {
  return parseFloat(c.wa) - parseFloat(b.wa)
})

var i;
for (i = 0; i < 20; i++) {
    hasil.push(a[i])
}

var csv = json2csv(hasil, { fields: fields });

fs.writeFile('file.csv', csv, function(err) {
if (err) throw err;
console.log('Success');
});
