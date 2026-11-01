export const loginUser = async (credentials) => {
    return new promise((resolve, reject) => {
        setTimeout(() => {
            if(!credentials.email || !credentials.password) {
                reject("Email dan password harus diisi!");
                return;
            }

            const username = credentials.email.split("@")[0];

            const dummyUserData = {
                name: username,
                email: credentials.email,
                role: credentials.email.includes("admin") ? "admin" : "user",
                login_at: new Date().toISOString(),
            };

            resolve({
                status:200,
                message: "Login Berhasil!",
                user: dummyUserData,
            });
        }, 800);
    });
};