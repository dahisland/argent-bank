/**
 * Object containing initiale structure for data login (initState)
 * @constant
 * @type {object}
 */
export const initStateLogin = {
  loginData: {
    remember: false,
    token: null,
  },
  connection: "offline",
  loginStatus: null,
  loginMessage: "",
};

/**
 * Object containing initiale structure for data profile (initState)
 * @constant
 * @type {object}
 */
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

/**
 * Object containing initiale structure for data signup (initState)
 * @constant
 * @type {object}
 */
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

/**
 * Object containing initiale structure for data account (initState)
 * @constant
 * @type {object}
 */
export const initStateAccount = {
  accountData: [],
  accountStatus: null,
  accountMessage: "",
};

/**
 * Object containing initiale structure for data transactions (initState)
 * @constant
 * @type {object}
 */
export const initStateTransactions = {
  transactionsData: [],
  accountId: "",
  transactionsStatus: null,
  transactionsMessage: "",
};
