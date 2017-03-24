<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

	<?php include("../includes/head.php"); ?>
	<script src="<?=SCRIPT_ROOT;?>/assets/js/produto.js"></script>
	
	<body>
		<h1>Produto</h1>
		<h3><a href="<?=SCRIPT_ROOT;?>">Inicio</a> :: Produto</h3>
		
		<div class="regras">
			Preencha o formulário com os dados do produto
		</div>		
		
		<div class="produtos">
			Nome: <input type="text" name="nome" id="nome" size="50" /> <br/><br/>
			Preço: <input type="text" name="preco" id="preco" size="20" /> (Ex.: 999.99) <br/><br/>
			Url da Imagem: <input type="text" name="imagem" id="imagem" size="80" /> <br/><br/>
			<input type="button" value="Enviar" id="enviar" onclick="submeteProduto(event);"/>
		</div>
		
	</body>

</html>