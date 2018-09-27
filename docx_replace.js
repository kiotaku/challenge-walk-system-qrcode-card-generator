var createReport = require('docx-templates')
const fs = require('fs')

var str = fs.readFileSync('user_data.csv').toString()
var tmp_data = str.split('\n').map((x) => {
  let tmp = x.split(',')
  return [`images/${tmp[0]}.png`, tmp[0], tmp[2]]
})

output_data = []
for (var i = 0; i < Math.ceil(tmp_data.length / 10); i++) {
  output_data.push(tmp_data.slice(i * 10, i * 10 + 10))
}
output_data.forEach((data, i) => {
  console.log(i);
  createReport({
    template: 'template.docx',
    output: `dist/card_data${i}.docx`,
    data: {
      'name1': data[0] ? data[0][2] : '',
      'ID1': data[0] ? data[0][1] : '',
      'name2': data[1] ? data[1][2] : '',
      'ID2': data[1] ? data[1][1] : '',
      'name3': data[2] ? data[2][2] : '',
      'ID3': data[2] ? data[2][1] : '',
      'name4': data[3] ? data[3][2] : '',
      'ID4': data[3] ? data[3][1] : '',
      'name5': data[4] ? data[4][2] : '',
      'ID5': data[4] ? data[4][1] : '',
      'name6': data[5] ? data[5][2] : '',
      'ID6': data[5] ? data[5][1] : '',
      'name7': data[6] ? data[6][2] : '',
      'ID7': data[6] ? data[6][1] : '',
      'name8': data[7] ? data[7][2] : '',
      'ID8': data[7] ? data[7][1] : '',
      'name9': data[8] ? data[8][2] : '',
      'ID9': data[8] ? data[8][1] : '',
      'name0': data[9] ? data[9][2] : '',
      'ID0': data[9] ? data[9][1] : '',
    },
    replaceImages: {
      'image1.png': data[0] ? data[0][0] : 'g.png',
      'image2.png': data[5] ? data[5][0] : 'g.png',
      'image3.png': data[1] ? data[1][0] : 'g.png',
      'image4.png': data[6] ? data[6][0] : 'g.png',
      'image5.png': data[2] ? data[2][0] : 'g.png',
      'image6.png': data[7] ? data[7][0] : 'g.png',
      'image7.png': data[3] ? data[3][0] : 'g.png',
      'image8.png': data[8] ? data[8][0] : 'g.png',
      'image9.png': data[4] ? data[4][0] : 'g.png',
      'image10.png': data[9] ? data[9][0] : 'g.png',
    }
  })
})
// createReport({
//   template: 'template.docx',
//   output: 'dist/test.docx',
//   data: {
//     test_data: 'wwwwwwwwwwwwwwwwww'
//   },
//   replaceImages: {
//     'image1.png': 'g.png'
//   }
// })
