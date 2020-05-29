const { readFileSync } = require("fs");

const rawData = readFileSync("./starsList_v3.json");
const students = JSON.parse(rawData);

/*
console.log(`
CREATE TABLE Pornstars(
  id            INTEGER       PRIMARY KEY AUTO_INCREMENT,
  name          TEXT,
  thumbnail     LONGTEXT,
  url           LONGTEXT,
  gender        TEXT,
  videoCount    INTEGER,
  createdAt     DATE,
  updatedAt     DATE
);
`);*/
console.log("USE randompornstar; \n");

students.stars.forEach(pornStar => {
  pornStar.star.star_name = pornStar.star.star_name.replace(/"/g, '\\"');
  pornStar.star.star_name = pornStar.star.star_name.replace(/'/g, "\\'");
  console.log(`INSERT INTO Pornstars(star_name, star_thumb, star_url, gender, videos_count_all, createdAt, updatedAt) VALUES ("${pornStar.star.star_name}", "${pornStar.star.star_thumb}", "${pornStar.star.star_url}", "${pornStar.star.gender}", ${pornStar.star.videos_count_all}, CURDATE(), CURDATE()); \n`);
});
