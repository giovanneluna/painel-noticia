//Maneira mais "Profissional" de se fazer um componente
class CardNews extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: "open" })
    //atribuindo os filhos da "arvore"
    shadow.appendChild(this.build())
    shadow.appendChild(this.styles())
  }

  build() {
    //cria a div
    const componentRoot = document.createElement("div")
    //adiciona classe e o nome dela na div
    componentRoot.setAttribute("class", "card")

    const cardLeft = document.createElement("div")
    cardLeft.setAttribute("class", "card-left")

    const autor = document.createElement("span")
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous")
    //recebe um valor (||) ou vem um valor padrão

    const linkTitle = document.createElement("a")
    linkTitle.textContent = this.getAttribute("title")
    linkTitle.href = this.getAttribute("link-url")

    const newsContent = document.createElement("p")
    newsContent.textContent = this.getAttribute("content")

    cardLeft.appendChild(autor)
    cardLeft.appendChild(linkTitle)
    cardLeft.appendChild(newsContent)

    const cardRight = document.createElement("div")
    cardRight.setAttribute("class", "card-right")

    const newsImage = document.createElement("img")
    newsImage.src = this.getAttribute("photo") || "assets/default.jpg"
    newsImage.alt = "Foto da Noticia"
    cardRight.appendChild(newsImage)

    componentRoot.appendChild(cardLeft)
    componentRoot.appendChild(cardRight)

    return componentRoot
  }

  styles() {
    const style = document.createElement("style")
    style.textContent = `
    .card {
      width: 80%;
      display: flex;
      flex-direction: row;
      box-shadow: 9px 9px 26px 0px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 9px 9px 26px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 9px 9px 26px 0px rgba(0, 0, 0, 0.75);
      justify-content: space-between;
      margin: 20px 20px
    }
    
    .card-left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
    }
    
    .card-left a {
      margin-top: 15px;
      font-size: 25px;
      text-decoration: none;
      color: black;
      font-weight: bold;
    }
    
    .card-left span {
      font-weight: 400;
    }
    
    .card-left p {
      color: rgb(70, 70, 70);
    }
    
    .card-right img {
      max-width: 300px;
      max-height: 100%;
    }
    `

    return style
  }
}
customElements.define("card-news", CardNews)
