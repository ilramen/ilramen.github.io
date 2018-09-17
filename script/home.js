// 以下为Youtube播放器控制代码
// API文档：https://developers.google.com/youtube/iframe_api_reference
// 载入播放器API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 创建播放列表
var videoList = [
	'C8mslL4eck0',
    'k5kdTneDOQw',
    'pP5Puhl6T4s',
    'cSHYKpbzmHo',
    '1iBCFKC8CMc'
];
// 创建播放器对象
var player;
// 播放器准备就绪事件
function onYouTubePlayerAPIReady() {
    player = new YT.Player('youTube', {
        height: 'auto',
        width: 'auto',
        loadPlaylist: {
            listType: 'playlist',
            list: videoList,
            index: parseInt(0),
            suggestedQuality: 'default'
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
// 视频资源准备就绪事件
function onPlayerReady(event) {
    event.target.loadPlaylist(videoList);
    player.setLoop(true);
}
// 播放状态改变事件
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {}
    if (event.data == YT.PlayerState.ENDED) {}
}
// 以上为Youtube播放器控制代码