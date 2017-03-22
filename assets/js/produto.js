var URL_APILOJAVIRTUAL_CADASTRARPRODUTOS = 'http://localhost:8080/LojaVirtualServer/rest/produto/cadastrar'
	
function submeteProduto(e) {
	
	e.preventDefault();
	
	$.ajax({
		url: URL_APILOJAVIRTUAL_CADASTRARPRODUTOS,
		data: formToJSON(),
		type: 'POST',
		dataType: 'json',
		contentType : 'application/json',
		success: function(data){
			alert('Produto #' + data.id + ' cadastrado com sucesso!');
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