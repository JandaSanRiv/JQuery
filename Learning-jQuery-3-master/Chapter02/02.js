// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(() => {
    $('#selected-plays > li') // hijos directos
        .addClass('horizontal');
    // $('#selected-plays li')
    // .addClass('horizontal');

    $("#selected-plays li:not(.horizontal)").addClass("sub-level");

    $("#selected-plays li:not(.sub-level):eq(2)").addClass("big-letter");

    $('a[href^="mailto:"]').addClass('mailto'); // Si el atributo href comienza con mailto
    $('a[href$=".pdf"]').addClass('pdflink');// Si el atributo href termina con .pdf
    $('a[href^="http"][href*="henry"]').addClass('henrylink'); // Si el atributo href compieza con href y cualquier lugar tiene los caracteres henry
    // $('a[href^="http"],[href*="henry"]').addClass('henrylink'); // Si el atributo href compieza con href o cualquier lugar tiene los caracteres henry

    $('td:nth-child(1)').css('green', 'red');// solo a los td que sean el 1er hijo del parent
    $('td:eq(1)').css('color', 'brown');//se va por en n -eavo elemento tipo td en el documento
    $('tr:nth-child(1)').css('color', 'purple');

    //---------------
    $('tr:even').addClass('alt');

    // Los siguientes dos son equivalentes
    $('tr:odd').css('backgroundColor', 'pink');
    $('tr').filter(':odd').addClass('alt')

    // $('tr:nth-child(odd)').addClass('alt');

    // $('td:contains(Henry)').addClass('highlight');

    // $('td:contains(Henry)').next().addClass('highlight');


    // $('td:contains(History)').prev().css('textDecoration', 'underline');
    // $('td:contains(Henry)').nextAll().css('color', 'darkBlue');


    //Este logra el mismo formato que el siguiente bloque grande
    $('td:contains(Henry)').nextAll().addClass('highlight');

    //este logra lo mismo que el de la linea anterior
    // $('td:contains(Henry)') // Find every cell containing "Henry"
    //     .parent() // Select its parent
    //     .find('td:eq(1)') // Find the 2nd descendant cell
    //     .addClass('highlight') // Add the "highlight" class
    //     .end() // Return to the parent of the cell containing "Henry"
    //     .find('td:eq(2)') // Find the 3rd descendant cell
    //     .addClass('highlight'); // Add the "highlight" class


    const eachText = [];
    $('td').each((i, td) => {
        console.log(`Valor de td ${i}`)
        if (td.textContent.startsWith('H')) {
            eachText.push(td.textContent);
        }
        if(td.textContent.startsWith("16")){
            td.setAttribute("class", "los-de-1600" );
        }
        if(td.textContent.startsWith("15")){
            td.setAttribute("class", "los-de-1500" );
        }
    });
    console.log('each', eachText);
    // ["Hamlet", "Henry IV, Part I", "History", "Henry V", "History"]


    let texto = 0
    $("tbody td:nth-child(3)").each((i, td) => {
        try {
            texto = parseInt(td.textContent);
        }
        catch (exception) {
            texto = 0
        }

        if (texto >= 1600 && texto < 1700) {
            td.bgColor = "yellow"
        }
        else if (texto >= 1500 && texto < 1600) {
            td.bgColor = "blue"
        }
    });

});

