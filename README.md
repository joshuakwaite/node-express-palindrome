# Node Express API

## Startup

`npm i` && `npm start` or `npm run dev`

## Endpoints

All endpoints below are listed relative to the path `/`.

### GET `/health`

Health check endpoint.

### GET `/palindrome`

Check whether a word is palindrome or not. Query parameters:
Find client entities by name and/or labels. This request supports property selection. Query parameters:

- `string` (required): The string to evaluate whether the given word is a palindrome or not.

- `permutation` (optional, defaulted to 'false'): Should be true or false; a condition to determine if any permutation of the string should be evaludated as a palindrome.

## Collaboritive Interview Link

- [JSFiddle Palindrome Permutation](https://jsfiddle.net/kalewaite/d6zsyaoq/)
