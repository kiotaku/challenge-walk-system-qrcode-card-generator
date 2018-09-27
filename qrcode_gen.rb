require 'rqrcode'
require 'csv'

csv_datas = CSV.read('user_data.csv', encoding: "UTF-8", row_sep: :auto)

csv_datas.each.with_index do |data, i|
  qr = RQRCode::QRCode.new(data[0], size: 4, level: :h, mode: :number)
  qr.as_png.resize(2000, 2000).save("images/#{data[0]}.png")
end
