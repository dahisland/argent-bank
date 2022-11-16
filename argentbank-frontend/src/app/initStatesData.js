export const initStateLogin = {
  loginData: {
    remember: false,
    token: null,
  },
  connection: "offline",
  loginStatus: null,
  loginMessage: "",
};

export const initStateProfile = {
  profileData: {
    createdAt: "",
    email: "",
    firstName: "",
    id: "",
    lastName: "",
    updatedAt: "",
  },
  profileStatus: null,
  profileMessage: "",
};

export const initStateSignup = {
  signupData: {
    createdAt: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    updatedAt: "",
  },
  signupStatus: null,
  signupMessage: "",
};

export const initStateAccount = {
  accountData: [],
  accountId: "",
  accountStatus: null,
  accountMessage: "",
};

export const initStateTransactions = {
  transactionsData: [],
  categoryId: "",
  transactionsStatus: null,
  transactionsMessage: "",
};
