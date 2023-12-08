
import React from 'react';
import {Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { DayPage } from './components/DayTemplate/DayTemplate';

const App = () => {
  const dynamicParams = {
    firstPage: {
      dayNumber: 1,
      germanWord: "Das Kletzenbrot - Плодов Хляб",
      facts: "Das Kletzenbrot ist ein saftiges, dunkelbraunes, würzig-süßes"+
      "Brot, bei dem Kletzen oder Hutzeln, und gewürz mit dem Brotteig vermischt werden",
      audioUrl: "Das_Kletzenbrot.mp3",
      imageUrl: "https://www.salzburgerland.com/de/magazin/wp-content/uploads/2012/11/sm-klezenbrot-3.jpg"
    },
    secondPage: {
      dayNumber: 2,
      germanWord: "Der Kranz - Венец",
      facts: "Ich habe einen Weihnachtskranz an die Tür gehängt",
      audioUrl: "Der_Kranz.mp3",
      imageUrl: "https://seitenwaelzer.de/wp-content/uploads/sites/3/2020/11/gesteck-2-1.png",
    },
    thirdPage: {
      dayNumber: 3,
      germanWord: "Der Schneemann - Снежен човек",
      facts: "Meine Familie und ich haben einen Schneemann gebaut",
      audioUrl: "Der_Schneeman.mp3",
      imageUrl: "https://www.jugendleiter-blog.de/wp-content/uploads/2020/02/image-from-rawpixel-id-520279-jpeg-696x696.jpg",
    },
    fourthPage: {
      dayNumber: 4,
      germanWord: "Der Weihnachtsbaum - Коледна Елха",
      facts: "Der Weihnachtsbaum war sehr schön geschmückt",
      audioUrl: "Der_WeinachtsBaum.mp3",
      imageUrl: "https://kindergaudi.de/wp-content/uploads/sites/2/2020/02/Weihnachtsbaum-scaled-678x1016.jpg",
    },
    fifthPage: {
      dayNumber: 5,
      germanWord: "Der Lebkuchen - Джинджифилово тесто",
      facts: "Teig aus gemischtem Ingwer",
      audioUrl: "Der_Lebkuchen.mp3",
      imageUrl: "https://www.ahrenshoop.travel/magazin/wp-content/uploads/2020/12/lebkuchen_inhaltsbild-2-850x475.jpg",
    },
    sixthPage: {
      dayNumber: 6,
      germanWord: "Die Weihnachtsglocke - Коледно звънче",
      facts: "Wir hörten die Weihnachtsglocken",
      audioUrl: "Die_Weihachtglocke.mp3",
      imageUrl: "https://w7.pngwing.com/pngs/69/656/png-transparent-christmas-bells-red-ribbon-christmas-bell-thumbnail.png",
    },
    seventhPage: {
      dayNumber: 7,
      germanWord: "Die Bescherung - Раздаване на подаръци",
      facts: "Zu Weihnachten Bescherung er",
      audioUrl: "Die_Bescherung.mp3",
      imageUrl: "https://image.bz-berlin.de/data/uploads/2015/12/54622988_1450357650.jpg",
    },
    eighthPage: {
      dayNumber: 8,
      germanWord: "Der Wunschzettel - Списък със желания",
      facts: "Ich setze das Telefon auf meinen Wunschzettel",
      audioUrl: "Der_Wunschzettel.mp3",
      imageUrl: "https://landau-forte.org.uk/wp-content/uploads/sites/9/2021/12/141_4467-1024x768.jpg",
    },
    ninthPage: {
      dayNumber: 9,
      germanWord: "Die Schneeflocke - Снежинка",
      facts: "Schneeflocken sind gefrorene Wassertropfen",
      audioUrl: "Die_Schneeflockke.mp3",
      imageUrl: "https://de.newsonthesnow.com/news/wp-content/uploads/sites/2/2022/01/DE-Warum-sind-Schneeflocken-immer-sechseckig-hero-shutterstock-optimized.jpg",
    },
    tenthPage: {
      dayNumber: 10,
      germanWord: "Der Rentier - Северен Елен",
      facts: "Rentiere, die mit dem Weihnachtsmann am Nordpol leben",
      audioUrl: "Der_Rentier.mp3",
      imageUrl: "https://jagdverband.it/wp-content/uploads/2020/12/Rudi-Rentier.jpg",
    },
    eleventhPage: {
      dayNumber: 11,
      germanWord: "Der Weihnachtsmann - Дядо Коледа",
      facts: "Der Weihnachtsmann reist um die Welt und bringt Kindern Geschenke",
      audioUrl: "Der_Weinachtsmann.mp3",
      imageUrl: "https://www.rnd.de/resizer/vxSVMlQW-zQ5C8k86T54yAW8WCs=/1441x1441/filters:quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/madsack/XDIS72XSENBV3N75EFSLLRCLXA.jpg",
    },
    twelfthPage: {
      dayNumber: 12,
      germanWord: "Der Schlitten - Шейна",
      facts: "Im Winter fahre ich gerne Schlittschuh mit meinem Schlitten",
      audioUrl: "Der_Schlitten.mp3",
      imageUrl: "https://www.roll-rodel.com/media/image/d9/8c/b4/215655650_339017234563397_6111004181501008470_n_1300x1300.jpg",
    },
    thirteenthPage: {
      dayNumber: 13,
      germanWord: "Die Zuckerstange - Бонбонено Бастунче",
      facts: "Die Zuckerstange ist eine Süßigkeit, die typischerweise gebogen ist und eine charakteristische Färbung mit weiß-roten Streifen besitzt.",
      audioUrl: "Die-Zuckerstange.mp3",
      imageUrl: "https://m.media-amazon.com/images/I/51fsYKITZIS._AC_UF894,1000_QL80_.jpg",
    },
    fourteenthPage: {
      dayNumber: 14,
      germanWord: "Der Mistletoe - Имел",
      facts: "Die Mistel ist durch ihre Weihnachtstradition mit Weihnachten verbunden. Die Misteltradition besagt, dass ein Mann jede Frau küssen darf, die unter einem Mistelzweig oder -strauß steht, und umgekehrt. Wenn ein Kuss abgelehnt wird, trifft die Person, die „Nein“ gesagt hat, Pech.",
      audioUrl: "Der_Mistletoe.mp3",
      imageUrl: "https://i.etsystatic.com/5463174/r/il/1afe69/4332782076/il_570xN.4332782076_7y3b.jpg",
    },
    fifteenthPage: {
      dayNumber: 15,
      germanWord: "Das Lebkuchenhaus - Джинджифилова къщичка",
      facts: "Richtig berühmt wurde das Lebkuchenhaus oder auch das Knusperhäuschen vor etwa 200 Jahren. Zu dieser Zeit haben die Brüder Jacob und Wilhelm Grimm viele Märchen aufgeschrieben, auch das von „Hänsel und Gretel“.",
      audioUrl: "Das_Lebkuchenhaus.mp3",
      imageUrl: "https://image.livingathome.de/12813986/t/JB/v3/w1440/r0/-/lebkuchenhaus-jpg--8630-.jpg",
    },
    sixteenthPage: {
      dayNumber: 16,
      germanWord: "Der Schneeball - Снежна Топка",
      facts: "Im Winter bewerfen wir uns gerne gegenseitig mit Schneebällen",
      audioUrl: "Der_Schneeball.mp3",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/543e6b87e4b0166dd7dad02e/1454399735874-E1JM8S8VVQJCEA0DWT9T/snowball.jpg?format=1500w",
    },
    seventeenthPage: {
      dayNumber: 17,
      germanWord: "Das Schneien - Вали сняг",
      facts: "Heute bin ich sehr glücklich, weil es geschneit hat",
      audioUrl: "Das_Schneien.mp3",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/January_2014_Blizzard_-_Sunnyside_Queens.jpg/1200px-January_2014_Blizzard_-_Sunnyside_Queens.jpg",
    },
    eighteenthPage: {
      dayNumber: 18,
      germanWord: "Die Verzierung - Орнаменти",
      facts: "Spielzeug, das am Weihnachtsbaum hängt",
      audioUrl: "Die_Verzierung.mp3",
      imageUrl: "https://img.freepik.com/vektoren-kostenlos/schoene-kalligraphische-raender-die-verzierung-wedding-sind_23-2148334100.jpg",
    },
    nineteenthPage: {
      dayNumber: 19,
      germanWord: "Die Weihnachtsstern - Коледна Звезда",
      facts: "Der Weihnachtsstern symbolisiert Liebe, Hoffnung und Wohlwollen in der Weihnachtszeit und kann verschenkt werden, um Positivität und Weihnachtsfreude zu verbreiten.",
      audioUrl: "Die_Weihnachtsstern.mp3",
      imageUrl: "https://www.wyssgarten.ch/Resources/Images/Pflanzenportrats/Weihnachtsstern/weihnachtsstern_euhporbia_pulcherrima_hellrot.jpg",
    },
    twentiethPage: {
      dayNumber: 20,
      germanWord: "Der Engel - Ангел",
      facts: "Engel kommen aus der Bibel",
      audioUrl: "Der_Engel.mp3",
      imageUrl: "https://previews.123rf.com/images/askib/askib1711/askib171100033/91098773-der-engel-verk%C3%BCndet-den-hirten-die-geburt-christi-in-bethlehem.jpg",
    },
    twentyfirstPage: {
      dayNumber: 21,
      germanWord: "Die Handschuhe - Вълнени Ръкавици",
      facts: "Wenn mir kalt ist, ziehe ich meine Handschuhe an.",
      audioUrl: "Die_Handschuhe.mp3",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Handschoenen-gebreid0860.JPG/1200px-Handschoenen-gebreid0860.JPG",
    },
    twentysecondPage: {
      dayNumber: 22,
      germanWord: "Die Heiße Schokolade - Горещо Какао",
      facts: "Zu Weihnachten trinke ich gerne heiße Schokolade",
      audioUrl: "Die_Heisse_Schokolade.mp3",
      imageUrl: "https://assets.ichkoche.at/image/17/160869.jpg?twic=v1/focus=50px50p/cover=992x768",
    },
    twentythirdPage: {
      dayNumber: 23,
      germanWord: "Die Weihnachtssocke - Коледен Чорап",
      facts: "Kinder hängen diese Strümpfe Anfang Dezember zu Weihnachten über den Kamin. Der Weihnachtsmann füllt sie mit vielen süßen Leckereien.",
      audioUrl: "Die-Weihnachtddocke.mp3",
      imageUrl: "https://cdn2.eminza.com/uploads/cache/blog_mea_mobile_retina/uploads/media/654a5167e95fb/chaussettes-de-noel.jpg",
    },
    twentyfourthPage: {
      dayNumber: 24,
      germanWord: "Die Heilige Nacht - Святата Нощ",
      facts: "Die Nacht vor Weihnachten",
      audioUrl: "Die_Heilige_Nacht.mp3",
      imageUrl: "https://www.dewullstuuv.de/shop/images/product_images/popup_images/2488_0.jpg",
    },
  }
  const pages = Object.entries(dynamicParams).map(([path, params]) => (
    <Route key={path} path={`/${path}`} element={<DayPage params={params} />} />
  ));
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        {pages}
      </Routes>
    </main>
  );
};

export default App;