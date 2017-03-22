var URL_APILOJAVIRTUAL_LISTARPRODUTOS = 'http://localhost:8080/LojaVirtualServer/rest/produto/listar'
var URL_APILOJAVIRTUAL_CADASTRARPEDIDOS = 'http://localhost:8080/LojaVirtualServer/rest/pedido/cadastrar'
	
$(document).ready(function () {
	
	$.ajax({ 
		type: 'GET', 
		url: URL_APILOJAVIRTUAL_LISTARPRODUTOS, 
		dataType: 'json',
		success: function (data) { 
			$.each( data, function( key, element ) {
				
				var htmlItem = "";
				
				htmlItem += "<div class='item'>";
					htmlItem += "<center>";
						htmlItem += "<span class='nome'>" + element.nome + "</span> </br>";
						htmlItem += "<span class='preco'>R$ "  + element.preco +  "</span> </br>";
						htmlItem += "<img src='" + element.imagem + "' width='200' height='200' />";
						htmlItem += "<br/></br>";
						htmlItem += "<a href='#' onclick='submetePedido(event, " + element.id + ")'><img src='../assets/img/cart.png' width='40' height='40' /></a>";
					htmlItem += "</center>";
				htmlItem += "</div>";
				
				$(".produtos").append(htmlItem);
				
			});		
		}
	});
		
});

function submetePedido(e, idProduto) {
	
	e.preventDefault();
	
	$("#idProduto").val(idProduto);
	
	$.ajax({
		url: URL_APILOJAVIRTUAL_CADASTRARPEDIDOS,
		data: formToJSON(),
		type: 'POST',
		dataType: 'json',
		contentType : 'application/json',
		success: function(data){
			alert('Pedido #' + data.id + ' efetuado com sucesso!');
		},
		error: function (jqXHR, textStatus, errorThrown) {
			alert('Ocorreu um erro ao processar o pedido, tente novamente mais tarde!');
		}
	});	
	
}

function formToJSON() {
	return JSON.stringify({
        "id": $('#idProduto').val()
	});
}