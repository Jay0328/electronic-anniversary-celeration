import { imageUrls } from './images'

export enum MemoryCardStatus {
  IDLE,
  FLIPPED,
  COMPLETED
}

export interface MemoryCard {
  imageUrl: string
  status: MemoryCardStatus
}

export type MemoryCardMatrix = MemoryCard[][]

export interface MemoryCardAddress {
  x: number
  y: number
}

export class MemoryCardGame {
  readonly cardMatrix: MemoryCardMatrix = this.shuffleCards()
  isCompleted = false
  private flippable = true
  private flippedCard?: MemoryCard

  flipCard(address: MemoryCardAddress) {
    if (!this.flippable) return

    const { x, y } = address
    const card = this.cardMatrix[y][x]

    if (card.status !== MemoryCardStatus.IDLE) return

    card.status = MemoryCardStatus.FLIPPED

    if (this.flippedCard) {
      this.flippable = false
      const card1 = this.flippedCard
      const card2 = card
      window.setTimeout(() => this.checkComplete(card1, card2), 600)
      this.flippedCard = undefined
    } else {
      this.flippedCard = card
    }
  }

  private checkComplete(card1: MemoryCard, card2: MemoryCard) {
    let status

    if (card1.imageUrl === card2.imageUrl) {
      status = MemoryCardStatus.COMPLETED
    } else {
      status = MemoryCardStatus.IDLE
    }

    card1.status = status
    card2.status = status

    if (status === MemoryCardStatus.COMPLETED) {
      window.setTimeout(() => {
        this.isCompleted = this.cardMatrix.every((cardRows) =>
          cardRows.every((card) => card.status === MemoryCardStatus.COMPLETED)
        )
      }, 600)
    }

    this.flippable = true
  }

  private shuffleCards() {
    const shuffedCards = [...imageUrls, ...imageUrls]
      .map((imageUrl) => ({ imageUrl, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map<MemoryCard>(({ imageUrl }) => ({
        imageUrl,
        status: MemoryCardStatus.IDLE
      }))
    const width = Math.ceil(Math.sqrt(shuffedCards.length))
    return shuffedCards.reduce((cardMatrix, card, index) => {
      const x = index % width

      if (x === 0) {
        cardMatrix.push([])
      }

      cardMatrix[cardMatrix.length - 1].push(card)
      return cardMatrix
    }, [] as MemoryCardMatrix)
  }
}
