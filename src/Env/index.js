//TODO: Here we make a Settings to Import a Environment Variable and Export like a Object to Make a more fast the Imports

//? Example how use ENV on Vite

//* VITE_SPACE_ID=123123
//* VITE_ACCESS_TOKEN=1asdasdad
//* VITE_ENVIRONMENT=master

const ENV = {
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
  environment: import.meta.env.VITE_ENVIRONMENT,
};

export default ENV;
