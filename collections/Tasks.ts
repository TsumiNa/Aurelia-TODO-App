export interface Task {
	_id?: string;
	checked: boolean;
	text: string;
	createdAt: Date;
}

export const Tasks = new Mongo.Collection<Task>("tasks");

