<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

	<?php include("../includes/head.php"); ?>
	<script src="<?=SCRIPT_ROOT;?>/assets/js/pedido.js"></script>
	
	<body>

		<h1>Pedido</h1>
		<h3><a href="<?=SCRIPT_ROOT;?>">Inicio</a> :: Cadastrar Pedido</h3>
		
		<div class="regras">
			Escolha um produto e clique no ícone do carrinho para finalizar o pedido.<br/>
			Ao clicar, o pedido ja será feito e contabilizará o consumo de 1 unidade no BD. (Ponto de melhoria: tela de confirmacao de pedido)<br/>
		</div>
		
		<br/><br/>
		
		<input type="hidden" name="idProduto" id="idProduto" />
		
		<div class="produtos"></div>
		
	</body>

</html>