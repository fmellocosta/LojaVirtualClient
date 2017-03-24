<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

	<?php include("../includes/head.php"); ?>
	<script src="<?=SCRIPT_ROOT;?>/assets/js/pedido.js"></script>
	
	<body>

		<h1>Pedido</h1>
		<h3><a href="<?=SCRIPT_ROOT;?>">Inicio</a> :: Cadastrar Pedido</h3>
		
		<div class="regras">
			Escolha um produto e clique no ícone do carrinho para finalizar o pedido.<br/>
		</div>
		
		<br/><br/>
		
		<div class="dados">
			Nome: <input type="text" name="nome" id="nome" size="30" />
			<br/>
			Número Cartão: <input type="text" name="cartao" id="cartao" size="50" />
		</div>

		<input type="hidden" name="idProduto" id="idProduto" />
		
		<div class="produtos"></div>
		
	</body>

</html>