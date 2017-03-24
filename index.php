<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

	<?php include("includes/head.php"); ?>
	
	<body>
		<h1>Página Principal</h1>
		<h2>Escolha a opção</h2>
		
		<h3>Produtos</h3>
		<ul>
			<li><a href="<?=SCRIPT_ROOT;?>/produto/listarProdutos.php">Gerenciar Produtos</a></li>
			<li><a href="<?=SCRIPT_ROOT;?>/produto/cadastrarProduto.php">Cadastrar Produto</a></li>
		</ul>
		
		<h3>Pedidos</h3>
		
		<ul>
			<li><a href="<?=SCRIPT_ROOT;?>/pedido/cadastrarPedido.php">Cadastrar Pedido</a></li>
		</ul>		
	</body>

</html>