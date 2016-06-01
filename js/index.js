angular
	.module('Lista', [])
	.controller('listaCtrl', ListaCtrl);

function ListaCtrl($scope){
	$scope.title = 'angular dojo';

	$scope.contatos = [
		{name: 'lucas', phone: '12309812', operadora: {name: 'Oi', code: 14}},
		{name: 'pedro', phone: '76123098', operadora: {name: 'Vivo', code: 15}}
	];

	$scope.operadoras = [
		{name: 'Oi', code: 14, categoria: 'celular'},
		{name: 'Vivo', code: 15, categoria: 'celular'},
		{name: 'Tim', code: 41, categoria: 'celular'},
		{name: 'Claro', code: 12, categoria: 'celular'},
		{name: 'GVT', code: 25, categoria: 'fixo'},
		{name: 'Embratel', code: 21, categoria: 'fixo'}
	];

	$scope.isContatoSelecionado = function(contatos){
		return contatos.some(function (contato){
			return contato.selected;
		});
	}

	$scope.addContact = function(contato){
		$scope.contatos.push({name: contato.name, phone: contato.phone, operadora: contato.operadora});
		delete $scope.contato;
	}

	$scope.removeContacts = function(contatos){
		$scope.contatos = contatos.filter(function(contato){
			if (!contato.selected) return contato;
		})
	}

	$scope.removeContact = function(contatos, contato){
		$scope.contatos = contatos.filter(function(con){
			if (con != contato) return con;
		})
	}
}