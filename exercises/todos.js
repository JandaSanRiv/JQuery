$(() => {

    getTodos();

});

function getTodos() {
    $("#tbTodos").empty();
    $.ajax({
        type: "get",
        url: "http://jsonplaceholder.typicode.com/todos",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (datos) {
            if (datos != null && datos.length > 0) {
                datos.forEach(fila => {
                    let row = `<tr>
                     <td>${fila.id} </td>
                    <td> ${fila.title}</td>`;
                    if (fila.completed) {
                        row += '<td class="completed">Yes</td>'
                    } else {
                        row += '<td class="uncompleted">No</td>'
                    }
                    row += '</tr>';

                    $('#tbTodos').append(row);

                });
            } else {
                let row = `<tr>
                <td colspan="3"> No hay registros disponibles</td>
            </tr>`;

                $('#tbTodos').append(row);
            }
        },
        error: function () {
            console.log("No se pudo obtener informacion al respecto");

            let row = `<tr>
                <td colspan="3"> No hay registros disponibles</td>
            </tr>`;
            $('#tbTodos').append(row);
        },
        complete: function () {
            $("tbody#tbTodos tr:odd").css("backgroundColor", "#f9f8ff");
        }
    });

}

function firstPending(){
    $("td:contains(Yes):first").parent().css("backgroundColor", "orange");
}


$("#btnSearchById").click(function(){
    let id = $("#txtId").val().replace(/\D/g, '');

    if(id != null && id !=null){
        searchIdPending(id);
    }
});

function searchIdPending(idx){
    $("#tblTodos tr").removeClass("selected");
    $("td:nth-child(1):contains("+idx+"):first").parent().addClass("selected");
}