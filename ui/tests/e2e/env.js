const MESHERY_SERVER_URL = process.env.MESHERY_SERVER_URL || 'http://localhost:9081';
const REMOTE_PROVIDER_URL = process.env.REMOTE_PROVIDER_URL || 'https://cloud.layer5.io';

const USER_EMAIL = process.env.REMOTE_PROVIDER_USER_EMAIL;
const USER_PASSWORD = process.env.REMOTE_PROVIDER_USER_PASSWORD;

const REMOTE_PROVIDER_USER = {
  email: USER_EMAIL,
  password: USER_PASSWORD,
};
const PROVIDER_SELECTION_URL = `${MESHERY_SERVER_URL}/provider`;
const PROVIDER_TOKEN = process.env.PROVIDER_TOKEN;

if (process.env.CI) {
  const core = require('@actions/core');

  if (!USER_EMAIL && !USER_PASSWORD) {
    core.warning('Using default email and password on auth');
  } else if (!USER_EMAIL || !USER_PASSWORD) {
    core.setFailed("You're either email or password is empty");
  }
} else {
  if (!USER_EMAIL && !USER_PASSWORD) {
    console.warn('Using default email and password on auth');
  } else if (!USER_EMAIL || !USER_PASSWORD) {
    throw new Error('You are email or password is empty');
  }
}

const AUTHFILELOCALPROVIDER = 'playwright/.auth/user-local-provider.json';

const AUTHFILEMESHERYPROVIDER = 'playwright/.auth/user-meshery-provider.json';

export const ENV = {
  MESHERY_SERVER_URL,
  PROVIDER_SELECTION_URL,
  REMOTE_PROVIDER_URL,
  REMOTE_PROVIDER_USER,
  PROVIDER_TOKEN,
  AUTHFILELOCALPROVIDER,
  AUTHFILEMESHERYPROVIDER,
};
