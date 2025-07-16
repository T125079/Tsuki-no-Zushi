
const imageBasePaths = {
    okonomi: "img/menu/okonomi/",
    set: "img/menu/set/",
    other: "img/menu/other/",
    delivery: "img/menu/takeout/"
};

const menuData = {
    okonomi: [
        { name: "サーモン", price: 200, image: "salmon.png", description: "脂がのった定番の人気ネタ。新鮮なサーモンの旨みをお楽しみください。" },
        { name: "炙りサーモン", price: 300, image: "aburi_salmon.png", description: "表面を香ばしく炙り、旨みを引き出したサーモンです。" },
        { name: "マグロ赤身", price: 200, image: "akami.png", description: "さっぱりとした赤身のマグロ。脂控えめであっさり味。" },
        { name: "中トロ", price: 400, image: "chutoro.png", description: "脂ののりと赤身のバランスが絶妙な部位です。" },
        { name: "大トロ", price: 500, image: "otoro.png", description: "とろけるような食感で、最高級の脂の旨みを堪能できます。" },
        { name: "ネギトロ", price: 300, image: "negi_toro.png", description: "ネギとマグロのすり身を合わせた濃厚な味わい。" },
        { name: "イクラ", price: 500, image: "ikura.png", description: "プチプチはじける新鮮なイクラの醤油漬け。" },
        { name: "トビッコ", price: 300, image: "tobikko.png", description: "小粒でコリコリとした食感の飛び魚の卵です。" },
        { name: "ウニ", price: 500, image: "uni.png", description: "濃厚な甘みととろける食感が魅力のウニ。" },
        { name: "エビ", price: 200, image: "ebi.png", description: "新鮮でプリプリのエビを使用しています。" },
        { name: "甘エビ", price: 400, image: "amaebi.png", description: "甘みが強く、柔らかい食感のエビ。" },
        { name: "シャコ", price: 400, image: "shako.png", description: "独特の食感と風味が人気のシャコ。" },
        { name: "ホタテ", price: 400, image: "hotate.png", description: "甘くて柔らかいホタテの貝柱。" },
        { name: "カニ", price: 500, image: "kani.png", description: "濃厚なカニの旨みを感じられます。" },
        { name: "えんがわ", price: 400, image: "engawa.png", description: "ヒラメの縁側で、コリコリとした食感が特徴。" },
        { name: "イカ", price: 200, image: "ika.png", description: "新鮮なイカの甘みと歯ごたえ。" },
        { name: "鯛", price: 300, image: "tai.png", description: "上品な味わいの白身魚、鯛。" },
        { name: "タコ", price: 200, image: "tako.png", description: "弾力のある食感が楽しめるタコ。" },
        { name: "サバ", price: 300, image: "saba.png", description: "脂ののったサバを使用しています。" },
        { name: "サンマ", price: 300, image: "sanma.png", description: "秋の味覚、脂ののったサンマ。" },
        { name: "ハマチ", price: 300, image: "hamachi.png", description: "程よい脂の旨みが人気のハマチ。" },
        { name: "アジ", price: 300, image: "aji.png", description: "新鮮なアジの爽やかな味わい。" },
        { name: "玉子", price: 200, image: "tamago.png", description: "甘めのふんわり玉子焼き。" },
        { name: "数の子", price: 400, image: "kazunoko.png", description: "コリコリとした食感の数の子。" },
        { name: "ホッキ", price: 400, image: "hokkigai.png", description: "甘みのあるホッキ貝の身。" },
        { name: "つぶ貝", price: 500, image: "tsubugai.png", description: "コリコリした食感のつぶ貝。" },
        { name: "穴子", price: 500, image: "anago.png", description: "ふわっと柔らかい穴子の煮穴子。" },
        { name: "かっぱ巻", price: 200, image: "kappamaki.png", description: "さっぱりした胡瓜の巻き寿司。" },
        { name: "鉄火巻", price: 300, image: "tekka_maki.png", description: "マグロの赤身を使った巻き寿司。" },
        { name: "いなり", price: 200, image: "inari.png", description: "甘辛い油揚げで包んだ酢飯のいなり寿司。" }
    ],
    set: [
        { name: "築乃セット", price: 3500, image: "tsukino_set.png", description: "赤身、大トロ、炙りサーモン、イクラ、ウニ、ホタテ、カニ、アジ、えんがわ、甘エビをバランスよく盛り込んだ豪華セット。" },
        { name: "彩セット", price: 2800, image: "irodori_set.png", description: "サーモン、マグロ赤身、ハマチ、ホタテ、甘エビ、ネギトロ、イクラ、穴子、イカ、玉子の人気セット。" },
        { name: "極セット", price: 2300, image: "kiwami_set.png", description: "マグロ赤身、ハマチ、サーモン、ホタテ、イクラ、ウニ、玉子、エビの厳選セット。" },
        { name: "鮪尽くしセット", price: 3000, image: "maguro_zukushi_set.png", description: "マグロ赤身×4、大トロ、中トロ、ネギトロ、鉄火巻の鮪づくしセット。" }
    ],
    other: [
        { name: "茶碗蒸し", price: 500, image: "chawanmushi.png", description: "優しい味わいの蒸し卵料理。" },
        { name: "お椀（みそ汁）", price: 300, image: "miso_soup.png", description: "あたたかい味噌汁でホッと一息。" }
    ],
    delivery: [
        { name: "雅", price: "6500～", image: "miyabi.png", description: "赤身、鯛、ハマチ、エビ、カニ、ホッキ貝、ホタテ、穴子、サーモン、イクラ、イカ、ウニを含む豪華なセット。<br>価格：２人前 ￥6500　３人前 ￥9500　４人前 ￥12000　５人前 ￥15000" },
        { name: "旬彩", price: "5500～", image: "shunsai.png", description: "玉子、ネギトロ、イカ、イクラ、赤身、サーモン、アジ、ホタテ、タコ、サバ、ホッキ貝、穴子のセット。<br>価格：２人前 ￥5500　３人前 ￥8200　４人前 ￥10800　５人前 ￥13500"},
    ]
};

const tabDescriptions = {
    okonomi: "旬の素材を使ったお好み握り。お好きなネタを一貫ずつご注文いただけます。",
    set: "職人が厳選した豪華セット。複数のネタがバランスよく楽しめます。(味噌汁付き)",
    other: "茶碗蒸しやお椀など、寿司以外の一品料理やサイドメニュー。",
    delivery: "ご自宅で楽しめる出前セット。人数に合わせてご注文ください。"
};

const container = document.getElementById("menu-container");
const descriptionElem = document.getElementById("menu-description");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupName = document.getElementById("popup-name");
const popupPrice = document.getElementById("popup-price");
const popupDescription = document.getElementById("popup-description");
const closeBtn = document.getElementById("close-popup");
const tabButtons = document.querySelectorAll(".tab-btn");

function renderMenu(tabKey) {
    container.innerHTML = "";
    descriptionElem.textContent = tabDescriptions[tabKey] || "";

    const basePath = imageBasePaths[tabKey] || "";

    menuData[tabKey].forEach(item => {
        const card = document.createElement("div");
        card.className = "menu-card";

        card.innerHTML = `
      <img src="${basePath + item.image}" alt="${item.name}">
      <div class="info">
        <div class="name">${item.name}</div>
        <div class="price">${item.price ? `￥${item.price.toLocaleString()}` : ""}</div>
      </div>
    `;

        card.addEventListener("click", () => {
            popupImg.src = basePath + item.image;
            popupImg.alt = item.name;
            popupName.textContent = item.name;
            popupPrice.textContent = item.price ? `￥${item.price.toLocaleString()}` : "";
            popupDescription.innerHTML = item.description || "説明はありません。";
            popup.classList.remove("hidden");
        });

        container.appendChild(card);
    });
}

renderMenu("okonomi");

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const tabKey = btn.getAttribute("data-tab");
        renderMenu(tabKey);
    });
});

closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
});

popup.addEventListener("mouseleave", () => {
    popup.classList.add("hidden");
});

