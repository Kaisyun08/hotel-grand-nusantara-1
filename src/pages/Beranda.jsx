import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Beranda() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Otomatis mengambil nama user dari localStorage saat login
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Berhasil keluar dari akun anda.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800">
      
      {/* 1. NAVBAR */}
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-white/90 px-8 py-4 shadow-sm backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white shadow-md">
            H
          </div>
          <span className="text-xl font-extrabold tracking-wide text-gray-900">
            Grand Nusantara
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden gap-8 text-sm font-semibold text-gray-600 md:flex">
          <Link to="/" className="text-blue-600">Beranda</Link>
          <a href="#kamar" className="transition hover:text-blue-600">Kamar</a>
          <a href="#fasilitas" className="transition hover:text-blue-600">Fasilitas</a>
          <a href="#kontak" className="transition hover:text-blue-600">Kontak</a>
        </div>

        {/* Profile / Actions */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="hidden text-sm font-medium text-gray-600 md:inline">
                Halo, <strong className="capitalize text-gray-900">{user.name}</strong>
              </span>
              <button
                onClick={handleLogout}
                className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-100"
              >
                Keluar
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <Link to="/login" className="rounded-lg px-4 py-2 text-xs font-semibold text-gray-700 hover:text-blue-600">
                Masuk
              </Link>
              <Link to="/register" className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-md hover:bg-blue-700">
                Daftar
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* 2. HERO SECTION BANNER */}
      <section className="relative flex min-h-[550px] flex-col justify-center bg-cover bg-center px-8 py-20 text-white bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945')]">
        <div className="absolute inset-0 bg-slate-950/60" />

        <div className="relative z-10 mx-auto max-w-4xl text-center space-y-6">
          <span className="inline-block rounded-full bg-blue-500/30 px-4 py-1.5 text-xs font-semibold text-blue-200 border border-blue-400/30">
            Kemewahan Berbalut Kenyamanan
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl leading-tight">
            Selamat Datang di <br /> Hotel Grand Nusantara
          </h1>
          <p className="mx-auto max-w-2xl text-base text-gray-200 md:text-lg">
            Nikmati pengalaman menginap tak terlupakan dengan pemandangan menakjubkan, fasilitas kelas dunia, dan pelayanan terbaik khas Nusantara.
          </p>
          <div className="pt-4">
            <a href="#kamar" className="inline-block rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700 active:scale-95">
              Jelajahi Kamar
            </a>
          </div>
        </div>
      </section>

      {/* 3. SECTION PILIHAN KAMAR */}
      <section id="kamar" className="mx-auto max-w-6xl px-8 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Pilihan Kamar Favorit</h2>
          <p className="mt-2 text-sm text-gray-500">Dirancang untuk kenyamanan istirahat Anda</p>
        </div>

        {/* Grid Kartu Kamar */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          {/* CARD 1 */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32"
              alt="Deluxe Room"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-bold text-gray-800">Deluxe King Room</h3>
              <p className="text-xs text-gray-500 line-clamp-2">Kamar luas dengan kasur ukuran King, pemandangan kota, dan fasilitas modern.</p>
              <div className="flex items-center justify-between pt-2">
                <div>
                  <span className="text-lg font-bold text-blue-600">Rp 850.000</span>
                  <span className="text-xs text-gray-400"> /malam</span>
                </div>
                <button className="rounded-lg bg-gray-900 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-blue-600">
                  Pesan Sekarang
                </button>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
              alt="Executive Suite"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-bold text-gray-800">Executive Suite</h3>
              <p className="text-xs text-gray-500 line-clamp-2">Suite mewah dilengkapi ruang tamu terpisah, bathtub, dan akses lounge eksekutif.</p>
              <div className="flex items-center justify-between pt-2">
                <div>
                  <span className="text-lg font-bold text-blue-600">Rp 1.450.000</span>
                  <span className="text-xs text-gray-400"> /malam</span>
                </div>
                <button className="rounded-lg bg-gray-900 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-blue-600">
                  Pesan Sekarang
                </button>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427"
              alt="Presidential Suite"
              className="h-48 w-full object-cover"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-bold text-gray-800">Presidential Suite</h3>
              <p className="text-xs text-gray-500 line-clamp-2">Pengalaman menginap paling eksklusif dengan jacuzzi pribadi dan pelayan 24 jam.</p>
              <div className="flex items-center justify-between pt-2">
                <div>
                  <span className="text-lg font-bold text-blue-600">Rp 3.200.000</span>
                  <span className="text-xs text-gray-400"> /malam</span>
                </div>
                <button className="rounded-lg bg-gray-900 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-blue-600">
                  Pesan Sekarang
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="border-t border-gray-200 bg-white py-8 text-center text-xs text-gray-500">
        <p>© 2026 Hotel Grand Nusantara. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default Beranda;