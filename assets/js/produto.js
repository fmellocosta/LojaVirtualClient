var URL_APILOJAVIRTUAL_CADASTRARPRODUTOS = 'http://localhost:8080/LojaVirtualServer/rest/produto/cadastrar'
var URL_APILOJAVIRTUAL_REMOVERPRODUTOS = 'http://localhost:8080/LojaVirtualServer/rest/produto/excluir'
var URL_APILOJAVIRTUAL_LISTARPRODUTOS = 'http://localhost:8080/LojaVirtualServer/rest/produto/listar'
	
$(document).ready(function () {
	
	listaProdutos();
		
});	

function listaProdutos() {
	
	$.ajax({ 
		type: 'GET', 
		url: URL_APILOJAVIRTUAL_LISTARPRODUTOS, 
		dataType: 'json',
		success: function (data) { 
		
			$(".produtos").empty();
		
			$.each( data, function( key, element ) {
				
				var htmlItem = "";
				
				htmlItem += "<div class='item'>";
					htmlItem += "<center>";
						htmlItem += "<span class='nome'>" + element.nome + "</span> </br>";
						htmlItem += "<span class='preco'>R$ "  + element.preco +  "</span> </br>";
						htmlItem += "<img src='" + element.imagem + "' width='200' height='200' />";
						htmlItem += "<br/></br>";
						htmlItem += "<a href='#' onclick='removeProduto(event, " + element.id + ")'><img src='../assets/img/delete.png' width='40' height='40' /></a>";
					htmlItem += "</center>";
				htmlItem += "</div>";
				
				$(".produtos").append(htmlItem);
				
			});		
		}
	});	
	
}

function removeProduto(e, idProduto) {
	
	e.preventDefault();
	
	$.ajax({
		url: URL_APILOJAVIRTUAL_REMOVERPRODUTOS + "/" + idProduto,
		type: 'DELETE',
		contentType : 'application/json',
		success: function(data, status, xhr){
			console.log(xhr);
			listaProdutos();
			alert('Produto removido com sucesso!');
		},
		error: function (xhr, textStatus, errorThrown) {
			console.log(xhr);
			console.log(textStatus);
			console.log(errorThrown);
			alert('Ocorreu um erro ao remover o produto, tente novamente mais tarde!');
		}
	});
	
}

function submeteProduto(e) {
	
	e.preventDefault();
	
	$.ajax({
		url: URL_APILOJAVIRTUAL_CADASTRARPRODUTOS,
		data: formToJSON(),
		type: 'POST',
		contentType : 'application/json',
		success: function(data, status, xhr){
			console.log(xhr);
			alert('Produto cadastrado com sucesso!');
			$("body").find("input[type=text]").val("");
		},
		error: function (jqXHR, textStatus, errorThrown) {
			alert('Ocorreu um erro ao processar o cadastro, tente novamente mais tarde!');
		}
	});
	
}

function formToJSON() {
	return JSON.stringify({
        "nome": $('#nome').val(),
		"preco": $('#preco').val(),
		"imagem": $('#imagem').val()
	});
}