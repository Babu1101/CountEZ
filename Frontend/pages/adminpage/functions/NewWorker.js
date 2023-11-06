import axios from 'axios';
import { REACT_APP_API_URL } from "@env";

export default async function NewWorker( body ){
	const url = `${REACT_APP_API_URL}/users`;

	const controller = new AbortController();
	setTimeout(() => controller.abort(), 5000);

	try {
		console.log(url);
		const response = await axios.post(url, body, {
			signal: controller.signal,
		});
		
		return response.data;
		
	} catch (error) {
		console.log(error);
		return {
			status: null
		};
	}
}