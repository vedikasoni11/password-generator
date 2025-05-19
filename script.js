const lengthInput = document.getElementById("length");
    const rangeValue = document.getElementById("rangeValue");

    lengthInput.addEventListener("input", () => {
        rangeValue.textContent = lengthInput.value;
    });

    const password = document.getElementById("password");
    const generate = document.getElementById("generate");

    generate.addEventListener('click' , () => {
        const length = lengthInput.value;
        const newPassword = generatePassword(length);
        password.value = newPassword;
    })

    function generatePassword(length) {

        const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*(){}1234567890"
        let password = '';

        for (let i = 0; i < length; i++) {
            const randomIdx = Math.floor(Math.random() * charSet.length)
            password += charSet[randomIdx];
            
        }

        return password
        
    }
