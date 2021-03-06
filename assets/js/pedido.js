var URL_APILOJAVIRTUAL_LISTARPRODUTOS = 'http://localhost:8080/LojaVirtualServer/rest/produto/listar'
var URL_APILOJAVIRTUAL_CADASTRARPEDIDOS = 'http://localhost:8080/LojaVirtualServer/rest/pedido/cadastrar'
	
$(document).ready(function () {
	listarProdutos();
});

function listarProdutos() {

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
						htmlItem += "<img src='" + element.imagem + "' width='100' height='100' />";
						htmlItem += "<br/></br>";
						htmlItem += "<a href='#' onclick='submetePedido(event, " + element.id + ")'><img src='../assets/img/cart.png' width='40' height='40' /></a>";
					htmlItem += "</center>";
				htmlItem += "</div>";
				
				$(".produtos").append(htmlItem);
				
			});		
		}
	});

}

function submetePedido(e, idProduto) {
	
	e.preventDefault();
	
	if ($(".produtos").length > 0) {

		$("#idProduto").val(idProduto);
		
		$.ajax({
			url: URL_APILOJAVIRTUAL_CADASTRARPEDIDOS,
			data: JSON.stringify({
				"id": $('#idProduto').val(),
				"nome": $('#nome').val(),
				"cartao": $('#cartao').val()
			}),
			type: 'POST',
			dataType: 'json',
			contentType : 'application/json',
			success: function(data, status, xhr){
				alert('Pedido #' + data.id + ' realizado com sucesso!');
			},
			error: function (jqXHR, textStatus, errorThrown) {
				alert('Ocorreu um erro ao processar o pedido, tente novamente mais tarde!');
			}
		});	
	
	}

}