
const player = {
    isInstallAqyExe: false,// 是否安装了爱奇艺客户端
    isCheckedInstallAqyExe: false, ///get_client_ver 是否检测 安装了爱奇艺客户端应用没有
    aqyClientUrlKey: '',
    checkAqyExeInstalled() { //
        var aqyClient_1 = 'http://127.0.0.1:16422';
        var aqyClient_2 = 'http://127.0.0.1:16423';
        var handleComplete = (res, aqyClientUrlKey = 'aqyClient_1') => {
            if (res.data.ver) {
                player.isInstallAqyExe = true;
                player.aqyClientUrlKey = aqyClientUrlKey;
            }
            player.isCheckedInstallAqyExe = true;
        };
        $.ajax({
            url: `${aqyClient_1}/get_client_ver`,
            type: 'get',
            dataType: 'jsonp',
            jsonp: 'callback',
            jsonpCallback: 'flightHandler',
        }).done(res => {
            handleComplete(res, aqyClient_1);
        }).fail(err => {
            console.log(err)
            if (err) {
                $.ajax({
                    url: `${aqyClient_2}/get_client_ver`,
                    type: 'get',
                    dataType: 'jsonp',
                    jsonp: 'callback',
                    jsonpCallback: 'flightHandler',
                }).done(res => {
                    handleComplete(res, aqyClient_2);
                }).fail(err => {
                    if (err) {
                        player.isInstallAqyExe = false;
                    }
                });
            }
            player.isCheckedInstallAqyExe = true;
        })
    },

    playVideo(videoData) { // 播放视频
        if (player.timer) { // 防止多次点击造成计时器干扰
            window.clearTimeout(player.timer);
            player.timer = null;
        }
        if (player.isCheckedInstallAqyExe) {
            if (player.isInstallAqyExe) {
                openAqyPlayer(videoData);
            }
            else {
                downLoadAqyPlayer();
            }
        } else {
            player.timer = setTimeout(() => player.playVideo(videoData), 0);
        }
    },
}


function openAqyPlayer(videoData) { // 调起爱奇艺播放器
    var tvId = videoData.outTvId;
    var url = `qisu://tvid=${tvId};vtype=0;source1="other";source2="other";source3="lenovo";source4="wiselen";start_pos=true;parter=1;`
    $.ajax({
        url: `${player.aqyClientUrlKey}/play?url=${url}`,
        type: 'get',
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'flightHandler',
    })
}
function downLoadAqyPlayer() { // 下载爱奇艺播放器

}


export default player