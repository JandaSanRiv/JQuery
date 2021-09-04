$(() => {
    getNotes();
    function getNotes() {

        $("#tbNotes").empty();
        let i = 1;
        $.ajax({
            type: "get",
            url: "http://localhost:3000/notes",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (notes) {
                if (notes != null && notes.length > 0) {
                    notes.forEach(note => {
                        let row = `<tr>
                        <td class="tdNum">${i++}</td>
                        <td class="tdId">${note._id}</td>
                        <td class="tdTitle">${note.title}</td>
                        <td class="tdContent">${note.content}</td>
                        <td class="tdCreatedAt">${note.createdAt}</td>
                        <td class="tdUpdatedAt">${note.updatedAt}</td>
                        <td><button class="btnDelete">Delete</button></td>
                        <td><button class="btnModify">Modify</button></td>
                        </tr>`;
                        $("#tbNotes").append(row);
                    });
                } else {
    
                    let row = `<tr>
                    <td colspan="5"> No hay registros disponibles</td>
                </tr>`;
                    $("#tbNotes").append(row)
                }
    
            }, error: function () {
    
                console.log("No se pudo obtener informacion al respecto");
    
                let row = `<tr>
                    <td colspan="3"> No hay registros disponibles</td>
                </tr>`;
                $('#tbNotes').append(row);
            },
            complete: function () {
    
                $("tbody#tbNotes tr:odd").css("backgroundColor", "#f9f8ff");
            }
    
        });
    }
    
    $("#tblNotes").on("click", ".btnDelete", function () {
    
        let padre = $(this).parents("tr");
        let id = padre.children(".tdId").text();
    
        fetch(`http://localhost:3000/notes/${id}`, { method: "delete" })
            .then(response => {
                if (!response.ok) throw Error(response.status);
                return response.json();
            })
            .then(result => {
                alert("Registro eliminado exitosamente");
            })
            .catch((error) => {
                alert("No se obtuvo respuesta");
            })
            .finally(function () {
                getNotes();
            })    
    });
        
    $("#tblNotes").on("click", ".btnModify", function () {
        $("#divInfoNote").fadeIn();
        $("#spTitInfo").text("Edit Note")
        $("#divInputs").show();
        $("#btnSendModify").show();
        $("#btnSendAdd").hide();
        $("#txtTitle").focus();
        $("#txtCreatedAt, #txtUpdatedAt").parents(".form-sec").show();
    
        let padre = $(this).parents("tr");
        let id = padre.children(".tdId").text();
        $("#txtId").val(padre.children(".tdId").text() + "");
        $("#txtTitle").val(padre.children(".tdTitle").text());
        $("#txtContent").val(padre.children(".tdContent").text());
        $("#txtCreatedAt").val(padre.children(".tdCreatedAt").text());
        $("#txtUpdatedAt").val(padre.children(".tdUpdatedAt").text());
        $("#txtId").prop("idNote", id);
    
        $(".txtField:not(:first)").each(function (i, item) {
            $(this).prop("oldValue", $(this).val());
        });
    });
    
    $("#btnSendModify").click(function () {
    
        let id = $("#txtId").prop("idNote"),
            title = $("#txtTitle").val(),
            content = $("#txtContent").val();
    
        if (title != "" || content != "") {
            modifyNote(id, { "title": title, "content": content });
        } else {
            alert("No se aceptan notas vacias");
        }
    
    });
        
    function modifyNote(id, json) {
        $.ajax({
            type: "put",
            url: "http://localhost:3000/notes/" + id,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(json),
            success: function (datos) {
    
                alert("Nota actualizada exitosamente");    
                $("#txtTitle, #txtContent").val("");    
                $("#divInputs").hide();    
                $("#spTitInfo").text("");
                $("#divInfoNote").fadeOut();
            },
            error: function () {
    
                alert("Error al actualizar la nota");
            },
            complete: function () {
                getNotes();
            }
        });
    }
    
    $("#btnAdd").click(function () {
        $("#divInfoNote").fadeIn();
        $("#spTitInfo").text("Add Note");
        $("#divInputs").show();
        $("#btnSendModify").hide();
        $("#btnSendAdd").show();
        $("#txtTitle").focus()
        $("#txtCreatedAt, #txtUpdatedAt").parents(".form-sec").hide()
    
        $("#txtTitle, #txtContent").val("");
    
        let id = $("#txtId").prop("idNote"),
            title = $("#txtTitle").val(),
            content = $("#txtContent").val();
    
    });
    
    $("#btnSendAdd").click(function () {   
    
        let title = $("#txtTitle").val(),
            content = $("#txtContent").val();
    
        if (title != "" || content != "") {
            addNote({ "title": title, "content": content });
        } else {
    
        }
    
    });
    
    function addNote(json) {
        $.ajax({
            type: "post",
            url: "http://localhost:3000/notes",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(json),
            success: function (datos) {
    
                alert("Nota creada exitosamente");    
                $("#txtTitle, #txtContent").val("");    
                $("#spTitInfo").text("");    
                $("#divInputs").hide();
                $("#divInfoNote").fadeOut();
            },
            error: function () {
    
                alert("Error al crear la nota");
            },
            complete: function () {
                getNotes();
            }
        });
    }    
    
    function delete2(id) {
        $.ajax({
            type: "delete",
            url: "http://localhost:3000/notes/" + id,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: function (datos) {
    
                alert("Registro eliminado exitosamente");
            },
            error: function () {
    
                alert("Error al eliminar el registro");
            },
            complete: function () {
                getNotes();
            }
        });
    }


});

