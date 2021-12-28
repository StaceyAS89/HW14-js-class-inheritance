let Timer = function (timer) {
    this.timer = timer;
    this.timeClick = true;
    this.timeShow = new Date();
    this.shortFormat = this.timeShow.toLocaleTimeString([], {
        timeStyle: 'short'
    })
    this.timer.addEventListener('click', () => this.timeClick = !this.timeClick);

};

Timer.prototype.render = function () {
    this.timer.innerHTML = this.getTime();
}

Timer.prototype.getTime = function () {
    return this.shortFormat
}

let BabyClock1 = function (timer) {
    Timer.call(this, timer)
}
BabyClock1.prototype = Object.create(Timer.prototype);
BabyClock1.prototype.getTime = function () {
    this.fullFormatSec = this.timeShow.toLocaleTimeString();
    return this.timeClick ? this.shortFormat : this.fullFormatSec
}
let timer1 = document.getElementById('demo-full-format-sec')
let babyclock1 = new BabyClock1(timer1)
setInterval(() => babyclock1.render(), 250)

let BabyClock2 = function (timer) {
    Timer.call(this, timer)
}
BabyClock2.prototype = Object.create(Timer.prototype);
BabyClock2.prototype.getTime = function () {
    this.fullFormatMsec = this.timeShow.toLocaleTimeString() + `:${this.timeShow.getMilliseconds()}`;
    return this.timeClick ? this.shortFormat : this.fullFormatMsec
}

let timer2 = document.getElementById('demo-full-format-msec')
let babyclock2 = new BabyClock2(timer2)
setInterval(() => babyclock2.render(), 250)