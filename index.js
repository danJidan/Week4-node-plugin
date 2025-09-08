import chalk from 'chalk';
import cowsay from 'cowsay';
import figlet from 'figlet';
import dayjs from 'dayjs';
import 'dayjs/locale/id.js';
dayjs.locale('id');
import boxen from 'boxen';

const nama = 'Muhammad Zidan Azzaki';
const nim = 'F1D022080';

const tanggal = dayjs().format('dddd, DD MMMM YYYY HH:mm:ss');
console.log(chalk.magenta(`Sekarang: ${tanggal}`));

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
        console.log('kayak yang salah...');
        console.dir(err);
        return;
    }
    const box = boxen(
        chalk.green(data),
        {
          padding: 1,
          margin: 1,
          borderStyle: 'round',
          borderColor: 'cyan',
        }
      );
    
      console.log(box);
});