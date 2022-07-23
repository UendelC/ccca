// @ts-nocheck
// calculate ride
export function calc (movArray) {
	let result = 0;
	for (const mov of movArray) {
		if (mov.dist != null && mov.dist != undefined && typeof mov.dist === "number" && mov.dist > 0) {
			if (mov.ds != null && mov.ds != undefined && mov.ds instanceof Date && mov.ds.toString() !== "Invalid Date") {

				// overnight
                console.log('valores válidos');
				if (mov.ds.getHours() >= 22 || mov.ds.getHours() <= 6) {
                    console.log('overnight');
					// not sunday
					if (mov.ds.getDay() !== 0) {
                        console.log('não é domingo');
						result += mov.dist * 3.90;
					// sunday
					} else {
                        console.log('é domingo');
						result += mov.dist * 5;

					}
				} else {
					// sunday
					if (mov.ds.getDay() === 0) {

						result += mov.dist * 2.9;

					} else {
						result += mov.dist * 2.10;

					}
				}
			} else {
				// console.log(d);
				return -2;
			}
		} else {
			// console.log(dist);

			return -1;
		}

	}
	if (result < 10) {
		return 10;
	} else {
		return result;
	}
}