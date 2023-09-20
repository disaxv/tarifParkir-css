document.getElementById('parking-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const jamParkir = parseFloat(document.getElementById('jam-parkir').value);
    const jenisKendaraan = document.getElementById('jenis-kendaraan').value;
    let tarifPerJam = 0;

    if (jenisKendaraan === 'motor') {
        tarifPerJam = 2000; // Ganti dengan tarif motor per jam yang sesuai
    } else if (jenisKendaraan === 'mobil') {
        tarifPerJam = 5000; // Ganti dengan tarif mobil per jam yang sesuai
    }

    if (!isNaN(jamParkir) && jamParkir >= 1 && tarifPerJam >= 1) {
        const totalTarif = jamParkir * tarifPerJam;
        document.getElementById('result').textContent = `Tarif Parkir untuk ${jenisKendaraan}: Rp ${totalTarif}`;
    } else {
        document.getElementById('result').textContent = 'Masukkan data yang valid (minimal 1 jam dan jenis kendaraan yang sesuai).';
    }
});