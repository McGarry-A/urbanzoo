export default () => {
  return new Promise((res, rej) => {
    res({
      mens: {
        players: [
          {
            country: "Argentina",
            firstName: "Emiliano",
            surname: "Martinez",
            squadImage:
              "https://images.webapi.gc.avfcservices.co.uk/077989d0-fe70-11eb-9fd1-8f983c0036a9.png",
            joinDate: "2020-09-16",
            position: "Goalkeeper",
            shirtNumber: "1",
            profilePageUrl: "https://google.com",
          },
          {
            country: "England",
            firstName: "Tyrone",
            surname: "Mings",
            squadImage:
              "https://images.webapi.gc.avfcservices.co.uk/fe823660-fe74-11eb-9030-cff3f8b0f409.png",
            joinDate: "2019/8/7",
            position: "Defender",
            shirtNumber: "5",
            profilePageUrl: "https://google.com",
          },
          {
            country: "Argentina",
            firstName: "Emiliano",
            surname: "Buendía",
            squadImage:
              "https://images.webapi.gc.avfcservices.co.uk/fea304d0-fe74-11eb-b150-03522eaa62c1.png",
            joinDate: "2021-06-10",
            position: "Midfielder",
            shirtNumber: "10",
            profilePageUrl: "https://google.com",
          },
          {
            country: "Burkina Faso",
            firstName: "Bertrand",
            surname: "Traoré",
            squadImage:
              "https://images.webapi.gc.avfcservices.co.uk/fe12d2c0-fe74-11eb-bee9-b358e34aa6cb.png",
            joinDate: "2020-09-16",
            position: "Midfielder",
            shirtNumber: "unknown",
            profilePageUrl: "https://google.com",
          },
          {
            country: "England",
            firstName: "Danny",
            surname: "Ings",
            squadImage:
              "https://images.webapi.gc.avfcservices.co.uk/fe56b990-fe74-11eb-bee9-b358e34aa6cb.png",
            joinDate: null,
            position: "Forward",
            shirtNumber: "20",
            profilePageUrl: "https://google.com",
          },
        ],
      },
      womens: {
        players: [
          {
            country: "China",
            firstName: "Jenn",
            surname: "Wrassell",
            joinDate: "2022-10-16",
            position: "Goalkeeper",
            shirtNumber: 7,
            pageProfileUrl: "https://google.com",
          },
          {
            country: "Vietnam",
            firstName: "Corella",
            surname: "Kinforth",
            joinDate: "2023-01-08",
            position: "Goalkeeper",
            shirtNumber: 24,
            pageProfileUrl: "https://google.com",
          },
          {
            country: "Russia",
            firstName: "Palm",
            surname: "Enstone",
            joinDate: "2022-09-11",
            position: "Midfielder",
            shirtNumber: 33,
            pageProfileUrl: "https://google.com",
          },
        ],
      },
      u18s: {
        players: [
          {
            country: "China",
            firstName: "Valli",
            surname: "Ivanaev",
            joinDate: "2022-02-21",
            position: "Defender",
            shirtNumber: 30,
            pageProfileUrl: "https://google.com",
          },
          {
            country: "Philippines",
            firstName: "Vergil",
            surname: "Lace",
            joinDate: "2022-11-17",
            position: "Midfielder",
            shirtNumber: 22,
            pageProfileUrl: "https://google.com",
          },
          {
            country: "Iran",
            firstName: "Adriaens",
            surname: "Gelderd",
            joinDate: "2022-05-18",
            position: "Forward",
            shirtNumber: 31,
            pageProfileUrl: "https://google.com",
          },
        ],
      },
    });
  });
};
