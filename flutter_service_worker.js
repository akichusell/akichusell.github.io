'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "a9e110fb58d625e29be1eca8df944a08",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "03f9bf8c6bd39a5f0be7ac20178111df",
".git/fork-settings": "d8ffd01838c8754d96f79fa7e5057871",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "4208cbad10c1875d4e239ccd236a6818",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4022e8766374f00aa30e9f3e930953d0",
".git/logs/refs/heads/main": "8b0221a8bbfa5e3011d25e405b9e55da",
".git/logs/refs/remotes/origin/HEAD": "e61812c57e73714978aabc20abdd24b9",
".git/logs/refs/remotes/origin/main": "8675d7dcfd6cd0766220f70c0adbe1b0",
".git/objects/01/1a4f88e7bd677313acb47996a0fc12f412607a": "c716e68feacfe88f57839312d9d291d7",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/05/3b7f44c133a259d2303e7603c6fb46f7950aee": "c26e9973973c8c1c5be6e21936e864a5",
".git/objects/06/50ea49f1450721c151c2bda4a73d792b36c95d": "87dcf1536cc2b0d537cdc989d5b5cd7b",
".git/objects/0a/889a8ebef5557443e3ab065cc9dc50dc8d0e11": "1eccb75f75ccbe2ed8695acc2b276d30",
".git/objects/0a/e3d5a9dc77f4475a3fb3cdfb1808c2aee5d11c": "9c057ac8c7dc8e91f81744b3aa9a6017",
".git/objects/0a/f3ea76afb4164f4a8c8864474f3cbe180bad7c": "40432f3d0af62f9313f8a6555f70be55",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0d/83d017b7bbf9c57d0ecc442e0b61ab014b2b0e": "9d51c37b914925db18f7f4ef3412b531",
".git/objects/0d/a0481af5398f9b63f4b744d704370bf1b68010": "ba5f71085e4f5376d094674bbb38c20b",
".git/objects/13/deef330704343ecb12b7aaeb3c6062512b0e9c": "698767e9149c54e5164b80b5a60e3c81",
".git/objects/15/3d8127ad35171f027dc5f2a4ae9bbd1c7a34d0": "02d276c488ad660a0597323ab3ba2614",
".git/objects/19/420c07c7330c98357bbf6156e2e8debb478a24": "71cbdef6defc4b2c73783263578cec2a",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/1c/6b46ddaccc532a139f55732f8fccd467edd4b2": "ed9a7fc65b22a07dfd65e75c3b5a1578",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/21/4d01a212b52beb66d11ff4d88b8143aac3b40e": "19b54b6ce96b05553728225e56e83272",
".git/objects/22/5b2652f62c32bbffbade352fc6b0def46cfa20": "4c35a1969c912344f0ac97c9a9577f01",
".git/objects/24/cac773f6c19058a2d6966f7f9189d6687adfae": "954cb7d94cce7346f22fdeaccf208f06",
".git/objects/24/ed4cad9df67aa0f9bac78262e8e5e5062decc8": "586b0e769497f78e11cad62ee7dfa204",
".git/objects/28/9b0897bb1c158a75d6a7f3b30d6ae7e43b18bf": "44cbf98a6fd16952bdc4e25e04956780",
".git/objects/2c/c6799f6cdf9ba15ae56a5277935acfb342a64f": "a78cb7095938176c05933ef543fc4d5e",
".git/objects/2d/ec46a36e4f0f04fd43efccb3a9cb386292b3ee": "57e0668c2dfdb1219521fcae9f2ecdf9",
".git/objects/34/7032c33f0fa4e9c0445345011ce5f96ca49adb": "750dc97033321c95d5271a3820b56e76",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/9f61c141202b463778a1b208306441dd9804be": "61648fcc84198463580390429f806860",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/12e6c798ad1228a3b56f6df63b684045ccb74b": "9aa5977575d55867a487147624c164d3",
".git/objects/3e/b3acb9fd4d6effc5990ca7a2a4fc257a45d0c9": "aa18bb478b3bb52d38bcd0960a83fbe3",
".git/objects/41/e9d5dd9f8c949ab3baf5f7bb51985a82f80378": "7c8657106218709cda55748e1c41c08e",
".git/objects/42/a8667dff007091b25011abfb272793cc859525": "b2eb8dc597772abd8cce866c08574856",
".git/objects/43/5302a76bc345dd5709fcc68f5166d3da34442e": "d77e37284519b9aa698a673b8d695a5a",
".git/objects/43/6ab463e9d701fda57cbc21eb2558b445318b08": "7ad8b74afa352a8c43f6f114e858ff66",
".git/objects/44/b48137c0f6d39433915082dad4571794064d73": "30c6cac3ec5f1efcae9c6264f690174a",
".git/objects/44/fcd22d2680bc7ef3658569a4c6871976f2e0cb": "43cce7d9ac1889e9e61acac77cc11e14",
".git/objects/46/084a771724ed343721f0ec9263924ab34e9007": "0176be7c9b0f45c89424b19dafb7462b",
".git/objects/47/eb3afbc85f39a51d253e5fa836a3cbb9bec5af": "595dcd2c061fea4d06d02baeda5ed82f",
".git/objects/4d/5a4cf10f6d972d61de3aa148c675cffa115c56": "d045c180c8d097816c013065355b7e99",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/53/b05e362f51dc91456c1e8bbb7d630766b235e5": "3861b98f90f68d59935757be10fb02c5",
".git/objects/54/e6ce7abc0ddb4cdf185a125ecedd3a8ad9fe03": "2b027a2a7826c81213b287a2be42d55b",
".git/objects/57/4a5493848abc59d8490c73bde479591fa33ba7": "748da43d26d46950b84faebfae1bfaa8",
".git/objects/57/a6a13ee33b1d4c19b7cf937400401b3c3e4dc3": "576e332fa046f48be161325b8b0b97e5",
".git/objects/5b/659c42946968af068cad7cb11e800d150b06a4": "d6f22bd52ffe4337bd21fe99efbbb26a",
".git/objects/5f/0ad57cea9d4b884c6cd912304367a9021ebbc5": "cd08871c08755ca968faf126c5349983",
".git/objects/60/57b21bee3195b44d585532bae730686543d5a9": "e1f6482a63e2a48ae85d92a0ac972062",
".git/objects/60/7d842fc15c58644a843bc1e3df1ee7c3cfe429": "3412c209e83e6946820773c3d50480b7",
".git/objects/61/7ea32d715b80405034c4e6eda7a35332e5177c": "db3b382004bbfc63293267cfa4b75a0f",
".git/objects/62/042ad2f688dc831f9fa5c318493a099547ba7f": "d3da74aed1f78f2445dbf528b2ed6f83",
".git/objects/62/9e46cd42e0008d914cf75abf8ad84ab303b2f3": "f46c384d41473b03b62ac947c6a5d855",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/64/e7d40f8e1e6c0e8df1c31d5b9a482ebad3b186": "a10c2370cf03054ce6d5617cb40a3fe7",
".git/objects/65/8280d878eef374d7f5f24375c1c259f26ffb29": "21558cd7f39015c9622b2d4df01a27ac",
".git/objects/6c/0f4743b490941b8d819d87a3d352325f90dc2d": "f7f268fcbe4e192d5c9ab3f1cbd46a0b",
".git/objects/6c/d52f66fcc349c1a353b41337dbd13053422b9d": "73536a9a0ac9936bb96db5a8d072be74",
".git/objects/72/fc8694a8910980fa8325d4514520d5c1d3b08f": "c0fa10434011a26b14b31a3e6e66c62a",
".git/objects/75/c0d0507e7076e6b9f493321001c0229cdf0d0f": "ac62656c64485672d8816766cd9ff5f6",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/7a/67514efb35f388550aba865cd753c795b85198": "73dbd716e2c528379a5344d374ea3e14",
".git/objects/7b/a4de1d79f6e64c8fff6eb6c81e7d57deeba258": "2a20cb4ddd01e6c77891615cbe629618",
".git/objects/81/11b0ef16c235893daf02045bbe7729373290de": "b82c25af14ac3d3ba0af064c610f0630",
".git/objects/82/085a01ffda6ab6a235866bd4e6dde4d54ba2cd": "310e0ac24ac48c1a9ddd3a15263af8d1",
".git/objects/82/a7834dd1c2bb3b09f66e9506fbc38b0c977db8": "ac11a5788dab21a03a3dc448b00ccdf7",
".git/objects/84/50e9594dae3c42a9a957565080b254e3a45aae": "6d0b9ed58b2a3d4a766c5373cd527f8c",
".git/objects/84/b02c73c3eb3968a678037a1ee70f3c304ed87c": "c7114b674e23803ba3830609d70a052e",
".git/objects/85/e49d252142784fe19d9d17912ba948a7b48398": "ca7157659931a05e1a9e09cf775a23e5",
".git/objects/88/b7e72f78b11e91521ab185dc3f0b4a147f6ade": "8ef947e5312998c7d3bb4b6ccbc514b8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/466a6a74af248169cf3c9a6f786be8bcf7f128": "d699231821bcbac52b88075b5c6d4f97",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c7bbb8caeae72722923420855e013f1ce3e954": "c07ff158f491c7e848a652edc37317d0",
".git/objects/8d/c17743241b8c555a32013f9ae146c638d556f1": "6923861b9f16315e7f6b86a71ee01fec",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/90/e58aa94b88c89ceb99260b23898e86ccf59c4f": "e1112c7774fcb8bfaf24753d36d6b0da",
".git/objects/92/67dfd33dffefbfe2f4e9de5025e74d1bdfb6bd": "aa23d320dfb0dd9bdffc426ad9b7d5fc",
".git/objects/93/e90ac8bea8b3540a79e3ab546f66f12950c795": "ec5e6a08aa53701f6d423375baa0c945",
".git/objects/99/d8a92c9bc73daef7f12544578fc576397ea8fc": "a17ccee0d94e1410bcaa1c578ab3320c",
".git/objects/99/ee69e0e252b1743ef682213ebc41c2ad490969": "93bd898d67272439cf613f820bfd5cfe",
".git/objects/9b/5a850e2e06f982f226c9ae72509cba90a5ebd2": "e6334abbfa1391bd2dded9b90b81791e",
".git/objects/a2/ea65d7291308b883401a1c33369e04c58be31d": "d94c6a1eb9aeefebe28013967edea8b4",
".git/objects/a6/ebc410c2587d80868258499a01a591b39bf1a2": "47ff311bcad2d3d09a3e74fb03bc2ca9",
".git/objects/a8/e6d3de936e762b37e68941b0b082c0da8c8c29": "3e8ac34de290ec541132eb1aaeeb4bcd",
".git/objects/ab/989f9dd6a849654506ee9e809728ec90dd9a7d": "1a9c9b246f00830d2cc7de8c063e62af",
".git/objects/ac/853305169bd42455a97b0847701df9a902a2b6": "9dc589b2baebfb692142d83f9d5e46cd",
".git/objects/ac/e0fc6220139f8d731987ddfe215c8920be1e69": "5444284b0fbb8fcce55d89142162a511",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ae/dcc52ca1fc9f1cf654809f01a3379eeace1b23": "ed00273b85228cc9b3464fd2473ec1b0",
".git/objects/af/bef5c56b19b2ea58aa82b16b252c2330fbbe6d": "4b01eaaee0a168ef176650b5b0aef93b",
".git/objects/b0/5a40876a3f16ab20ad357674e808e72d984e7a": "437e681115a2a12fa29ae2cb98752043",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/bf6120d91dc58a570e352a70aaccd512bf1b56": "e407dfc43645824f9bfd1cc26b7e26f8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/2b9373b1c2d29a7bcc9ba5d9d2e6a3f0b157e7": "959911dd05f1c72e49252c7b105053d0",
".git/objects/b9/62ba763de41657d8deac6c177d6eb7685993e8": "5dc153b546d253f7226f3fa1f08b76c5",
".git/objects/b9/a4ad3a030ca7003f7181b6bd6dea1f81cc37fe": "9349bee0837e6593c8d6e66ceb8d369f",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/2b3a9b0988b197b572f49351aa027a2b4ef4eb": "c8c37da4c9c5b1d34f27aa2a83fa3f67",
".git/objects/bd/dbf48b530f1c4e3e78f278422ed618081fd1d2": "b827384486a2720cb0ee1a44e5e6f4ca",
".git/objects/bf/0b2b30ec768be4076c55c5c89c800a3542cb05": "4d8821eb76a81290222b2e1954bb528d",
".git/objects/bf/dc12d3b8e28c9cdce7e14fafed045d6e8d7f47": "77e062bdb365fe24821b69d6610204fc",
".git/objects/c0/9cc488f4ae6cafb75f9f03efef50b116ea4705": "9e1b8e20de36b5673cc9bfff1efcf332",
".git/objects/c5/114d0ed3956cae37a28541795b769059886453": "b45b12d4361888bad6e4813207d0823b",
".git/objects/c6/0d9686e18758fabd628c0b3d4384e4f0bb6866": "3afcc3d1775fee1eb7b86e69b1a2a326",
".git/objects/c6/bda9b99c5dab593158c564f8bfabc2c1eb4cac": "4c6a3f8748995dae86107a7872af4ca6",
".git/objects/c8/16af30e4be6dba6a98966e28978717c9b898f7": "1aadb6b957ad74d572a5a0fb9bdfbcc3",
".git/objects/c8/5a7ecbee4a2106331bfa9db074ba7833c027ac": "fb30b49326fbbcd64f5e830c0a6d54a5",
".git/objects/cc/c8da91e5d56ee8ae974ed376d26391a6433986": "3318e6652b39a598f629c8801765c46e",
".git/objects/cf/27cc3187880cfd18a2276896a0352afeece2de": "e2cd4004025eafcf6af437246e85b952",
".git/objects/d2/0df378dd7ca45f3689347a90833598f070daa2": "1701b3052cf0d67a39732554a4993b5e",
".git/objects/d2/418d51fb832583413d57ad88c09b0b2ed88350": "2c8f5a93ca6faf8ade3ec02bab524c83",
".git/objects/d2/b40b8d3c0ee3c356a47d45320ad916a8960154": "9319f900fa3e8a3b0cfd379c31548554",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/bfcb2632a2e35c867159ba0f323704f4b62793": "5259794bcadee530fadf6b3852116ed3",
".git/objects/d6/3f4a9be1609f1e4828f7862c316cd4e93fbaeb": "f4e1372d1b8aad6c14599280c9fb8157",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/20a3b31c551d0a2ba1e743e3e66083fc64da54": "6f7a73333dd505fd9706450e5d5a4f72",
".git/objects/dc/2072867a9a6eb42d2e96537f61ea1a0b796291": "55b50237b104fc8546fe68bdbb418851",
".git/objects/dc/83794028329b42cc7326eac5f66519729fa84c": "b42306d59de87fae4901ef093d3b740b",
".git/objects/dd/eb1ec2b1878a78b5a2a788e29e1cd941c90576": "92c90ff036a8c20908090929a2a35cff",
".git/objects/e2/31e87f2c779a5bfd45bf2b7be2d2f202112d7d": "91c4f8246c58a0b1edfaecdfc7ef5c61",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e8/701d78975c50947104d0111f68f9ae3e16a0dc": "c053e7ff72b851f86681f81b17a0e44a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/182e63499a9a03b3116bee7417ffe6b61f3dea": "62f8796dd7f9c845293c0757d41d31fd",
".git/objects/f2/5894f833dd414f75b6a38cfd7b2cefd3279d43": "515c7a34a79646f1d7b2e53e6c888ced",
".git/objects/f3/10cbd51d90000e51cafc82ec73de11d5410aae": "68eb5158d1fc892b80030ce72ab706b3",
".git/objects/f6/802216f2dc619d27c1876c6a03434b4d39844b": "737915c3b3408f00d001cbc4f748b090",
".git/objects/f8/1de685c32de36b4e92ed0f584af743c59213fb": "42727a62026c8a5e9229936d85a2e76b",
".git/objects/f9/9e99a4f233f1d2fc2c643897d482fef789f28c": "08805faf6a37c7470c9ca4b21182688b",
".git/objects/fa/9983dd2a69c199e728d6f7579f3746c3a481a7": "09fc92d3fe72a0e7bae07c1dbf6bd367",
".git/objects/fd/037cdfacb8e0ef7e8b3021b1e6e1f48e316598": "f2d106e57ad1093740b91b3c058b0f85",
".git/objects/fd/fef4421422c9a8f48f7144d16c1dc874677908": "5ba002f5b922ca718595906c6c8f8f08",
".git/ORIG_HEAD": "bdfd5a7c412f23354349d0f4a99cef44",
".git/packed-refs": "f36447570aaae49e79a1070485f9ed78",
".git/refs/heads/main": "8c1c537615bead4453ccea8cbc77a5b0",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "8c1c537615bead4453ccea8cbc77a5b0",
"assets/AssetManifest.bin": "ccd19ee898fbd54d0f76178eb852c621",
"assets/AssetManifest.json": "1320cf0175af4f8027ccae4cdf8d0161",
"assets/assets/image/arrowonly_left.svg": "923044bf6212c65ecd82b1fb833a366f",
"assets/assets/image/arrowonly_right.svg": "0bd69509ba6a56031caad8573bbe23cc",
"assets/assets/image/btn_common_download_play_only_mark.svg": "6bc6519e6186371b57a36bfda3ec4476",
"assets/assets/image/ic_common_shelter.svg": "42bd45f6be458a62e30aa91c5f3d50b4",
"assets/assets/WW9vbkdvdGhpY1Bybzc0MC50dGY=": "d4cc191c162219095fa87bcf0b6a50c3",
"assets/assets/WW9vbkdvdGhpY1Bybzc2MC50dGY=": "3f1b5bc3ab72df556d2bc23369516114",
"assets/FontManifest.json": "ba125a5fef59ea52b201685c0dbfb9db",
"assets/fonts/MaterialIcons-Regular.otf": "4a605f5da94f25c87a21ab9601e256e1",
"assets/NOTICES": "a7ada2959d174048ebe4b6f3a7cb8915",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dc69dcbcf68e98b7b1dc2e99380090f3",
"/": "dc69dcbcf68e98b7b1dc2e99380090f3",
"main.dart.js": "37e2f200627c194cd85d93c0386eadc7",
"manifest.json": "b319c9f81e9a01734d7692903c4957f7",
"version.json": "44b2bdf78112df63e2d582569e5ea1c6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
