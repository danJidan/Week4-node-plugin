import chalk from 'chalk';
import cowsay from 'cowsay';
import figlet from 'figlet';

const nama = 'Muhammad Zidan Azzaki';
const nim = 'F1D022080';

console.log(chalk.blue(chalk.bold(chalk.underline(nama))));
console.log(chalk.yellow(nim));

const motivasi = 'ingat uia uia iu, dan jangan lupa bahagia';
console.log(cowsay.say({
    text: motivasi,
    e: "oO",
    T: "U "
}));

const motivasireal = 'tidak perlu merasa spesial. kita hanya manusia, bukan mie ayam';
console.log(cowsay.say({
    text: motivasireal,
    f: 'kitty',
    e: "^^",
    T: "U "
}));

figlet(nama, function(err, data) {
    if (err) {
        console.log('Ada yang salah...');
        console.dir(err);
        return;
    }
    console.log(chalk.green(data));
});