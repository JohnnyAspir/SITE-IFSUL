const videoww = document.getElementById("videoww")
const videodm = document.getElementById("videodm")
const videosn = document.getElementById("videosn")
videoww.addEventListener('mouseover', function () {
    return videoww.play();
})
videoww.addEventListener('mouseout', function () {
    return videoww.load();
})
videodm.addEventListener('mouseover', function () {
    return videodm.play(), videodm.volume = 0.03;
})
videodm.addEventListener('mouseout', function () {
    return videodm.load();
})
videosn.addEventListener('mouseover', function () {
    return videosn.play();
})
videosn.addEventListener('mouseout', function () {
    return videosn.load();
})