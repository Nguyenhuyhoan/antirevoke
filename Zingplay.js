var domains = {
    "ocsp.apple.com":1,
    "gdmf.apple.com":1,
    "mesu.apple.com":1,
    "swscan.apple.com":1,
    "appldnld.apple.com":1,
    "world-gen.g.aaplimg.com":1,
    "ocsp.digicert.com":1,
    "crl.apple.com":1,
    "gsp-ssl.ls.apple.com":1,
    "configuration.apple.com":1,
    "iadsdk.apple.com":1,
    "www.gdmf.apple.com":1,
    "ppq.apple.com":1,
    "ocsp.int-x3.letsencrypt.org":1,
    "appldnld.apple.com.akadns.net":1,
    "appldnld.g.aaplimg.com":1,
    "mesu-cdn.apple.com.akadns.net":1,
    "mesu-cdn.origin-apple.com.akadns.net":1,
    "mesu.g.aaplimg.com":1,
    "gdmf.apple.com.akadns.net":1,
    "iadc.qwape.com":1,
    "iadsk.apple.com":1,
    "configuration.apple.com.akadns.net":1,
    "xp.apple.com":1
};
 
var proxy = "SOCKS5 127.0.0.1:1080; SOCKS 127.0.0.1:1080;";
 
var direct = 'DIRECT;';
 
function FindProxyForURL(url, host) {
    var lastPos;
    do {
        if (domains.hasOwnProperty(host)) {
            return proxy;
        }
        lastPos = host.indexOf('.') + 1;
        host = host.slice(lastPos);
    } while (lastPos >= 1);
    return direct;
}
