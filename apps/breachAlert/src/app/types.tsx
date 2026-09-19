export interface User{
    email?: string;
    password?: string;
    loginFailed?: boolean;
}

export interface Account{
    id: string;
    name: string;
    domain: string;
    breachDate: string;
    addedDate: string;
}

export interface Meta{
    suggestPasswordChange: boolean;
    breachesAccounts: Account[];
}

export interface Auth{
    token?: string, 
    user?: User | {},
    meta?: Meta, 
}