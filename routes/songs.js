var express = require("express");
var router = express.Router();

let data = [
  {
    id: 1,
    title: "Yang Patah Tumbuh,Yang Hilang Berganti",
    artist: "Banda Neira",
    url: "https://www.youtube.com/watch?v=fY8L4K30hDw",
    played: false,
    count: 4,
  },
  {
    id: 2,
    title: "Id Ke 2",
    artist: "Banda Neira",
    url: "https://www.youtube.com/watch?v=fY8L4K30hDw",
    played: false,
    count: 3,
  },
  {
    id: 3,
    title: "Id Ke 3",
    artist: "Banda Neira",
    url: "https://www.youtube.com/watch?v=fY8L4K30hDw",
    played: false,
    count: 0,
  },
  {
    id: 4,
    title: "Id Ke 4",
    artist: "Banda Neira",
    url: "https://www.youtube.com/watch?v=fY8L4K30hDw",
    played: false,
    count: 2,
  },
  {
    id: 5,
    title: "Id Ke 5",
    artist: "Banda Neira",
    url: "https://www.youtube.com/watch?v=fY8L4K30hDw",
    played: false,
    count: 0,
  },
];

/* data listing. */
router.get("/", function (req, res, next) {
  if (data.length === 0) {
    res.send("Data Tidak ada");
  } else {
    res.send(
      //   data.map((item) => {
      //     return `<h1>${item.title}</h1>
      //     <h1>${item.artist}</h1>
      //     <h1>${item.url}</h1>`;
      //   })
      // );
      data
    );
  }
});
// lagu most played
router.get("/mostplayed", (req, res) => {
  res.send(
    data.sort((a, b) => {
      return a.count - b.count;
    })
  );
});

router.post("/add", (req, res) => {
  let { title, artist, url } = req.body;
  let index = data.length + 1;
  data.push({
    id: index++,

    title,
    artist,
    url,
    played: false,
    count: 0,
  });

  res.send("Data telah di tambahkan");
});
router.get("/:id", (req, res) => {
  if (data.find((item) => item.id === parseInt(req.params.id))) {
    res.send(data[req.params.id - 1]);
  } else {
    res.send("Datanya ga ada");
  }
});

router.put("/:id", (req, res) => {
  if (data.find((item) => item.id === parseInt(req.params.id))) {
    let nyala = data[req.params.id - 1];
    let count = data[req.params.id - 1].count;
    let penambahan = count + 1;
    let nyalain = { ...nyala, played: true, count: penambahan };
    for (let i = 0; i < data.length; i++) {
      data[i].played = false;
    }
    data[req.params.id - 1] = nyalain;
    console.log(data);

    res.send("Lagu diputar");
  } else {
    res.send("Datanya ga ada");
  }
});

module.exports = router;
