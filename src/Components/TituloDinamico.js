//Maneira mais "Simples" de se fazer um componente
class TituloDinamico extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: "open" })
    //base do componente
    const componentRoot = document.createElement("h1")
    componentRoot.textContent = this.getAttribute("title")
    //estilizar
    const style = document.createElement("style")
    style.textContent = `
    h1 {
      color:red;
    }
    `

    //enviar para a shadow
    shadow.appendChild(componentRoot)
    shadow.appendChild(style)
  }
}

customElements.define("titulo-dinamico", TituloDinamico)
