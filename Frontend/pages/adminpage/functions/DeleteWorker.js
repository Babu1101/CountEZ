import axios from 'axios';
import { REACT_APP_API_URL } from "@env";

export default async function DeleteWorker( body ){
	const url = `${REACT_APP_API_URL}/users`;

	const controller = new AbortController();
	setTimeout(() => controller.abort(), 5000);

	try {
		console.log(url);
		const response = await axios.delete(url, {
			data: body,
			signal: controller.signal,
		});
		
		return response;
		
	} catch (error) {
		console.log(error);
		return {
			status: null
		};
	}
}