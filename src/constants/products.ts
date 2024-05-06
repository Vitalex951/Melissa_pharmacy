import {Product} from "@/shared/types/card.type";
import risingstar from '@/assets/images/products/Risingstar.jpg'
import arthrofish from '@/assets/images/products/Arthrofish.jpg'
import fortejpg from '@/assets/images/products/fortejpg.jpg'
import SMARTLIFE from '@/assets/images/products/SMARTLIFE.jpg'
import GLS from '@/assets/images/products/GLS.jpg'
import risingstarForte from '@/assets/images/products/risingstar-forte.jpg'
import ANTIAGE from '@/assets/images/products/ANTI-AGE.jpg'
import horseHealth from '@/assets/images/products/horseHealth.jpg'


export const productsMock: Product[] = [
    {
        id: 1,
        image: risingstar,
        description: 'Порошок морского коллагена (collagen marine) обладает наивысшей биодоступностью, легко усваивается и обеспечивает необходимый уровень коллагена всего в одной порции — 1 стик в день.',
        title: 'Risingstar Коллаген гидролизованный морской с витамином С стики №20 по 5г',
        article: '13808',
        category: "Волосы и ногти, Замедление процессов старения, Новинки, Суставы и кости",
        manufacturer: "Прометеус Фарма ООО"
    },
    {
        id: 2,
        image: GLS,
        description: 'Цитрат Цинка — это форма цинка обладает целым рядом эффектов, положительно влияющих на здоровье.',
        title: 'GLS Цинка цитрат капсулы №90 по 350мг',
        article: '13471',
        category: "Витамины, Витамины и микроэлементы, Замедление процессов старения, Иммунитет, Одобрено С. Кашицкой, Простуда, ОРВИ",
        manufacturer: "Глобал Хэлфкеар ООО"
    },
    {
        id: 3,
        image: SMARTLIFE,
        description: 'Поддержание красоты, сохранение упругости и эластичности кожи, здоровый рост волос и ногтей, замедление возрастных изменений кожи.',
        title: 'SMARTLIFE Комплекс для кожи, ногтей и волос с биотином капсулы №60 по 800 мг',
        article: '13908',
        category: "Витамины, Волосы и ногти, Новинки",
        manufacturer: "Смартлайф ООО"
    },
    {
        id: 4,
        image: risingstarForte,
        description: 'Проявления стресса , такие как расстройство сна, апатия, снижение работоспособности часто требует нутрицевтической поддержки. И здесь на помощь приходят мультивитамины Perfect Women.',
        title: 'Risingstar Мультивитаминный комплекс д/женщин (Витамины Форте) капсулы №60 по 1660мг',
        article: '13803',
        category: "Витамины, Витамины и микроэлементы, Новинки",
        manufacturer: "В-МИН+ ООО"
    },
    {
        id: 5,
        image: fortejpg,
        description: 'Усовершенствованная формула БАД для мужчин RISINGSTAR с богатым составом. Включает 22 активных элемента, необходимых мужчине для повышения работоспособности и улучшения мужского здоровья.',
        title: 'Risingstar Мультивитаминный комплекс д/мужчин (Витамины Форте) капсулы №60 по 1660мг',
        article: '13807',
        category: "Витамины и микроэлементы, Новинки",
        manufacturer: "В-МИН+ ООО"
    },
    {
        id: 6,
        image: arthrofish,
        description: '100% натуральный препарат на основе ферментализатов из хрящевой ткани морских организмов (акулы, ската, кальмара, лосося), противовоспалительная активность которых в 50-100 раз выше, чем у аналогичных веществ из крупного рогатого скота или синтезированных искусственно.',
        title: 'Доктор море Артрофиш капс №60',
        article: '11651',
        category: "Суставы и кости",
        manufacturer: "ФармОушенЛаб ООО"
    },
    {
        id: 7,
        image: horseHealth,
        description: 'Эмиз — это уникальный концентрирован-ный безалкогольный продукт, содержащий 360 полифенолов винограда в различной концентрации. Полифенолы винограда — сильнейшие антиоксиданты, и обладают рядом полезных свойств для организма человека.',
        title: 'Лошадиное здоровье гель-бальзам 200мл',
        article: '11216',
        category: "Суставы и кости, Хиты осени",
        manufacturer: "КоролевФарм ООО, РФ"
    },
    {
        id: 8,
        image: ANTIAGE,
        description: 'При накоплении жиров в организме. Три липотропных компонента (холин, инозит и метионин) стимулируют расщепление жиров и способствуют предотвращению их накопления в организме.',
        title: 'Липотропный фактор ANTI-AGE таб. 1,2 г. №60',
        article: '11280',
        category: "Печень, Средства для похудения",
        manufacturer: "Эвалар ЗАО, г. Бийск, РФ"
    }
]