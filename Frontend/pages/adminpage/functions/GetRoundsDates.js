import axios from 'axios';
import { REACT_APP_API_URL } from "@env";

export default async function ExportData( body ){
	const url = `${REACT_APP_API_URL}/rounds/dates`;

	const controller = new AbortController();
	setTimeout(() => controller.abort(), 5000);

	try {
		console.log(url);
		const response = await axios.get(url, {
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