import Cards from './card'

class SubCards extends Cards {
  constructor(name, image, translate, audioSrc, subId) {
    super(name, image)
    this.translate = translate
    this.audioSrc = audioSrc
    this.id = subId
  }

  renderCard() {
    super.renderCard(this.name, this.image)
  }
}

export default SubCards
