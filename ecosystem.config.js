module.exports = {
  apps : [{
    name: 'dev-cherry-lunch',
    script: './dist/src/app.js',
    env: {
      NODE_ENV: 'development'
    }
  }]
};
