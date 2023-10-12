'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "a9e110fb58d625e29be1eca8df944a08",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "29d729be6828a53f643164e9a97fe374",
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
".git/index": "9801d9ca90baa391387a328d4a15a641",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "03f8e4d7b0a63709d54a132de35d2ce0",
".git/logs/refs/heads/main": "e869ef706be837e14e3c94a23378de45",
".git/logs/refs/remotes/origin/HEAD": "e61812c57e73714978aabc20abdd24b9",
".git/logs/refs/remotes/origin/main": "6d629fbf36d4f9a047ceac9908d7b174",
".git/objects/01/1a4f88e7bd677313acb47996a0fc12f412607a": "c716e68feacfe88f57839312d9d291d7",
".git/objects/02/e35f7e01befa201497cbdd135cbee5e87fefc5": "513c002f6c9756530e2e8b5c22114ec3",
".git/objects/03/62b2ecba84e7bb53f98c31b71e06bc7c6a78b3": "b6d4cfdbe9f1e12a884c9171dc55d67f",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/05/3b7f44c133a259d2303e7603c6fb46f7950aee": "c26e9973973c8c1c5be6e21936e864a5",
".git/objects/06/50ea49f1450721c151c2bda4a73d792b36c95d": "87dcf1536cc2b0d537cdc989d5b5cd7b",
".git/objects/0a/889a8ebef5557443e3ab065cc9dc50dc8d0e11": "1eccb75f75ccbe2ed8695acc2b276d30",
".git/objects/0a/e3d5a9dc77f4475a3fb3cdfb1808c2aee5d11c": "9c057ac8c7dc8e91f81744b3aa9a6017",
".git/objects/0a/f3ea76afb4164f4a8c8864474f3cbe180bad7c": "40432f3d0af62f9313f8a6555f70be55",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0d/4838aea00c3f2d01535d9e1c0ca9fe8a7a1a29": "2dae70a9c66c90504831d6fddf11498d",
".git/objects/0d/83d017b7bbf9c57d0ecc442e0b61ab014b2b0e": "9d51c37b914925db18f7f4ef3412b531",
".git/objects/0d/a0481af5398f9b63f4b744d704370bf1b68010": "ba5f71085e4f5376d094674bbb38c20b",
".git/objects/0e/6eecfc9a98296d7689b78246df13a4fa6b3b70": "7a5dc1a3d9c0e4ae3f7e10d87403155c",
".git/objects/12/7eb22a7c0c92f99656cb61d8ed513015e5bb5e": "05028bca705ffd2bc0206221abbf589f",
".git/objects/13/deef330704343ecb12b7aaeb3c6062512b0e9c": "698767e9149c54e5164b80b5a60e3c81",
".git/objects/15/3d8127ad35171f027dc5f2a4ae9bbd1c7a34d0": "02d276c488ad660a0597323ab3ba2614",
".git/objects/19/420c07c7330c98357bbf6156e2e8debb478a24": "71cbdef6defc4b2c73783263578cec2a",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/1c/6b46ddaccc532a139f55732f8fccd467edd4b2": "ed9a7fc65b22a07dfd65e75c3b5a1578",
".git/objects/1c/f22b6cd08397bec8734816a7ad707b9294edb3": "4a8b5f64ca25ae866de6bf42ec59223a",
".git/objects/1d/26bf32289abee12eaeeb4b6376c9c9e211b282": "0a8bc549ac6ef76e0e9c12140e605530",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/21/4d01a212b52beb66d11ff4d88b8143aac3b40e": "19b54b6ce96b05553728225e56e83272",
".git/objects/21/6d33304e78df8f4b8f9aa02d2a830bf9fc12b2": "f41e8b44c6573953a5695bc346fa9fc1",
".git/objects/22/5b2652f62c32bbffbade352fc6b0def46cfa20": "4c35a1969c912344f0ac97c9a9577f01",
".git/objects/23/cb88768a0bd0c2f3767bcb2494d9a0423c0303": "cafc28c95248faa31123f337d42b4aa7",
".git/objects/24/cac773f6c19058a2d6966f7f9189d6687adfae": "954cb7d94cce7346f22fdeaccf208f06",
".git/objects/24/ed4cad9df67aa0f9bac78262e8e5e5062decc8": "586b0e769497f78e11cad62ee7dfa204",
".git/objects/25/039f3e19d80b4af13ba2f6efc24db867aa43ad": "9533f30a7ac17147a10060e6936223c9",
".git/objects/25/fd1795ed3aeac394a41d2b2dce6169a887a6aa": "8ca49044cadd3141232f041a26f6dfed",
".git/objects/26/4e1b8bebfecf69ef367af6420b3a5a112f1f39": "23700e5f5dd5706d6e610a0fdaf1943f",
".git/objects/28/9b0897bb1c158a75d6a7f3b30d6ae7e43b18bf": "44cbf98a6fd16952bdc4e25e04956780",
".git/objects/2c/c6799f6cdf9ba15ae56a5277935acfb342a64f": "a78cb7095938176c05933ef543fc4d5e",
".git/objects/2d/ec46a36e4f0f04fd43efccb3a9cb386292b3ee": "57e0668c2dfdb1219521fcae9f2ecdf9",
".git/objects/32/c72643f89ef25bd003ede42f1f85ad12524ae4": "362ece2ceac9457467be22173fe2ac29",
".git/objects/34/7032c33f0fa4e9c0445345011ce5f96ca49adb": "750dc97033321c95d5271a3820b56e76",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/9f61c141202b463778a1b208306441dd9804be": "61648fcc84198463580390429f806860",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/d66b06d0b73d96f8a0e785b9563a9ae9a3f448": "09caf4385019c0e7a79c85d035263057",
".git/objects/38/12e6c798ad1228a3b56f6df63b684045ccb74b": "9aa5977575d55867a487147624c164d3",
".git/objects/3b/8e8fd2bfdf893b8f9980c11396e6ee86350a24": "30b421256428800ca8d9b79a31a59eb9",
".git/objects/3d/c014537de07c123dbb77b73e7744b8a02f9735": "365cd65e7fdfff7b23a1cc4fdb122b1b",
".git/objects/3e/b3acb9fd4d6effc5990ca7a2a4fc257a45d0c9": "aa18bb478b3bb52d38bcd0960a83fbe3",
".git/objects/3f/39b45d7153be3eeedf2919858bd279af3aede5": "97c3b6b0b1a88852f7a02920dc6c103b",
".git/objects/40/beb71595858022d5a1a806b239e3e458eb774e": "8a66804cd3d3724ed8b03b3afe75b93e",
".git/objects/41/5b6965d7a95b707f897c325aa6fc3938de424e": "ca30415955bc4c9f633629444b5005be",
".git/objects/41/e9d5dd9f8c949ab3baf5f7bb51985a82f80378": "7c8657106218709cda55748e1c41c08e",
".git/objects/42/049ffbe8e82d4086f01267df3b5685a1560a7b": "69a6989e5748d1579fbb92e3dea91ffc",
".git/objects/42/a8667dff007091b25011abfb272793cc859525": "b2eb8dc597772abd8cce866c08574856",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/43/5302a76bc345dd5709fcc68f5166d3da34442e": "d77e37284519b9aa698a673b8d695a5a",
".git/objects/43/6ab463e9d701fda57cbc21eb2558b445318b08": "7ad8b74afa352a8c43f6f114e858ff66",
".git/objects/44/b48137c0f6d39433915082dad4571794064d73": "30c6cac3ec5f1efcae9c6264f690174a",
".git/objects/44/fcd22d2680bc7ef3658569a4c6871976f2e0cb": "43cce7d9ac1889e9e61acac77cc11e14",
".git/objects/45/9472c44071018d33ecb8219497841037985be8": "2355561be3bbf3f2acdae662785e7a0c",
".git/objects/46/084a771724ed343721f0ec9263924ab34e9007": "0176be7c9b0f45c89424b19dafb7462b",
".git/objects/47/eb3afbc85f39a51d253e5fa836a3cbb9bec5af": "595dcd2c061fea4d06d02baeda5ed82f",
".git/objects/4a/908938e58876069da4731ed2795dffc0609ab9": "3cf758a1b1285b655c22e9fbe51b6e09",
".git/objects/4d/5a4cf10f6d972d61de3aa148c675cffa115c56": "d045c180c8d097816c013065355b7e99",
".git/objects/4e/6f86329142b904df21dc0acc0b5b301abd4ff7": "242acab9ed58414ba3903217cf3ac1c4",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/b05e362f51dc91456c1e8bbb7d630766b235e5": "3861b98f90f68d59935757be10fb02c5",
".git/objects/54/e5abd3fe58f6d40e860f70aef473b83bedd9b5": "6ab732e75da281735822d8f690031e78",
".git/objects/54/e6ce7abc0ddb4cdf185a125ecedd3a8ad9fe03": "2b027a2a7826c81213b287a2be42d55b",
".git/objects/55/fa8d175480fe9be5d6f40a2f779e6699ea21a1": "af09de3f58558b3b97746e4a1e9b31d2",
".git/objects/57/4a5493848abc59d8490c73bde479591fa33ba7": "748da43d26d46950b84faebfae1bfaa8",
".git/objects/57/a6a13ee33b1d4c19b7cf937400401b3c3e4dc3": "576e332fa046f48be161325b8b0b97e5",
".git/objects/5a/8d5f9522ba4c9cef336be03cfd2cb5c82bd1b5": "aaafe9d3a59a8a2b5b72fb04b628b26a",
".git/objects/5b/659c42946968af068cad7cb11e800d150b06a4": "d6f22bd52ffe4337bd21fe99efbbb26a",
".git/objects/5c/2d5369970848128b40b050d5028948779984d9": "51368be0627ce88f3345f93525d06c0a",
".git/objects/5c/a4c51f4ed74a0499cc369b4b3562ce3ea3594f": "4aa7029058ca92bef6a0056824e91e99",
".git/objects/5f/0ad57cea9d4b884c6cd912304367a9021ebbc5": "cd08871c08755ca968faf126c5349983",
".git/objects/5f/41f483324ab192aec20cda6e6577cc290dd70b": "877b62f7d9caca08f4cb80f9527f96bd",
".git/objects/60/149407c5c190a07e699f4b7848a8f1afb9611e": "cc9c0d7b5504171e3fea01cd5f84c45a",
".git/objects/60/57b21bee3195b44d585532bae730686543d5a9": "e1f6482a63e2a48ae85d92a0ac972062",
".git/objects/60/7d842fc15c58644a843bc1e3df1ee7c3cfe429": "3412c209e83e6946820773c3d50480b7",
".git/objects/61/7ea32d715b80405034c4e6eda7a35332e5177c": "db3b382004bbfc63293267cfa4b75a0f",
".git/objects/62/042ad2f688dc831f9fa5c318493a099547ba7f": "d3da74aed1f78f2445dbf528b2ed6f83",
".git/objects/62/9e46cd42e0008d914cf75abf8ad84ab303b2f3": "f46c384d41473b03b62ac947c6a5d855",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/129ef56353ed02d5389ff5bef2a56c5f40d331": "a41eb8bdc685f97109025f5a76a714b6",
".git/objects/63/e41e43bdca356741ced4cf91f540dff31e0f7c": "d8338d0fc8038445c48aade4907b8065",
".git/objects/64/e7d40f8e1e6c0e8df1c31d5b9a482ebad3b186": "a10c2370cf03054ce6d5617cb40a3fe7",
".git/objects/65/0da9723098fa953548d167f96269afb76b5f40": "766146ce5af0da156b9f7f60479831ea",
".git/objects/65/8280d878eef374d7f5f24375c1c259f26ffb29": "21558cd7f39015c9622b2d4df01a27ac",
".git/objects/66/d5d7b10ee24ce1cb8017db905f0c4161854fe4": "a0e6114951772eb65e20849e7891fe16",
".git/objects/6c/0f4743b490941b8d819d87a3d352325f90dc2d": "f7f268fcbe4e192d5c9ab3f1cbd46a0b",
".git/objects/6c/d52f66fcc349c1a353b41337dbd13053422b9d": "73536a9a0ac9936bb96db5a8d072be74",
".git/objects/71/0a63facc470c0825bff8735858217c080794ef": "e42ff4d675d1e5eb65a63abc09433fc1",
".git/objects/72/21b29b27c6575cf6b322dba578b6900c569cbc": "a9600abb00f937b21df63c32a50f28a8",
".git/objects/72/fc8694a8910980fa8325d4514520d5c1d3b08f": "c0fa10434011a26b14b31a3e6e66c62a",
".git/objects/74/1ad42926f4e13a043b4b9af944065a8d584e96": "778731315789dc2b1dca01e83d019465",
".git/objects/75/c0d0507e7076e6b9f493321001c0229cdf0d0f": "ac62656c64485672d8816766cd9ff5f6",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/7a/67514efb35f388550aba865cd753c795b85198": "73dbd716e2c528379a5344d374ea3e14",
".git/objects/7b/a4de1d79f6e64c8fff6eb6c81e7d57deeba258": "2a20cb4ddd01e6c77891615cbe629618",
".git/objects/7d/3de00dca0c06279287b03d7e4db561b627a5de": "1256648b6df525d13c002dec23a04805",
".git/objects/81/11b0ef16c235893daf02045bbe7729373290de": "b82c25af14ac3d3ba0af064c610f0630",
".git/objects/82/085a01ffda6ab6a235866bd4e6dde4d54ba2cd": "310e0ac24ac48c1a9ddd3a15263af8d1",
".git/objects/82/2a9027e8074dee3fe610728fa98e365d2eccc9": "53dfaa3a35861ea13c61fea004e83a5f",
".git/objects/82/711fcd9d66c4a97eb9e52d743b7546d9aa5a65": "05c7428d57fa412b6f48de4fe13e80e9",
".git/objects/82/a7834dd1c2bb3b09f66e9506fbc38b0c977db8": "ac11a5788dab21a03a3dc448b00ccdf7",
".git/objects/83/91e56e8a12912320702757cba6701c1f76a0f0": "abcf6665474857524c456dbe7305ae7c",
".git/objects/83/c7e0f486a5db25cde369d5d0a4787abd9a5992": "1b1f4547156a27c0cd8b078fdea1a987",
".git/objects/84/4f57fcf769518ecc685b88f88acc13d8ba9a47": "87a8ad9815ee90cfca05480245b38753",
".git/objects/84/50e9594dae3c42a9a957565080b254e3a45aae": "6d0b9ed58b2a3d4a766c5373cd527f8c",
".git/objects/84/b02c73c3eb3968a678037a1ee70f3c304ed87c": "c7114b674e23803ba3830609d70a052e",
".git/objects/84/c5f6af747348d970ddb2b6cf8af7218f7ceac3": "02ceeb4ca19ddaaf53ee2e22b325131d",
".git/objects/85/e49d252142784fe19d9d17912ba948a7b48398": "ca7157659931a05e1a9e09cf775a23e5",
".git/objects/85/e84cd990a6978b13871ca80a88682e0935a6ae": "d82032d22f0791be9cf30e688278e27c",
".git/objects/86/1dcd60bd1f06199ef37bd4f6cddfc338452f9c": "40527afa8e1488d344f8114bcc65527b",
".git/objects/88/0f1503a444b93a326dfda7e25c5e7c6a8b56b2": "5af28b22a1ed032d2a8ed04522711b31",
".git/objects/88/b7e72f78b11e91521ab185dc3f0b4a147f6ade": "8ef947e5312998c7d3bb4b6ccbc514b8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/466a6a74af248169cf3c9a6f786be8bcf7f128": "d699231821bcbac52b88075b5c6d4f97",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c7bbb8caeae72722923420855e013f1ce3e954": "c07ff158f491c7e848a652edc37317d0",
".git/objects/8b/df69f69ac62ff43250862f7458d5d6c87af17f": "52f5168e7bf327c9afd6bb11681d493d",
".git/objects/8d/c17743241b8c555a32013f9ae146c638d556f1": "6923861b9f16315e7f6b86a71ee01fec",
".git/objects/8e/1c9c53211f6fbb2796c246f29cf79a159531f8": "73acf6dd46f2f268b3d70e7ec68edea6",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/b5430d9e9c77b6d6109deb355fcbb673e3f3c0": "924e3b4c197d85db40ca30be730e782d",
".git/objects/90/e58aa94b88c89ceb99260b23898e86ccf59c4f": "e1112c7774fcb8bfaf24753d36d6b0da",
".git/objects/92/67dfd33dffefbfe2f4e9de5025e74d1bdfb6bd": "aa23d320dfb0dd9bdffc426ad9b7d5fc",
".git/objects/93/e90ac8bea8b3540a79e3ab546f66f12950c795": "ec5e6a08aa53701f6d423375baa0c945",
".git/objects/93/f999c18f8c369f164b06108623a140c84b1b44": "a89bf6c7f6faba5be15596c954d13c8e",
".git/objects/94/53301171c735e8d8b99b9611d1c4a83744b32b": "d29febf6b51fc5c7c5626cd3e7510434",
".git/objects/94/6744dcb51099a34305c0c489a6cffcddcbaf16": "0bb53ee766b214a351b82020008ec62b",
".git/objects/95/6124bf6e0f9f6914ccc167189168e13156a696": "fc5a6d6f783abad7221a04790af642f5",
".git/objects/96/4a225ac6133c662ccf1f869177f309a979038e": "c168d24f0913e9e460a6301684a46811",
".git/objects/99/d8a92c9bc73daef7f12544578fc576397ea8fc": "a17ccee0d94e1410bcaa1c578ab3320c",
".git/objects/99/ee69e0e252b1743ef682213ebc41c2ad490969": "93bd898d67272439cf613f820bfd5cfe",
".git/objects/9b/5a850e2e06f982f226c9ae72509cba90a5ebd2": "e6334abbfa1391bd2dded9b90b81791e",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9d/785c107adcdc878dca4c2ed57d7f1d6a5bf9ff": "6e8cefa1cb187ed67b2d5a8eaf1d0210",
".git/objects/9e/14400ea3a5a4faa49d9f058c47fb72db9e7eae": "eef467b8abd5b521bfb712e6a0b61973",
".git/objects/9e/1b894365cb1f18eb39b68eac645a57f334a8fb": "d8ca1df03023132bb9e818604ad1468a",
".git/objects/9f/272f3c3a76c0e8f1a05a85bb573e0e5588c322": "c131b6a824ed32d1e21cc9e7eb4941f7",
".git/objects/a0/edcac3fe9c5f23ad2152ccf266e5b85969022f": "0bdbb39fcb8d401746fd410869dc8a86",
".git/objects/a1/4267c2cbffc7d3b7a44b620c147a1aa1c7a103": "9c7eb94be47ec0a766bd452229c22641",
".git/objects/a1/6f72d7ad2e75e1d1fb6c5a409831991963e031": "9fb681d52e573703aa1da3df56e62ec3",
".git/objects/a2/ea65d7291308b883401a1c33369e04c58be31d": "d94c6a1eb9aeefebe28013967edea8b4",
".git/objects/a6/a74c599afa18f6380ab1ad12f25ec1210e8808": "9287f2a3213c7e1a11c148288efb6db9",
".git/objects/a6/ebc410c2587d80868258499a01a591b39bf1a2": "47ff311bcad2d3d09a3e74fb03bc2ca9",
".git/objects/a8/e6d3de936e762b37e68941b0b082c0da8c8c29": "3e8ac34de290ec541132eb1aaeeb4bcd",
".git/objects/aa/43c0add3ce3b2d7455f6035e69d4f8ac3f6e3c": "13f8062bcd7a95ce84547ca86637dfed",
".git/objects/ab/989f9dd6a849654506ee9e809728ec90dd9a7d": "1a9c9b246f00830d2cc7de8c063e62af",
".git/objects/ac/853305169bd42455a97b0847701df9a902a2b6": "9dc589b2baebfb692142d83f9d5e46cd",
".git/objects/ac/a079fd24b1d75312a6b9737934b8f199896a39": "7160559c924ec8704161c70291ecba5d",
".git/objects/ac/e0fc6220139f8d731987ddfe215c8920be1e69": "5444284b0fbb8fcce55d89142162a511",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ae/37c5532db2187786e3d759600b901a4dc74582": "3dbe8fb6f4ec480ad857e483918f0e3f",
".git/objects/ae/dcc52ca1fc9f1cf654809f01a3379eeace1b23": "ed00273b85228cc9b3464fd2473ec1b0",
".git/objects/af/bef5c56b19b2ea58aa82b16b252c2330fbbe6d": "4b01eaaee0a168ef176650b5b0aef93b",
".git/objects/b0/5a40876a3f16ab20ad357674e808e72d984e7a": "437e681115a2a12fa29ae2cb98752043",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/bf6120d91dc58a570e352a70aaccd512bf1b56": "e407dfc43645824f9bfd1cc26b7e26f8",
".git/objects/b5/4a4d13aadf373b7d096a1b5a07e3a2fb33fa04": "8dbc64c5ae88f54ccdd90891a11b793c",
".git/objects/b6/c961a1fc7fd9960f4c5168c8357da4a4a485ad": "aacbef2a93b93e8953148c1048d2c5f2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/ba22d0804071eac95e5f33360703cbda25c7f9": "63a60ffd7b5706ac0c4e8e33abbafb49",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/2b9373b1c2d29a7bcc9ba5d9d2e6a3f0b157e7": "959911dd05f1c72e49252c7b105053d0",
".git/objects/b9/62ba763de41657d8deac6c177d6eb7685993e8": "5dc153b546d253f7226f3fa1f08b76c5",
".git/objects/b9/a4ad3a030ca7003f7181b6bd6dea1f81cc37fe": "9349bee0837e6593c8d6e66ceb8d369f",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/2b3a9b0988b197b572f49351aa027a2b4ef4eb": "c8c37da4c9c5b1d34f27aa2a83fa3f67",
".git/objects/bd/413cb0b901cbbb8082f569f6d70abd21ef0ca7": "389a69e5adcd04d63e40bc5d320cc304",
".git/objects/bd/dbf48b530f1c4e3e78f278422ed618081fd1d2": "b827384486a2720cb0ee1a44e5e6f4ca",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/bf/0b2b30ec768be4076c55c5c89c800a3542cb05": "4d8821eb76a81290222b2e1954bb528d",
".git/objects/bf/dc12d3b8e28c9cdce7e14fafed045d6e8d7f47": "77e062bdb365fe24821b69d6610204fc",
".git/objects/c0/9cc488f4ae6cafb75f9f03efef50b116ea4705": "9e1b8e20de36b5673cc9bfff1efcf332",
".git/objects/c2/25e3dbd0c781bc2faaeae24c368099aacbdf20": "44122a9a61ae85a03ce85045be1066ac",
".git/objects/c2/9b63427d7f41e2f083b44476df4c3b2966abe6": "b12a2556c25a9e7a202f67bd118a3c8e",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c3/6c80d39d94d6385c2131f5e503835f728ed161": "c4111bfa5325d4f99740e51694bb83ca",
".git/objects/c4/b610e1915a887d12358236f492f221e487ea00": "497ffa3fcb021faaa540147f23429011",
".git/objects/c5/114d0ed3956cae37a28541795b769059886453": "b45b12d4361888bad6e4813207d0823b",
".git/objects/c5/fd1a71b48f5f54513f13a6756b896f94b7c251": "f370d974e457f3c73c6c25c98880354c",
".git/objects/c6/0d9686e18758fabd628c0b3d4384e4f0bb6866": "3afcc3d1775fee1eb7b86e69b1a2a326",
".git/objects/c6/b19c38b60a3f7b0df9001e0d9a730d62e2d08f": "afc357e0db30de54bd7911ddfab22618",
".git/objects/c6/bda9b99c5dab593158c564f8bfabc2c1eb4cac": "4c6a3f8748995dae86107a7872af4ca6",
".git/objects/c8/16af30e4be6dba6a98966e28978717c9b898f7": "1aadb6b957ad74d572a5a0fb9bdfbcc3",
".git/objects/c8/5a7ecbee4a2106331bfa9db074ba7833c027ac": "fb30b49326fbbcd64f5e830c0a6d54a5",
".git/objects/c8/6ef3d2db595e9e142c308cf1beea106bfb9db6": "a9e959648254d22f96b07a9140f6278b",
".git/objects/c9/b87fdb2802af096ba0f51814b6af904d39749d": "906fbdcc64ec6b095ae85cc3436bdb32",
".git/objects/ca/299a03d077af1a5867b243eff057887b576428": "47ba791514b1a6cc3e881233ff1f69a8",
".git/objects/ca/601b5a37538307cae2891392e87a881bf5f98d": "49736dca50899a31097d4ff287417c7e",
".git/objects/ca/9a407399b941382cba2c3ec2ab3a7af177bec2": "1621fd5de6635a618b67c59f54643d48",
".git/objects/cc/c8da91e5d56ee8ae974ed376d26391a6433986": "3318e6652b39a598f629c8801765c46e",
".git/objects/cf/27cc3187880cfd18a2276896a0352afeece2de": "e2cd4004025eafcf6af437246e85b952",
".git/objects/d0/f0d63dc8e4c6437bffeb5514c4de535a86530a": "55ac00452dd59f2b990aec1fe77a86e6",
".git/objects/d2/0df378dd7ca45f3689347a90833598f070daa2": "1701b3052cf0d67a39732554a4993b5e",
".git/objects/d2/418d51fb832583413d57ad88c09b0b2ed88350": "2c8f5a93ca6faf8ade3ec02bab524c83",
".git/objects/d2/b40b8d3c0ee3c356a47d45320ad916a8960154": "9319f900fa3e8a3b0cfd379c31548554",
".git/objects/d3/506b007bb7817ba97c1e1ecad996de8cb3c0cb": "ef52f4e738bc2779f4750cfbd1375df7",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/53fe623e8eafd0ae08a9ba17db41861e08829e": "c57f4bb4d8b5ae757458c2ea34a9a553",
".git/objects/d4/902f6459a3082b1c653865087414076c4ca402": "ffee3390a0a61093615bc99f8877cab5",
".git/objects/d5/85c9515c2528cabe20f914be7a9bee04b65008": "bcd16984255d53888aa48bfd6126d7eb",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d5/bfcb2632a2e35c867159ba0f323704f4b62793": "5259794bcadee530fadf6b3852116ed3",
".git/objects/d6/3f4a9be1609f1e4828f7862c316cd4e93fbaeb": "f4e1372d1b8aad6c14599280c9fb8157",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/20a3b31c551d0a2ba1e743e3e66083fc64da54": "6f7a73333dd505fd9706450e5d5a4f72",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/c2c4c9da88552620f7f020506d0c0ff0776f93": "7ba8e53d368e9e870f5049536426c641",
".git/objects/d9/e1732cdf96b0db69a670b8cb721bfdb9d98be3": "01c47b82819381c70647c0afa916b914",
".git/objects/dc/2072867a9a6eb42d2e96537f61ea1a0b796291": "55b50237b104fc8546fe68bdbb418851",
".git/objects/dc/83794028329b42cc7326eac5f66519729fa84c": "b42306d59de87fae4901ef093d3b740b",
".git/objects/dd/eb1ec2b1878a78b5a2a788e29e1cd941c90576": "92c90ff036a8c20908090929a2a35cff",
".git/objects/df/2a0454c19b1a98eb94a261d9ebf7c6fd5dc846": "a285a6cbc41b75eac39a2cd2ab6752c1",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/31e87f2c779a5bfd45bf2b7be2d2f202112d7d": "91c4f8246c58a0b1edfaecdfc7ef5c61",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e8/701d78975c50947104d0111f68f9ae3e16a0dc": "c053e7ff72b851f86681f81b17a0e44a",
".git/objects/e9/22172010661eab53908e11cd1f65c5f0a55663": "eba5d13227034a534a315cfbd800b3dd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/182e63499a9a03b3116bee7417ffe6b61f3dea": "62f8796dd7f9c845293c0757d41d31fd",
".git/objects/ef/85fa1b29de046cfee503e1eee43df671133885": "05b8eabc0f57a4ddc31ead0c701a3a0b",
".git/objects/f0/895049c71543f23a7be18b9c8b1bbf3d480761": "ae0ba3a2dc788a06af19f0c2588d53df",
".git/objects/f2/5894f833dd414f75b6a38cfd7b2cefd3279d43": "515c7a34a79646f1d7b2e53e6c888ced",
".git/objects/f3/10cbd51d90000e51cafc82ec73de11d5410aae": "68eb5158d1fc892b80030ce72ab706b3",
".git/objects/f6/802216f2dc619d27c1876c6a03434b4d39844b": "737915c3b3408f00d001cbc4f748b090",
".git/objects/f7/de2b52c906c8b605de35769326f2a2b442c5b4": "352c983d70f3f89575ab9a514af7ddb4",
".git/objects/f8/1de685c32de36b4e92ed0f584af743c59213fb": "42727a62026c8a5e9229936d85a2e76b",
".git/objects/f9/9e99a4f233f1d2fc2c643897d482fef789f28c": "08805faf6a37c7470c9ca4b21182688b",
".git/objects/fa/9983dd2a69c199e728d6f7579f3746c3a481a7": "09fc92d3fe72a0e7bae07c1dbf6bd367",
".git/objects/fb/f07cae6660627e389ba77608afac4d64cca162": "e2d7eea17545a66060bc7939278f3010",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/037cdfacb8e0ef7e8b3021b1e6e1f48e316598": "f2d106e57ad1093740b91b3c058b0f85",
".git/objects/fd/13ddb43b7899414890ed425224764cc7c61dbb": "16fcabb8f46ea93ed422d4de97296bcb",
".git/objects/fd/eb1d0755eaa9dc12a6752d9c14cdf67a1dfb93": "69e6af26d2bd0babe8b3681bb6b7fdd4",
".git/objects/fd/fef4421422c9a8f48f7144d16c1dc874677908": "5ba002f5b922ca718595906c6c8f8f08",
".git/objects/ff/a9a88d9e469ce251502d4e14edd1496bf1abc9": "b5e038ddde99c6db830192d0108398dd",
".git/ORIG_HEAD": "d199bd7bf920a8a9326adba63c1397b0",
".git/packed-refs": "f36447570aaae49e79a1070485f9ed78",
".git/refs/heads/main": "d199bd7bf920a8a9326adba63c1397b0",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d199bd7bf920a8a9326adba63c1397b0",
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
"assets/NOTICES": "c170c2b009371d888f3c484ecaa5dd02",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fc01aada2f2314146bbb5987bf603558",
"/": "fc01aada2f2314146bbb5987bf603558",
"main.dart.js": "72db4892a3c7d874a521adc107ef2c21",
"manifest.json": "b319c9f81e9a01734d7692903c4957f7",
"version.json": "53052744c27df369da266cf8b246b0bf"};
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
