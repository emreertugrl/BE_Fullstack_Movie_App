const fs = require("fs");

const getDelete = (req, res) => {
  // url temel adresini değişkene aktar
  const path = req.url.substring(0, req.url.lastIndexOf("/"));
  // url'in sonundaki id değerini değişkene aktar
  const id = req.url.split("/")[3];
  // url durumuna göre yönlendirme
  if (path === "/api/movies" && id) {
    // bütün filmleri al
    let data = fs.readFileSync("./data/movies.json", "utf-8");
    data = JSON.parse(data);
    // parametre olarak gelen id'li film dizide var mı
    const isFound = data.movies.find((i) => i.id === id);
    // yoksa id geçersiz hatası gönder
    if (!isFound) {
      res.writeHead(404);
      return res.end("Gönderilen id'li eleman bulunamadı.");
    }
    // diziden id'si bilinen filmi kaldır
    const filtred = data.movies.filter((i) => i.id !== id);

    // json dosyasına yeni diziyi aktar
    fs.writeFileSync("./data/movies.json", JSON.stringify({ movies: filtred }));

    // client'a cevap gönder
    res.writeHead(204);
    return res.end();
  }
};

module.exports = getDelete;
