/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of". */

function titleCase(str) {

   str = str.toLowerCase();
    let arr = str.split(" ");
    // console.log(str);
    str = "";

    for (let i = 0; i < arr.length; i++) {

        let c = arr[i][0].toUpperCase();
        // console.log(c);
        let l = arr[i].substring(1);
        // console.log(l);
        arr[i] = c + l;
        // str += `${arr[i]} `; esto falla porque añade un espacio vacío al final de la cadena habría que poner str = str.trim(); después del "for"
        str = arr.join(" "); 
    }
    // console.log(typeof str);
    return str; 
/*
  // Convertir la cadena a minúsculas y dividirla en palabras
  const words = str.toLowerCase().split(' ');

  // Transformar la primera letra de cada palabra a mayúsculas
  const titleCasedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

  // Unir las palabras nuevamente en una cadena
  return titleCasedWords.join(' ');  */


  }
  
//   titleCase("I'm a little tea pot");
  console.log(titleCase("I'm a little tea pot"));
  console.log(titleCase("sHoRt AnD sToUt"));
  console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

