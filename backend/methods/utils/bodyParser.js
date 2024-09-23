// isteğin body kısmındaki veriye erişebilmek için parça parça gelen bütün byteları birleştirip
// fonksiyonun çağrıldığı yere return edeceğiz.
const bodyParser = (req) => {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      // frontend'den bodynin her parçası geldiğinde onu al ve yukarıdaki stringe ekle
      req.on("data", (chunk) => {
        body += chunk;
      });
      // yüklenme bittiğinde json verisini js verisine çevir
      req.on("end", () => {
        // fonksiyonun çağrıldığı yere ody içeriğini return et
        resolve(JSON.parse(body));
      });
    } catch (err) {
      // hata oluşursa htyı döndür
      reject(err);
    }
  });
};

module.exports = bodyParser;
