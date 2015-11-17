import { classDeco, propertyDeco } from './decorator';

@classDeco
export class Test {
	t3: string;
	t2: string = this.dd;
	
	@propertyDeco
	get dd() {
		return 't2';
	}
	
	constructor(){
		this.t3 = 't3 gogogo';
		console.log("call Test's constructor");
	}

}