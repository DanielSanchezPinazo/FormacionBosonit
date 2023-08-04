/* Crea una función que elimine las etiquetas html o xml de un string.
La función debe tener un string como único parámetro. */

function removeHTMLTags(html) {

    let newStr = "";

    for (let i = 0; i < html.length; i++) {

        if (html[i] == ">") {

            const index = html.indexOf("<", i)
            // console.log(i + " : " + index);
            newStr += html.slice(i + 1, index);

        }
    }

    return newStr;

    /* forma corta con replace y expresion regular

    return html.replace(/<[^>]+>/g, "");*/

}

const result = removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>');

console.log(result); // lorem ipsum


