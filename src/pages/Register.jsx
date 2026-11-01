import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from '../services/RegisterServices';

function Register(){

    const navigate = useNavigate();
    const[loading, setLoading] = useState(false);
    const today = new Date().toISOString().split('T')[0];

    // Membuat variabel form untuk register
    const [ form, setForm ] = useState({
        email : '',
        password : '',
        name: ''
    });

    // Membuat variabel error untuk terjadinya hal error
    const [ error, setError ] = useState('');

    // 
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            console.log('Data register yang dikirim : ', form);
            // await registerUser(form);
            await new promise((resolve) => setTimeout(resolve, 1000));
            alert('Selamat anda berhasil membuat akun');
            navigate('/beranda');
        }catch(error){
            console.log(error);
            alert('Gagal register');
        }finally{
            setLoading(false);
        }
    }

    return (
        <section className="flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
                    Register
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Masukkan Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Masukkan Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nama
                        </label>
                        <input
                        type="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Masukkan Nama Anda"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                        />
                    </div>

                    <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors disabled:bg-blue-300"
                    >
                        {loading ? 'Memproses...' : 'Daftar'}
                    </button>

                    {/* <p className="text-xs text-center text-gray-500 mt4">
                        Sudah punya akun? {" "}
                        <Link to="/login" className="text-blue-600 font-semibold hover:underline">
                            Login Disini!
                        </Link>
                    </p> */}
                </form>
            </div>
        </section>
    )

}
export default Register;