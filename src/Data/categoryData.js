// furniture images
import wardrobe3doorImage from "../Assets/CategoryAssets/wardrobe-3door.jpg";
import wardrobe3doorWithHandleImage from "../Assets/CategoryAssets/wardrobe-3door-handle.jpg";
import wardrobe2doorImage from "../Assets/CategoryAssets/wardrobe-2door.jpg";
import wardrobe2doorWithHandleImage from "../Assets/CategoryAssets/wardrobe-2door-handle.jpg";
import wardrobe2doorWithProfileHandleImage from "../Assets/CategoryAssets/wardrobe-2door-profile-handle.jpg";
import metalFrameLuggageRack from "../Assets/CategoryAssets/metal-frame-luggage-rack.jpg";
import metalRackOnFrame from "../Assets/CategoryAssets/metal-rack-on-frame.jpg";
import luggageRack from "../Assets/CategoryAssets/luggage-rack.jpg";
import nightstandWithCutoutHandle from "../Assets/CategoryAssets/nightstand-with-cutout-handle.jpg";
import nightstandWithHandle from "../Assets/CategoryAssets/nightstand-with-handle.jpg";
import nightstandOnMetalFrame from "../Assets/CategoryAssets/nightstand-on-metal-frame.jpg";
import openNightstandForMinibarAndSafe from "../Assets/CategoryAssets/open-nightstand-for-minibar-and-safe.jpg";

// mattress images
import universalMattressImage from "../Assets/CategoryAssets/universal-mattress.jpg";
import residentPlusMattressImage from "../Assets/CategoryAssets/resident-plus-mattress.jpg";
import residentUltraMattressImage from "../Assets/CategoryAssets/resident-ultra-mattress.jpg";
import premiumUltraMattressImage from "../Assets/CategoryAssets/premium-ultra-mattress.jpg";
import rentMattressImage from "../Assets/CategoryAssets/rent-mattress.jpg";

// bed base images
import resoluteBaseImage from "../Assets/CategoryAssets/resolute-base.jpg";
import boraBaseImage from "../Assets/CategoryAssets/bora-base.jpg";

// topper images
import smallTopperImage from "../Assets/CategoryAssets/small-topper.jpg";
import standartTopperImage from "../Assets/CategoryAssets/standart-topper.jpg";
import luxTopperImage from "../Assets/CategoryAssets/lux-topper.jpg";

// textile images
import textileImage from "../Assets/CategoryAssets/textile-image.jpg";

const categoryData = {
    furniture: {
        title: "КОРПУСНАЯ МЕБЕЛЬ",
        description: "Шкафы, тумбы, столы, ТВ‑стойки и другие элементы интерьера.",
        id: 1,
        items: [
            {
                name: "Шкаф 3-х дверный",
                size: "1200 x 600 x 2200 мм",
                image: wardrobe3doorImage
            },
            {
                name: "Шкаф 3-х дверный с ручкой профиль",
                size: "1200 x 450 x 2050 мм",
                image: wardrobe3doorWithHandleImage
            },
            {
                name: "Шкаф 2-х дверный",
                size: "800 х 600 х 2050 мм",
                image: wardrobe2doorImage
            },
            {
                name: "Шкаф 2-х дверный с ручкой профиль",
                size: "900 x 450 x 2050 мм",
                image: wardrobe2doorWithProfileHandleImage
            },
            {
                name: "Шкаф 2-х дверный со штангой",
                size: "800 х 600 х 2050 мм",
                image: wardrobe2doorWithHandleImage
            },
            {
                name: "Багажница с полкой на металлокаркасе",
                size: "750 х 430 х 490 мм",
                image: metalFrameLuggageRack
            },
            {
                name: "Багажница на металлокаркасе",
                size: "750 х 430 х 490 мм",
                image: metalRackOnFrame
            },
            {
                name: "Багажница",
                size: "750 х 450 х 450 мм",
                image: luggageRack
            },
            {
                name: "Тумба прикроватная с ручкой-вырезом",
                size: "500 х 420 х 500 мм",
                image: nightstandWithCutoutHandle
            },
            {
                name: "Тумба прикроватная с выдвижным ящиком",
                size: "400 х 420 х 500 мм",
                image: nightstandWithHandle
            },
            {
                name: "Тумба прикроватная на металлокаркасе",
                size: "450 х 350 х 500 мм",
                image: nightstandOnMetalFrame
            },
            {
                name: "Тумба открытая под минибар и сейф",
                size: "550 х 450 х 930 мм",
                image: openNightstandForMinibarAndSafe
            },
        ],
    },
    bed: {
        title: "СПАЛЬНОЕ МЕСТО",
        description: "Кровати, матрасы, основания и топперы для комфортного сна.",
        id: 1,
        items: [
            // mattresses
            {
                name: "Матрас Universal",
                size: "1900 x 800 мм",
                image: universalMattressImage
            },
                        {
                name: "Матрас Resident Plus",
                size: "1900 x 800 мм",
                image: residentPlusMattressImage
            },
                        {
                name: "Матрас Resident Ultra",
                size: "1900 x 800 мм",
                image: residentUltraMattressImage
            },
                        {
                name: "Матрас Premium Ultra",
                size: "1900 x 800 мм",
                image: premiumUltraMattressImage
            },
                        {
                name: "Матрас Rent",
                size: "1900 x 800 мм",
                image: rentMattressImage
            },

            // bed bases
            {
                name: "Основание Resolute",
                size: "1900 x 800 мм",
                image: resoluteBaseImage
            },
            {
                name: "Основание Bora",
                size: "1900 x 800 мм",
                image: boraBaseImage
            },
            
            // toppers
            {
                name: "Топпер Small",
                size: "1900 x 800 мм",
                image: smallTopperImage
            },
            {
                name: "Топпер Standart",
                size: "1900 x 800 мм",
                image: standartTopperImage
            },
            {
                name: "Топпер Lux",
                size: "1900 x 800 мм",
                image: luxTopperImage
            },
        ]
    },
    textile: {
        title_1: "ДЕКОРАТИВНЫЙ ТЕКСТИЛЬ",
        image: textileImage,
        title_2: "Саше, декоративные подушки и портьер",
        description: "В уютном номере каждая деталь имеет значение. Декоративный текстиль — это не просто украшение интерьера, а важный элемент гостеприимства, который создает атмосферу комфорта и гармонии. Один из наиболее важных элементов номера – качественные портьеры.Стиль и гармония — сочетание фактур и оттенков с обивкой мебели подчеркивает дизайн номера, делая его целостным и продуманным.Функциональность — правильно подобранный текстиль визуально корректирует пространство, скрывая особенности планировки, а также служит дополнительной шумоизоляцией, поглощая шумы.",
        id: 2,
        items: [

        ]
    },
    lamp: {
        title: "СВЕТИЛЬНИКИ",
        description: "Абажуры, лампы, светодиодные ленты и другие осветительные приборы.",
        items: [

        ]
    },
    posters: {
        title: "ПОСТЕРЫ И КАРТИНЫ",
        description: "Постеры, картины и декоративные элементы для интерьера.",
        items: [

        ]
    },
    equipment: {
        title: "ДОП ОБОРУДОВАНИЕ",
        description: "Дополнительное оборудование для гостиничных помещений.",
        items: [

        ]
    },
    doors: {
        title: "ДВЕРИ",
        description: "Внутренние и внешние двери для гостиничных помещений.",
        items: [

        ]
    },
    carpet: {
        title: "КОВРОЛИН",
        description: "Ковры, ковровые покрытия и другие текстильные изделия.",
        items: [

        ]
    }
};

export default categoryData;