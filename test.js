let yas = +prompt('Yasinizi qeyd edin!!!!!!!');

if (yas >= 18) {
    netices = 'Siz Esgerliye Gede Bilersiz!';
} else {
    netices = 'Siz Esgerliye Gede Bilmessiz! Daha boyumeniz lazimdir!';
}
document.getElementById('esiger').innerHTML = netices
