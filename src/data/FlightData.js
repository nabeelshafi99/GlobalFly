

const flightData = [
    {
        id:1,
      airline: "Emirates",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIpCT6a8VqI-PgBbbU8E4UbnJxOHkpErgjSQ&s",
      departure_time: "12:00 pm",
      arrival_time: "01:28 pm",
      duration: "2h 28m",
      route: "EWR-BNA",
      price: 100,
      reviews: 54,
      rating: 4.2,
      location:"Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"
    },
    {
        id:2,
      airline: "FlyDubai",
      image: "https://logowik.com/content/uploads/images/flydubai7157.jpg",
      departure_time: "12:00 pm",
      arrival_time: "01:28 pm",
      duration: "2h 28m",
      route: "EWR-BNA",
      price: 200,
      reviews: 54,
      rating: 4.2,
      location:"Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"

    },
    {
        id:3,
      airline: "Qatar Airways",
      image:
        "https://download.logo.wine/logo/Qatar_Airways/Qatar_Airways-Logo.wine.png",
      departure_time: "12:00 pm",
      arrival_time: "01:28 pm",
      duration: "2h 28m",
      route: "EWR-BNA",
      price: 300,
      reviews: 54,
      rating: 4.2,
      location:"Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"

    },
    {
        id:4,
      airline: "Lufthansa",
      image: "https://download.logo.wine/logo/Lufthansa/Lufthansa-Logo.wine.png",
      departure_time: "12:00 pm",
      arrival_time: "01:28 pm",
      duration: "2h 28m",
      route: "EWR-BNA",
      price: 400,
      reviews: 54,
      rating: 4.2,
      location:"Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"

    },
    {
        id:5,
      airline: "British Airways",
      image:"https://logos-world.net/wp-content/uploads/2021/02/British-Airways-Logo.png",
      departure_time: "12:00 pm",
      arrival_time: "01:28 pm",
      duration: "2h 28m",
      route: "EWR-BNA",
      price: 500,
      reviews: 54,
      rating: 4.2,
      location:"Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"

    },
    {
        id:6,
      airline: "Air France",
      image: "https://www.logo.wine/a/logo/Air_France/Air_France-Logo.wine.svg",
      departure_time: "12:00 pm",
      arrival_time: "01:28 pm",
      duration: "2h 28m",
      route: "EWR-BNA",
      price: 600,
      reviews: 54,
      rating: 4.2,
      location:"Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"

    },
    {
        id:7,
      airline: "Singapore Airlines",
      image:"https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/1200px-Singapore_Airlines_Logo_2.svg.png",
      departure_time: "12:00 pm",
      arrival_time: "01:28 pm",
      duration: "2h 28m",
      route: "EWR-BNA",
      price: 700,
      reviews: 54,
      rating: 4.2,
      location:"Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"
      
    },
    {
        id:8,
      airline: "Turkish Airlines",
      image: "https://1000logos.net/wp-content/uploads/2020/04/Turkish_Airlines_logo.png",
      departure_time: "12:00 pm",
      arrival_time: "01:28 pm",
      duration: "2h 28m",
      route: "EWR-BNA",
      price: 800,
      reviews: 54,
      rating: 4.2,
      location:"Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"
      
    },
    {
        id:9,
      airline: "Etihad Airways",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Etihad-airways-logo.svg/1024px-Etihad-airways-logo.svg.png",
      departure_time: "12:00 pm",
      arrival_time: "01:28 pm",
      duration: "2h 28m",
      route: "EWR-BNA",
      price: 900,
      reviews: 54,
      rating: 4.2,
      location:"Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"
      
    },
    {
        id:10,
      airline: "Thai Airways",
      image:"https://download.logo.wine/logo/Thai_Airways/Thai_Airways-Logo.wine.png",
      departure_time: "12:00 pm",
      arrival_time: "01:28 pm",
      duration: "2h 28m",
      route: "EWR-BNA",
      price: 1000,
      reviews: 54,
      rating: 4.2,
      location:"Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"
      
    },
    {
        id:11,
      airline: "Japan Airlines",
      image: "https://logowik.com/content/uploads/images/japan-airlines5379.jpg",
      departure_time: "12:00 pm",
      arrival_time: "01:28 pm",
      duration: "2h 28m",
      route: "EWR-BNA",
      price: 1100,
      reviews: 54,
      rating: 4.2,
      location:"Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"
      
    },
    {
        id:12,
      airline: "Korean Air",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx8VF-FDlz5QWZfXpqQQB2DdSO-957ZoGJmA&shttps://example.com/koreanair_logo.png",
      departure_time: "12:00 pm",
      arrival_time: "01:28 pm",
      duration: "2h 28m",
      route: "EWR-BNA",
      price: 1200,
      reviews: 54,
      rating: 4.2,
      location:"Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"
      
    },
    {
        id:13,
      airline: "Cathay Pacific",
      image: "https://1000logos.net/wp-content/uploads/2020/04/Cathay-Pacific-Logo.jpg",
      departure_time: "12:00 pm",
      arrival_time: "01:28 pm",
      duration: "2h 28m",
      route: "EWR-BNA",
      price: 1300,
      reviews: 54,
      rating: 4.2,
      location:"Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"
      
    },
    {
        id:14,
      airline: "Alaska Airlines",
      image: "https://s42662.pcdn.co/wp-content/uploads/Alaska-Airlines-logo.png",
      departure_time: "12:00 pm",
      arrival_time: "01:28 pm",
      duration: "2h 28m",
      route: "EWR-BNA",
      price: 1400,
      reviews: 54,
      rating: 4.2,
      location:"Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"
      
    },
    {
        id:15,
      airline: "Delta Airlines",
      image: "https://download.logo.wine/logo/Delta_Air_Lines/Delta_Air_Lines-Logo.wine.png",
      departure_time: "12:00 pm",
      arrival_time: "01:28 pm",
      duration: "2h 28m",
      route: "EWR-BNA",
      price: 1500,
      reviews: 54,
      rating: 4.2,
      location:"Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"
      
    },
    {
        id:16,
      airline: "American Airlines",
      image:"https://s202.q4cdn.com/986123435/files/doc_downloads/logos/american-airlines/THUMB-aa_aa__ahz_4cp_grd_pos-(1).png",
      departure_time: "12:00 pm",
      arrival_time: "01:28 pm",
      duration: "2h 28m",
      route: "EWR-BNA",
      price: 1600,
      reviews: 54,
      rating: 4.2,
      location:"Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"
      
    },
    {
        id:17,
      airline: "United Airlines",
      image: "https://download.logo.wine/logo/United_Airlines/United_Airlines-Logo.wine.png",
      departure_time: "12:00 pm",
      arrival_time: "01:28 pm",
      duration: "2h 28m",
      route: "EWR-BNA",
      price: 1700,
      reviews: 54,
      rating: 4.2,
      location:"Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"
      
    },
    {
        id:18,
      airline: "Austrian Airlines",
      image: "https://airhex.com/images/airline-logos/alt/austrian-airlines.png",
      departure_time: "12:00 pm",
      arrival_time: "01:28 pm",
      duration: "2h 28m",
      route: "EWR-BNA",
      price: 1800,
      reviews: 54,
      rating: 4.2,
      location:"Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"
      
    },
    {
        id:19,
      airline: "Swiss International Air Lines",
      image:"https://www.logo.wine/a/logo/Swiss_International_Air_Lines/Swiss_International_Air_Lines-Logo.wine.svg",
      departure_time: "12:00 pm",
      arrival_time: "01:28 pm",
      duration: "2h 28m",
      route: "EWR-BNA",
      price: 1900,
      reviews: 54,
      rating: 4.2,
      location:"Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"
      
    },
    {
        id:20,
      airline: "Finnair",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVOPigTMVRKj3fJyJGum5NGJI86SVgLiduVA&s",
      departure_time: "12:00 pm",
      arrival_time: "01:28 pm",
      duration: "2h 28m",
      route: "EWR-BNA",
      price: 2000,
      reviews: 54,
      rating: 4.2,
      location:"Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"
      
    },
    {
        id:21,
      airline: "Aeroflot",
      image: "https://download.logo.wine/logo/Aeroflot/Aeroflot-Logo.wine.png",
      departure_time: "12:00 pm",
      arrival_time: "01:28 pm",
      duration: "2h 28m",
      route: "EWR-BNA",
      price: 2100,
      reviews: 54,
      rating: 4.2,
      location:"Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"
      
    },
  ];


  export default flightData;