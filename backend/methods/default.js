const defaultRequest = (req, res) => {
  // cevabın durum kodunu belirle
  res.statusCode = 404;

  // cevaba gönderilecek içeriğin tipini header olarak ekle
  // res.setHeader("Content-Type", "application/json"); server içinde bir kez tanımladık.

  // cevabın içeriğini belirle
  res.write(JSON.stringify({ message: "İstek adresi tanımsız." }));

  //   cevabı client göndeririz.
  res.end();
};

module.exports = defaultRequest;
