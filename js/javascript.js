const pilihMenu = document.getElementById('pilihMenu');
const subNutrisari = document.getElementById('subNutrisari');
const pilihRasaNutrisari = document.getElementById('pilihRasaNutrisari');

pilihMenu.addEventListener('change', function () {
    if (this.value === 'Es Nutrisari') {
        subNutrisari.classList.remove('d-none');
        pilihRasaNutrisari.setAttribute('required', 'required');
    } else {
        subNutrisari.classList.add('d-none');
        pilihRasaNutrisari.removeAttribute('required');
        pilihRasaNutrisari.value = "";
    }
});

document.getElementById('formTeh').addEventListener('submit', function (e) {
    e.preventDefault();

    const nama = document.getElementById('namaPembeli').value;
    let menu = document.getElementById('pilihMenu').value;
    const jumlah = document.getElementById('jumlahGelas').value;
    const ukuran = document.getElementById('pilihukuran').value;

    if (menu === 'Es Nutrisari') {
        const rasaNutrisari = pilihRasaNutrisari.value;
        menu = `Es Nutrisari (${rasaNutrisari})`;
    }

    const nomorPenjual = "6285764900632";
    const teksPesan = encodeURIComponent(`Halo Penjual Es Teh Solo yang Gantenk >_<, saya ingin memesan:\n\n` +
        `• Nama: ${nama}\n` +
        `• Varian: ${menu}\n` +
        `• Ukuran: ${ukuran}\n` +
        `• Jumlah: ${jumlah} Gelas\n\n` +
        `Mohon segera diproses, terima kasih!`);

    const linkWA = `https://wa.me/${nomorPenjual}?text=${teksPesan}`;
    window.open(linkWA, '_blank')
});

