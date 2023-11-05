import axios from 'axios';
import { REACT_APP_API_URL } from "@env";

export default async function GetTotal( ){
	const url = `${REACT_APP_API_URL}/rounds`;

	const controller = new AbortController();
	setTimeout(() => controller.abort(), 5000);

	try {
		console.log(url);
		const response = await axios.get(url, {
			signal: controller.signal,
		});
		
		return response.data.total;
		
	} catch (error) {
		console.log(error);
		return -1;
	}
}