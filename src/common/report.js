/**
 * Created by Lzhang on 2018/1/3.
 */


const REPORTER = (function () {
    const lenovoId = Cookies.get('lenovoId');
    const vipId = VIP_INFO.isVip == 0 ? lenovoId : '';
    const cookieDeviceId =  Cookies.get('deviceId');
    let deviceId;
    if (cookieDeviceId) {
        deviceId = cookieDeviceId;
    } else {
        deviceId = uuid(); // 作为游客模式的唯一标识符
        Cookies.set('deviceId', deviceId, { expires: 365 * 10 });
    }
    const appId = '';
    const appVersion = '1.0';
    const baseParams = {
        vipId: vipId || '',
        lenovoId: vipId ? '' : lenovoId,
        deviceId: vipId || lenovoId ? '' : deviceId,
        appId,
        appVersion,
        appChannel: 'pc',
        osType: 'windows7',
        deviceStyle: 'thinkpad',
        ipAddress: returnCitySN["cip"],
        source: 'lenovo'
    };
    const reportApi = {
        'event': '/log/event',
        'page': '/log/page',
        'player': '/log/player',
    };
    function uuid() {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";

        var uuid = s.join("");
        return uuid;
    }
    function report(options) {
        const reportType = options.reportType;
        delete options.reportType;
        const params =  {
            ...baseParams,
            actionTime: new Date().getTime(),
            ...options,
        };
        $.ajax({
            headers: {
                "content-type": "application/json"
            },
            url: reportApi[reportType],
            type: 'post',
            data:JSON.stringify({encrypt: Encrypt(params)}),
        });
    }
    return report;
})()
export default REPORTER