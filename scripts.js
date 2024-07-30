function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}

const form = document.getElementById('transaksiForm');
const transaksiList = document.getElementById('transaksiList');
const makananSelect = document.getElementById('makananSelect');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const alamat = document.getElementById('alamat').value;
    const makanan = makananSelect.value;
    const jumlah = document.getElementById('jumlah').value;
    
    const transaksiItem = document.createElement('div');
    transaksiItem.innerHTML = `<p>Nama: ${nama}</p>
                               <p>Alamat: ${alamat}</p>
                               <p>Makanan: ${makanan}</p>
                               <p>Jumlah: ${jumlah}</p>
                               <hr>`;
    
    transaksiList.appendChild(transaksiItem);
    
    form.reset();
});

const images = document.querySelectorAll('#Home .clickable-image');
images.forEach(image => {
    image.addEventListener('click', () => {
        const makanan = image.getAttribute('data-makanan');
        
        showSection('Beli');
        makananSelect.value = makanan;
    });
});
