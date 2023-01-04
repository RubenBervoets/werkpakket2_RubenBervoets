import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [],
    products: [
      {
        id: "air-king",
        image: "assets/AIR-KING.png",
        title: "AIR-KING",
        tags: "Oyster, 40mm, Oystersteel",
        descriptionIntro: "De Rolex Air-King is een eerbetoon aan de luchtvaartpioniers en de rol van de Oyster tijdens het grandioze verhaal van de luchtvaart.",
        descriptionText: "Met zijn 40 mm kast van Oystersteel-staal, zijn Oyster-band met massieve schakels en zijn kenmerkende zwarte wijzerplaat, laat de Air‑King het luchtvaarterfgoed van de oorspronkelijke Rolex Oyster voortleven.",
        price: "€ 7 000.00",
        btw: "21%",
        stock: ""
      },
      {
        id: "cosmograph daytona",
        image: "assets/COSMOGRAPH DAYTONA.png",
        title: "COSMOGRAPH DAYTONA",
        tags: "Oyster, 40mm, yellow gold",
        descriptionIntro: "De Oyster Perpetual Cosmograph Daytona is het ultieme multifunctionele horloge voor iedereen met een passie voor racen en snelheid.",
        descriptionText: "De Cosmograph Daytona, die werd geïntroduceerd in 1963, is ontworpen om aan de eisen van professionele autocoureurs te voldoen. Het is een icoon dat in naam en functie voor altijd verbonden zal zijn met de veeleisende wereld van het autoracen. Meer dan vijftig jaar na zijn creatie blijft de Cosmograph Daytona een klasse apart binnen de sportchronografen en blijft hij zich verder ontwikkelen.",
        price: "€ 39 900.00",
        btw: "21%",
        stock: ""
      },
      {
        id: "datejust 36",
        image: "assets/DATEJUST 36.png",
        title: "DATEJUST 36",
        tags: "Oyster, 36mm, Oystersteel and yellow gold",
        descriptionIntro: "Deze Oyster Perpetual Datejust 36 van Oystersteel-staal en geelgoud heeft een gouden, gekarteld motief wijzerplaat en een Jubilee-band.",
        descriptionText: "De lichtreflecties op de kastzijkanten en de bandaanzetten benadrukken het elegante profiel van de 36 mm Oyster-kast, die is uitgerust met een gekartelde bezel. Esthetisch gezien is de Datejust al jaren bij de tijd, terwijl hij aan de codes blijft voldoen die hem, met name in de traditionele versies, tot een van de bekendste en meest herkenbare horloges maken.",
        price: "€ 11 400.00",
        btw: "21%",
        stock: ""
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
