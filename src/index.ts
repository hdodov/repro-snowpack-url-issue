import { Watcher } from "oblik/core/watcher";
import { Component } from "oblik/core/component";

export class Test extends Component {
	init() {
		console.log("test");
	}
}

let w = new Watcher({
	components: {
		test: Test,
	},
});

w.run();
