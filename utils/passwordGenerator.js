const generatePassword = (length, includeNumbers, includeSymbols, includeUppercase, excludeSimilar) => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    const similarChars = '0O1Il';
    const uppercase = lowercase.toUpperCase();

    let characters = lowercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;
    if (includeUppercase) characters += uppercase;

    if (excludeSimilar) {
        characters = characters.split('').filter(char => !similarChars.includes(char)).join('');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
};

module.exports = { generatePassword };
