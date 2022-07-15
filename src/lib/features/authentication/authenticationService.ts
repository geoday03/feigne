import axios from 'axios';
import { LoginAccountData, RegisterAccountData } from '../../types/auth';

const API_URL = '/api/authentication';

async function register(accountData: RegisterAccountData) {
	const res = await axios.post(API_URL, accountData);

	if (res.data) {
		localStorage.setItem('user', JSON.stringify(res.data));
	}

	return res.data;
}

async function login(accountData: LoginAccountData) {
	const res = await axios.post(`${API_URL}login${accountData}`);

	if (res.data) {
		localStorage.setItem('user', JSON.stringify(res.data));
	}

	return res.data;
}

const logout = async () => {
	localStorage.removeItem('user');
};

const authenticationService = {
	register,
	login,
	logout,
};

export default authenticationService;
