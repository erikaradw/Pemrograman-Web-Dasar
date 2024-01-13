const jamKerja = document.querySelector('.jamKerja')
const tarifPerjam = document.querySelector('.tarifPerjam')
const totalGaji = document.querySelector('.gajiBulanan')

function promptData(){
    const promptJam = parseFloat (prompt("Masukkan jumlah jam kerja per minggu :"))
    const promptTarif = parseFloat (prompt("Masukkan tarif per jam :"))

    if(promptJam > "40"){
        totalGaji.innerText = jumlahGajiLembur(promptJam, promptTarif)
    }else{
        totalGaji.innerText = `Rp. ${jumlahGaji(promptJam, promptTarif)}`
    }
    jamKerja.innerText = promptJam
    tarifPerjam.innerText = promptTarif 
}

promptData()

function jumlahGaji(jam, tarif){
    return jam * tarif
}

function jumlahGajiLembur(jam, tarif){
    return (jam - 40) * 0.5 * tarif
}