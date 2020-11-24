/*

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

< &lt;
> &gt; 
& &amp;
" &quot;
' &apos;

*/

function convertHTML(str) {
    
    let array = str.split("");

    for(let i = 0; i < array.length; i++){
        switch(array[i]){
            case "<":
                array[i] = "&lt;";
                break;
            case ">":
                array[i] = "&gt;";
                break;
            case "&":
                array[i] = "&amp;";
                break;
            case '"':
                array[i] = "&quot;";
                break;
            case "'":
                array[i] = "&apos;";
                break;
        }
    }

    let res = array.join("");

    return res;
}
  
convertHTML("Dolce & Gabbana");