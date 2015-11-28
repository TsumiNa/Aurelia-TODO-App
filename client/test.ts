import { classDeco, propertyDeco } from './decorator';

@classDeco
export class Test {
	t1: string;
	t3: string;
	@propertyDeco t2: string;
	
	constructor(){
		this.t3 = 't3 gogogo';
		console.log("call Test's constructor");
	}

}