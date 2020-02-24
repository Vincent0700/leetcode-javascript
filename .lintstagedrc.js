module.exports = {
    '*.js': ['eslint --fix', 'prettier --write'],
    '*.{html,json}': ['prettier --write'],
    '*.{css,scss,less}': ['prettier --write']
};
