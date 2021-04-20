import {fish} from 'database'

export const FishList = () => {
  const fishes = invokeTheRightFunctionHere()
  const htmlString = '<article class = "fishList">'
  for (const fish of fishes) {
    htmlString += `<section class = "fishcard">
      <div>
        <img  class="fish__image image--card" src="${fish.image}" />
      </div>
      <div class="fish__name">${fish.name}
      </div>
      <div class="fish__species">${fish.species}
      </div>
      <div class="fish__length">${fish.length}
      </div>
      <div class="fish__location">${fish.location}
      </div>
      <div class="fish__diet">${fish.eats}
      </div>
      </section>
    `
    }
    htmlString += `</article>`
    return htmlString
}