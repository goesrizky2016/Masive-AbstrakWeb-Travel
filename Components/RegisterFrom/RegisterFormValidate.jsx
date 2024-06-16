function RegisterFormValidates(values) {
    
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    const konfirmasipassword_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email === "") {
        error.email = "Email tidak boleh kosong"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email tidak betul"
    }else {
        error.email = ""
    }

    if(values.password === "") {
        error.password = "Password tidak boleh kosong"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Password tidak betul"
    }else {
        error.password = ""
    }
    
    if(values.konfirmasipassword === "") {
        error.konfirmasipassword = "Konfirmasi password tidak boleh kosong"
    }
    else if(!konfirmasipassword_pattern.test(values.password)) {
        error.konfirmasipassword = "Konfirmasi password tidak betul"
    }else {
        error.konfirmasipassword = ""
    }

    return error;


}

export default RegisterFormValidates;