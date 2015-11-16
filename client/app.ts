import { Tasks, Task } from '../collections/Tasks';

export class App {
	tasks: Task[];
	new_task: string;
	hideCompleted: boolean;
	incompleteCount: number;

	constructor() {
		this.new_task = '';
		this.hideCompleted = false;
		Session.setDefault("hideCompleted", false);
		Tracker.autorun(() => {
			let tasks: Task[] = []; 
			if (Session.get("hideCompleted")) {
				tasks = Tasks.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } }).fetch();
			} else {
				tasks = Tasks.find({}, { sort: { createdAt: -1 } }).fetch();
			}
			this.tasks = tasks;
			this.incompleteCount = Tasks.find({checked: {$ne: true}}).count();
		})
	}

	onSubmit() {
		Tasks.insert({
			checked: false,
			text: this.new_task,
			createdAt: new Date()
		});
		this.new_task = '';
	}

	onCheck(task: Task) {
		Tasks.update(task._id, {
			$set: { checked: !task.checked }
		});
		return true;
	}

	onDelete(task: Task) {
		Tasks.remove(task._id);
		return true;
	}

	onHideCompleted() {
		Session.set("hideCompleted", !this.hideCompleted)
		this.hideCompleted = !this.hideCompleted;
		return true;
	}
}