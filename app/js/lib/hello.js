function hello() {
  if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
    var args = ['\n %c by Surkov Dmitriy %c https://github.com/mastdiekin %c %c ♥ ♥ ♥ 1.0.0 \n\n', 'border: 1px solid #000;color: #fff; background: #07a2cf; padding:5px 0;', 'color: #fff; background: #1c1c1c; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];
    window.console.log.apply(console, args);
  } else if (window.console) {
    window.console.log('by Surkov Dmitriy - https://github.com/mastdiekin');
  }
}
module.exports = hello;
