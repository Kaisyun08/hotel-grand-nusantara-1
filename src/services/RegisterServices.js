export const registerUser = async (formData) => {
    await new promise((resolve) => setTimeout(resolve, 1500));
    console.log("(Simulasi) Data diterima : ", formData);

    if (!formData.email || !formData.password) {
        throw new Error("Email dan password wajib di isi!")
    }

    return {
        status: "Succes",
        message: "Registerasi berhasil"
    };
}