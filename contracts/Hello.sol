pragma solidity ^0.4.23;


contract Hello{
	
	string name;
	address owner;

	constructor() public {
		owner = msg.sender;
	}

	function setName(string _name) public {
		name = _name;
	}

	function getName() view public returns(string){
		return name;
	}



}