export interface AuthenticationState {
	account: LoginAccountData;
	isError: boolean;
	isSuccess: boolean;
	isLoading: boolean;
	message: string;
}

export type RegisterAccountData = {
	username: string;
	email: string;
	password: string;
};

export declare interface LoginAccountData {
	username: string;
	password: string;
}
