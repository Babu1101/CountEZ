import axios from 'axios';
import { REACT_APP_API_URL } from "@env";

export default async function SendForgotPassword( body ){
	const url = `${REACT_APP_API_URL}/users/forgot`;

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

        if(error.response && error.response.status ==404){
            return{
                status: "invalid",
                user: {}
            };
        }
		return {
			status: null,
			user: {}
		};
	}
}