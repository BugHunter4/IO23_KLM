/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "bf0aea2586c185e559e4523959bacac7"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.ce328176.css",
    "revision": "50bbd39401067679a0048a0c35705f1a"
  },
  {
    "url": "assets/img/delete.ad3d0174.jpg",
    "revision": "ad3d0174ce81fb20e547c674dd941a40"
  },
  {
    "url": "assets/img/get_2.4fcba0cf.jpg",
    "revision": "4fcba0cff318a5760d89e1094ea6f846"
  },
  {
    "url": "assets/img/get_3.6af484cb.jpg",
    "revision": "6af484cbb28b6fde1af1d2010e0b69fc"
  },
  {
    "url": "assets/img/get_4.be3ad7b7.jpg",
    "revision": "be3ad7b7310dd35b3094b06bc8aafa53"
  },
  {
    "url": "assets/img/get_5.29736ee9.jpg",
    "revision": "29736ee92ec3898e5326f8e81abcb71b"
  },
  {
    "url": "assets/img/get.d7b91f98.jpg",
    "revision": "d7b91f98e0e8dec240d093da4a13e22f"
  },
  {
    "url": "assets/img/patch.ac92fe29.jpg",
    "revision": "ac92fe299003f8af2cdb83ee06270f1f"
  },
  {
    "url": "assets/img/post.9bc89509.jpg",
    "revision": "9bc89509c2b9e81e1931650adc6c51d8"
  },
  {
    "url": "assets/img/put.ea480ee6.jpg",
    "revision": "ea480ee608f2e64f677b7d33d74ef48f"
  },
  {
    "url": "assets/img/relationscheme1.69673898.png",
    "revision": "69673898037fa1027fcbebfb4033053e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/serv_str.a2d1f9e0.jpg",
    "revision": "a2d1f9e0137648872969085699ccd453"
  },
  {
    "url": "assets/js/1.cd8120cd.js",
    "revision": "2bce0aa1947648f3ce6c05cc49f1a818"
  },
  {
    "url": "assets/js/10.ec5d05f5.js",
    "revision": "edaba4e9f2820d432cd580b346b9ad7c"
  },
  {
    "url": "assets/js/13.d8efc8c9.js",
    "revision": "8a1ebcd9106a886d7ad24711c7e7ed8c"
  },
  {
    "url": "assets/js/14.a4bcfaea.js",
    "revision": "95375db9899f9443edcba141c6e06f1b"
  },
  {
    "url": "assets/js/15.8f78fb56.js",
    "revision": "0b40cc567018d1688a8dd6a50b06dc5e"
  },
  {
    "url": "assets/js/16.35b653fe.js",
    "revision": "4061f17629a4792a431ba68ecd8aaf6a"
  },
  {
    "url": "assets/js/17.1d6ee57c.js",
    "revision": "b2ed00d2280b980ed8a6a3c3c5141d66"
  },
  {
    "url": "assets/js/18.0d2bd78a.js",
    "revision": "7e24cd603aa0d97dc4cea35eee0f7433"
  },
  {
    "url": "assets/js/19.90782010.js",
    "revision": "3e6a71e82bb3dbc02fc2a552a4ebef24"
  },
  {
    "url": "assets/js/2.4d40b9bc.js",
    "revision": "177fc568719d56c5325fb0f0084e23d0"
  },
  {
    "url": "assets/js/20.11379410.js",
    "revision": "f8d3e723eaf590f7d3a274f2705b3d7e"
  },
  {
    "url": "assets/js/21.279524ce.js",
    "revision": "afe959b996bb93c92dacf170959ad92c"
  },
  {
    "url": "assets/js/22.dbcd25f7.js",
    "revision": "5b9f82036e706a5a31545d68cb50651e"
  },
  {
    "url": "assets/js/23.655062b9.js",
    "revision": "61d77687081967d747b4636d12eb2372"
  },
  {
    "url": "assets/js/24.867b9c91.js",
    "revision": "63358aa5c5315cb18704b25302cfd4c3"
  },
  {
    "url": "assets/js/25.d949ade8.js",
    "revision": "2ebcbbd5d518e65bb1ce27408870903a"
  },
  {
    "url": "assets/js/26.b290ab6a.js",
    "revision": "12ba1940c7e9d5c1e04fab529b3dfb0e"
  },
  {
    "url": "assets/js/27.7908d6a2.js",
    "revision": "c462520f1f0f1472bc74d38c0c2b72a1"
  },
  {
    "url": "assets/js/28.49e53bb3.js",
    "revision": "9fd45d3c89f284db688c2ba7f6055860"
  },
  {
    "url": "assets/js/29.6b4da6b0.js",
    "revision": "1f9ef0c8dc549530030aa54bc97b517e"
  },
  {
    "url": "assets/js/3.e27c38cc.js",
    "revision": "8b5c5393304f9789a88301b03013f8f0"
  },
  {
    "url": "assets/js/30.1a2aba01.js",
    "revision": "f89ad5ec25c8e465bdaa0284f9e7eff1"
  },
  {
    "url": "assets/js/31.e76f794d.js",
    "revision": "a6fc3884f8951df7b3ab044d70644503"
  },
  {
    "url": "assets/js/32.65bbb698.js",
    "revision": "daaae332d2729fcf1e581d7bb129931c"
  },
  {
    "url": "assets/js/33.7dec9a3b.js",
    "revision": "7a4811d1c0e18dcdf61e1510685e078b"
  },
  {
    "url": "assets/js/34.8578053b.js",
    "revision": "55a66887d4aaebac1329edd36061b784"
  },
  {
    "url": "assets/js/35.aef7d27c.js",
    "revision": "450aea53aa4893a9f5ddd7f432bf208d"
  },
  {
    "url": "assets/js/36.433fd094.js",
    "revision": "71a1215ce02f33c72ba59ee81f4ae3d8"
  },
  {
    "url": "assets/js/37.80379479.js",
    "revision": "149c01d4212f587d8939ab6add97f191"
  },
  {
    "url": "assets/js/38.7d24c3ff.js",
    "revision": "baaf7f9271bca1bdfb270eebe737b13d"
  },
  {
    "url": "assets/js/39.3d3c0bef.js",
    "revision": "f8fef33ef613afbb64b7a4501d8c07d0"
  },
  {
    "url": "assets/js/4.5499ce64.js",
    "revision": "ff34e8ccb9442cfe22d5b81e5c7c91c0"
  },
  {
    "url": "assets/js/41.7613dad4.js",
    "revision": "698b1866ebd2804bf697f2bcd676f5db"
  },
  {
    "url": "assets/js/5.f63e76a2.js",
    "revision": "e419ff6b636fb9b075b7ce255aa381ee"
  },
  {
    "url": "assets/js/6.091647bf.js",
    "revision": "d92c639eb8ea90c1e8252f9dfe0796d5"
  },
  {
    "url": "assets/js/7.66a2d459.js",
    "revision": "78caf509d1cdea893b0b880cd914c45a"
  },
  {
    "url": "assets/js/8.5d0ff7cd.js",
    "revision": "1285baeae0fe888cff4d6db68bb69a51"
  },
  {
    "url": "assets/js/9.370a7bc7.js",
    "revision": "ac226a94abf853bf2cb7c7a5c6285cd3"
  },
  {
    "url": "assets/js/app.57be5413.js",
    "revision": "fd8114a9d1af6c2ad33f028ed0929a85"
  },
  {
    "url": "assets/js/vendors~docsearch.69518f58.js",
    "revision": "92d41eb0d6ad320ec9969b36a4452a7b"
  },
  {
    "url": "conclusion/index.html",
    "revision": "79fa43ea89f34009540019077e7210e5"
  },
  {
    "url": "design/index.html",
    "revision": "e8e2332aa2bad0249de77609bfc9fe0f"
  },
  {
    "url": "index.html",
    "revision": "8b80e69642cf24bc45895624e6dbc7cb"
  },
  {
    "url": "intro/index.html",
    "revision": "b2179cf340dc3da79f7cc0bf5b6702ae"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "910a0c7dbf9fa5fb8e6960d7f1340389"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "6f173382e748d80db40ffc1b0b39bed7"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "36c344c84b43568efc80389328b455d2"
  },
  {
    "url": "software/index.html",
    "revision": "1ad7ec980972d16f441288c633ec8097"
  },
  {
    "url": "test/index.html",
    "revision": "0c556b1026416893701d7915197ff2b1"
  },
  {
    "url": "use cases/index.html",
    "revision": "8aa1aa603f06bea7fcd0f68063de4cb6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
