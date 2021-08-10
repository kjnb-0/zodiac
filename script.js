const astroURL = "https://aztro.sameerkumar.website?"

let signs = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"];

let days = ["today","tomorrow"]

fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    console.log(`${data.content} —${data.author}`)
  })

  fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })

  signs[0].append(".dropdown-menu")

  fetch(astroURL + "sign=" + signs[2] + "&day" + days[1], {
      method: 'POST'
  })
  .then(response => response.json())
  .then(data => {
      console.log(data)
  })
