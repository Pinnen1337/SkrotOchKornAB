buildmenu()



function buildmenu() {
    let links = [
        ["Hem", "index.html"],
        ["Produkter", "products.html"],
        ["Filmer", "media.html"],
        ["Anställda", "employees.html"],
        ["Kontakta oss", "contactus.html"]
    ]

    for (let i = 0; i < links.length; i++) {
        // <li><a href="01HelloWorld.html">Hello World</a></li>

        let listItem = document.createElement("li")
        let link = document.createElement("a")
        link.href = links[i][1]
        let text = document.createTextNode(links[i][0])
        link.appendChild(text)
        listItem.appendChild(link)
        document.getElementById("menu").appendChild(listItem)
    }
}