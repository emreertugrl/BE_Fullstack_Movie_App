// filesystem module import edilir.
const fs = require("fs");

const getRequest = (req, res) => {
  // url temel adresini değişkene aktar
  const path = req.url.slice(0, 11);
  // url'in sonundaki id değerini değişkene aktar
  const id = req.url.split("/")[3];

  // url somundaki parametrenin değerini al
  const param = req.url.split("=").pop().toLowerCase().trim();

  // 2-path kısmından sonra id varsa eşleşirse çalıştır
  if (path === "/api/movies" && id) {
    //1- json dosyasından filmleri al
    const data = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));
    //2- urldeki idye karşılık gelen elemanı dizide ara
    const movie = data.find((i) => i.id === id);
    //3- eğerki film bulunursa client'a gönder
    if (movie) {
      return res.end(JSON.stringify(movie));
    }

    //4- eğerki film bulunamazsa hata gönder
    // res.statusCode = 404;
    res.writeHead(404);
    // res.writeHead(404, { denemeHeader: "4" });

    return res.end(
      JSON.stringify({
        message: "Aranılan film bulunamadı",
      })
    );
  }
  // url durumuna göre yönlendirme
  // 1-path kısmı ile gelen istek urlsi eşitse çalışır
  if (path === "/api/movies") {
    // 1-)durum kodu belirle bu 200 olduğıu için yazmamıza gerek yok ama diğer durumlarda belirtilmelidir.

    // 2-)json dosyasından filmleri al
    const movies = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));
    if (param && param !== "/api/movies") {
      // eğer parametre varsa filtrelenmiş cevabı gönder
      const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(param)
      );
      return res.end(JSON.stringify(filteredMovies));
    }
    // eğer parametre yoksa bütün filmleri gönder

    // 3-)clienta cevap gönder
    return res.end(JSON.stringify(movies));
  }

  // 3-path kısmı ile gelen istek eşleşmezse ekrana yazar.yol yanlışsa hata gönder
  res.writeHead(404);
  res.end(
    JSON.stringify({
      message: "Yol Bulunamadı",
    })
  );
};

module.exports = getRequest;
